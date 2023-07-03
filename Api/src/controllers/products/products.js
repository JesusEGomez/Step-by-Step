// const data = require("../../productos.json");
const {
  Product,
  Brand,
  Size,
  Color,
  Gender,
  Category,
} = require("../../db.js");
// const data = require("../../../productos");
const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");
// const images = require("../../../assets/database/images.json");
const colors = require("../../../assets/database/colors.json");

// console.log("brands", brands, "data");
const getAllProducts = async () => {
  return data;
};

const createProduct = async ({
  item_number,
  model,
  description,
  price,
  discountPercentage,
  stock,
  isPublish,
  sold_count,
}) => {
  // console.log("item_number", item_number);
  // console.log(
  //   item_number,
  //   model,
  //   description,
  //   price,
  //   discountPercentage,
  //   stock,
  //   isPublish,
  //   sold_count
  // );
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

  // brands.forEach(async (e) => {
  //   const dbBrands = await Brand.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbBrands);
  // });

  // categories.forEach(async (e) => {
  //   const dbCategories = await Category.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbCategories);
  // });

  // gender.forEach(async (e) => {
  //   const dbGender = await Gender.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbGender);
  // });
  // colors.forEach(async (e) => {
  //   const dbColors = await Color.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbColors);
  // });
  // sizes.forEach(async (e) => {
  //   const dbSizes = await Size.findOne({ where: { name: e } });

  //   await newProduct.addBrand(dbSizes);
  // });

  return newProduct;
};

const getProductsFromDb = async () => {
  const products = await Product.findAll();
  // console.log("products", products);
  return products;
};
module.exports = { getProductsFromDb, createProduct, getAllProducts };
