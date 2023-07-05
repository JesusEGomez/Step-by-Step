const { Product, Brand, Size, Category, Color, Image } = require("../../db");
const { Op } = require("sequelize");
const { findById } = require("../../utils/findBy");

const createProductCtrl = async (req, res) => {
  try {
    const {
      item_number,
      model,
      description,
      gender,
      price,
      discountPercentage,
      stock,
      isPublish,
      brand,
      size,
      categories,
      color,
      images,
    } = req.body;

    // Verificar y crear la marca si no existe
    let existingBrand = await Brand.findOne({
      where: { name: { [Op.iLike]: brand } },
    });

    if (!existingBrand) {
      // return res.status(500).json({ message: 'Este brand no existe no puedes relacionarlo.' })
      existingBrand = await Brand.create({ name: brand });
    }

    // Verificar y asociar los tamaños
    const existingSizes = await Size.findAll({
      where: { size: size },
    });
    const existingSizeValues = existingSizes.map((size) => size.size);
    const newSizeValues = size.filter(
      (value) => !existingSizeValues.includes(value)
    );

    const createdSizes = await Size.bulkCreate(
      newSizeValues.map((value) => ({ size: value }))
    );
    const allSizes = [...existingSizes, ...createdSizes];

    // Verificar y asociar las categorías
    const existingCategories = await Category.findAll({
      where: { name: categories },
    });
    const existingCategoryValues = existingCategories.map(
      (category) => category.name
    );
    const newCategoryValues = categories.filter(
      (value) => !existingCategoryValues.includes(value)
    );

    const createdCategories = await Category.bulkCreate(
      newCategoryValues.map((value) => ({ name: value }))
    );
    const allCategories = [...existingCategories, ...createdCategories];

    // Verificar y asociar los colores
    const existingColors = await Color.findAll({
      where: { color: { [Op.in]: color } },
    });
    const existingColorValues = existingColors.map((color) => color.color);
    const newColorValues = color.filter(
      (value) => !existingColorValues.includes(value)
    );

    const createdColors = await Color.bulkCreate(
      newColorValues.map((value) => ({ color: value }))
    );
    const allColors = [...existingColors, ...createdColors];

    // Crear el nuevo producto y establecer la marca, tamaños, categorías y colores

    const newProduct = await Product.create({
      item_number,
      model,
      description,
      price,
      discountPercentage,
      gender,
      stock,
      isPublish,
      brandId: existingBrand.id,
    });

    const colorIds = await Promise.all(
      color.map(async (color) => {
        const foundColor = await Color.findOne({
          where: { color: color },
        });

        if (foundColor) {
          return foundColor.id;
        }
      })
    );
    await newProduct.addColors(colorIds);

    const imagesArr = images;
    const mappedImages = imagesArr.map((url) => {
      return {
        imageUrl: url,
      };
    });

    await Promise.all(
      mappedImages.map(async (url) => {
        const image = await Image.create(url);

        image.setProducts(newProduct);
      })
    );

    await newProduct.setSizes(allSizes);
    await newProduct.setCategories(allCategories);
    // await newProduct.setColors(allColors);

    res
      .status(201)
      .json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear el producto", error: error.message });
  }
};

module.exports = createProductCtrl;
