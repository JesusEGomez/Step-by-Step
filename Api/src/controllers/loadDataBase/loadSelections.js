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
} = require("../../db.js");
const axios = require("axios");

// const data = require("../../../productos.js");
const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");

const colors = require("../../../assets/database/colors.json");
const products = require("../../../assets/database/products.json");

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
    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      const productData = {
        item_number: product.item_number,
        model: product.name,
        description: product.description,
        price: product.price,
        discount_percentage: product.discount_percentage,
        gender: product.gender[0],
        brand: product.brand[0],
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

      // const imageIds = await Promise.all(
      //   product.images.map(async (image) => {
      //     const foundImage = await Image.findOne({
      //       where: { imageUrl: image },
      //     });

      //     if (foundImage) {
      //       return foundImage.id;
      //     }
      //   })
      // );
      // await createProduct.addImages(imageIds);

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
