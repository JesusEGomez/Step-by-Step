const {
  Product,
  Color,
  Image,
  Category,
  Brand,
  Stock,
  Size,
} = require("../../db.js");

const brands = require("../../../assets/database/brands.json");
const categories = require("../../../assets/database/categories.json");
const sizes = require("../../../assets/database/sizes.json");
const gender = require("../../../assets/database/gender.json");
const colors = require("../../../assets/database/colors.json");

const createProductController = async ({
  item_number,
  model,
  description,
  price,
  discountPercentage,
  gender,
  stock,
  brand,
  size,
  categories,
  color,
  isPublish,
  images,
}) => {
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
  //

  const sizeIds = await Promise.all(
    size.map(async (s) => {
      const foundSize = await Size.findOne({
        where: { size: s },
      });

      if (foundSize) {
        return foundSize.id;
      }
    })
  );
  await newProduct.addSizes(sizeIds);

  const foundBrand = await Brand.findOne({
    where: { name: brand },
  });
  console.log("foundBrand", foundBrand.id);
  if (foundBrand) {
    await newProduct.setBrand(foundBrand.id);
  }
  console.log(categories);
  const categoryIds = await Promise.all(
    categories.map(async (category) => {
      const foundCategories = await Category.findOne({
        where: { name: category },
      });

      if (foundCategories) {
        return foundCategories.id;
      }
    })
  );
  await newProduct.addCategories(categoryIds);

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

      image.setProduct(newProduct);
    })
  );
  return newProduct;
};

module.exports = createProductController;
