const {
  Product,
  User,
  Brand,
  Size,
  Category,
  Image,
  Color,
  Gender,
  Order,
  Stock,
} = require("../../db.js");
const axios = require("axios");

// const data = require("../../../productos.js");
const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");

const colors = require("../../../assets/database/colors.json");
const products = require("../../../assets/database/products.json");
const createProduct = require("../products/createProductController.js");

const bulkCreateBrands = async () => {
  try {
    const loadBrands = await Brand.bulkCreate(brands);

    return loadBrands;
  } catch (error) {
    console.log(error);
  }
};

const bulkCreateCategories = async () => {
  try {
    const loadCategories = await Category.bulkCreate(categories);

    return loadCategories;
  } catch (error) {
    console.log(error);
  }
};

const bulkCreateSizes = async () => {
  try {
    const loadSizes = await Size.bulkCreate(sizes);

    return loadSizes;
  } catch (error) {
    console.log(error);
  }
};
const bulkCreateColors = async () => {
  try {
    const loadColors = await Color.bulkCreate(colors);

    return loadColors;
  } catch (error) {
    console.log(error);
  }
};
const bulkCreateGender = async () => {
  try {
    const loadGender = await Gender.bulkCreate(gender);

    return loadGender;
  } catch (error) {
    console.log(error);
  }
};

const createAllProducts = async () => {
  try {
    // for (let i = 0; i < 10; i++) {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const productData = {
        item_number: product.item_number,
        model: product.name,
        description: product.description,
        price: product.price,
        discountPercentage: product.discount_percentage,
        gender: product.gender[0],
        // brand: product.brand[0],
        stock: product.stock,
        sold_count: product.sold_count,
      };
      const createProduct = await Product.create(productData);

      const categoryIds = await Promise.all(
        product.category.map(async (category) => {
          const foundCategories = await Category.findOne({
            where: { name: category },
          });

          if (foundCategories) {
            return foundCategories.id;
          }
        })
      );
      await createProduct.addCategories(categoryIds);

      const sizeIds = await Promise.all(
        product.size.map(async (size) => {
          const foundSize = await Size.findOne({
            where: { size: size },
          });

          if (foundSize) {
            return foundSize.id;
          }
        })
      );
      await createProduct.addSizes(sizeIds);

      const colorIds = await Promise.all(
        product.color.map(async (color) => {
          const foundColor = await Color.findOne({
            where: { color: color },
          });

          if (foundColor) {
            return foundColor.id;
          }
        })
      );
      await createProduct.addColors(colorIds);

      const foundBrand = await Brand.findOne({
        where: { name: product.brand[0] },
      });

      if (foundBrand) {
        await createProduct.setBrand(foundBrand.id);
      }

      const imagesArr = product.images;

      const mappedImages = imagesArr.map((s) => {
        return {
          imageUrl: s,
        };
      });

      await Promise.all(
        mappedImages.map(async (obj) => {
          const image = await Image.create(obj);

          image.setProduct(createProduct);
        })
      );

      await Promise.all(
        sizes.map(async (size, i) => {
          const sizeStock = productData.stock[size.size];
          // Obtener el stock para el tamaño actual
          //

          // Crear el registro de stock y asociarlo al tamaño y producto correspondientes

          await Stock.create({
            sizeId: i + 1,
            productId: createProduct.id,
            stockPerSize: sizeStock,
          });
        })
      );
      // console.log(productData.stock);
      // await createProduct.setSizes(productData.stock);
    }

    console.log("base de datos cargada");
  } catch (error) {
    console.log("error en la carga base de datos");
    throw error;
  }
};

module.exports = {
  bulkCreateBrands,
  bulkCreateCategories,
  bulkCreateGender,
  bulkCreateColors,
  bulkCreateSizes,
  createAllProducts,
};
