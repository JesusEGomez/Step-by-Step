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

const data = require("../../../productos.js");
const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");
const images = require("../../../assets/database/images.json");
const colors = require("../../../assets/database/colors.json");
const products = require("../../../assets/database/products.json");

// const bulkCreateProducts = async () => {
//   try {
//     const loadProducts = await Product.bulkCreate(products);

//     return loadProducts;
//   } catch (error) {
//     console.log(error);
//   }
// };

const bulkCreateImages = async () => {
  // try {
  //   const loadImages = await Image.bulkCreate(images);
  //   return loadImages;
  // } catch (error) {
  //   console.log(error);
  // }
};

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
    // console.log("loadCategories", loadCategories[0]);
    return loadCategories;
  } catch (error) {
    console.log(error);
  }
};

const bulkCreateSizes = async () => {
  try {
    const loadSizes = await Size.bulkCreate(sizes);
    // console.log("loadSizes", loadSizes[0]);
    return loadSizes;
  } catch (error) {
    console.log(error);
  }
};
// const bulkCreateColors = async () => {
//   try {
//     const loadColors = await Color.bulkCreate(colors);
//     // console.log("loadColors", loadColors[0]);
//     return loadColors;
//   } catch (error) {
//     console.log(error);
//   }
// };
const bulkCreateGender = async () => {
  try {
    const loadGender = await Gender.bulkCreate(gender);
    // console.log("loadGender", loadGender[0]);
    return loadGender;
  } catch (error) {
    console.log(error);
  }
};

const createProducts = () => {
  data.products.forEach(async (product) => {
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
      // image: product.images,
      // size: product.size,
      // category: product.category,
    };
    const createProduct = Product.create(productData);

    const categoryIds = await Promise.all(
      product.category.map(async (category) => {
        console.log("category", category);
        const foundCategory = await Category.findOne({
          where: { name: category },
        });

        if (foundCategory) {
          // console.log("foundCategory.categoryId", foundCategory.id);
          return foundCategory.id;
        }

        await createProduct.setCategory(categoryIds);
      })
    ).then((values) => {
      return values;
    });
    console.log(categoryIds);
  });
};

module.exports = {
  bulkCreateBrands,
  bulkCreateImages,
  bulkCreateCategories,
  bulkCreateGender,
  // bulkCreateColors,
  bulkCreateSizes,
  // bulkCreateProducts,
  createProducts,
};
