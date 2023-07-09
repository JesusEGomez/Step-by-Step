const { Product, Size, Color, Category } = require("../../db.js");

const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");

const colors = require("../../../assets/database/colors.json");

const createProductController = async ({
  item_number,
  name,
  description,
  price,
  discountPercentage,
  gender,
  stock,
  brand,
  size,
  categories,
  color,

  images,
}) => {
  console.log(gender, brand);
  const newProduct = await Product.create({
    item_number,
    model,
    description,
    gender,
    price,
    discountPercentage,
    isPublish,
    // stock,
    brand,
    // size,
    // categories,
    // color,
    // images,
  });
  console.log("newProductController", newProduct);
  // const colorIds = await Promise.all(
  //   color.map(async (color) => {
  //     const foundColor = await Color.findOne({
  //       where: { color: color },
  //     });

  //     if (foundColor) {
  //       return foundColor.id;
  //     }
  //   })
  // );
  // await newProduct.addColors(colorIds);

  // const imagesArr = images;
  // const mappedImages = imagesArr.map((url) => {
  //   return {
  //     imageUrl: url,
  //   };
  // });

  // await Promise.all(
  //   mappedImages.map(async (url) => {
  //     const image = await Image.create(url);

  //     image.setProduct(newProduct);
  //   })
  // );

  return newProduct;
};

module.exports = createProductController;
