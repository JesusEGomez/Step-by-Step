const { Product, Size, Color, Category } = require("../../db.js");

const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");

const colors = require("../../../assets/database/colors.json");

const createProduct = async (
  item_number,
  model,
  description,
  price,
  discountPercentage,
  stock,
  isPublish,
  sold_count
) => {
  const newProduct = await Product.create({
    item_number,
    model,
    description,
    price,
    discountPercentage,
    stock,
    isPublish,
    sold_count,
  });
  categories.forEach(async (c) => {
    const dbCategories = await Category.findOne({ where: { name: c } });

    await newProduct.addCategory(dbCategories);
  });
  return newProduct;

  // });
  // colors.forEach(async (e) => {
  //   const dbColors = await Color.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbColors);
  // });
  // sizes.forEach(async (e) => {
  //   const dbSizes = await Size.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbSizes);
  // });
};

module.exports = createProduct;
