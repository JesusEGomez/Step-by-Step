const { Product, Brand, Size, Category } = require("../../db");
const { Op } = require('sequelize');

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
    } = req.body;

    // // Verificar si el brand ya existe en la base de datos
    let existingBrand = await Brand.findOne({ where: { name: brand } });

    if (!existingBrand) {
      existingBrand = await Brand.create({ name: brand });
      // return res.status(404).json({ message: 'Esta marca de producto no esta registrada en la base de datos.' })
    }
    // --------------------- Size ---------------------

    // // // Validar y convertir el array de size
    // const validatedSize = size.map((value) => {
    //   // if (typeof value === "number") {
    //   //   return value.toString();
    //   // }
    //   return value;
    // });

    // // Verificar si los tamaños ya existen en la base de datos
    // const existingSizes = await Size.findAll({
    //   where: { size: validatedSize },
    // });

    // // Crear nuevos tamaños si no existen
    // const newSizes = validatedSize.filter(
    //   (value) => !existingSizes.some((size) => size.size === value)
    // );
    // await Size.bulkCreate(newSizes.map((value) => ({ size: value })));


    // #####################################################

    // Crear el producto con las asociaciones
    const newProduct = await Product.create({
      item_number,
      model,
      description,
      gender,
      price,
      discountPercentage,
      stock,
      isPublish,
      brandId: existingBrand.id,
      size
    });


    // ---------------------- Categorias -------------------------------------------------
    // Verificar si las categorías existen en la base de datos
    const existingCategories = await Category.findAll({
      where: { name: categories }
    });

    // Obtener o crear los objetos de categoría correspondientes
    const categoryObjects = [];
    for (const category of categories) {
      let categoryObject = existingCategories.find((c) => c.name === category);

      if (!categoryObject) {
        categoryObject = await Category.create({ name: category });
      }
      categoryObjects.push(categoryObject);
    }

    // Agregar las categorías al nuevo producto
    await newProduct.addCategories(categoryObjects);

    res.status(201).json({ message: "Producto creado exitosamente", product: newProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

module.exports = createProductCtrl;
