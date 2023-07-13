const {
  Product,
  Color,
  Size,
  Category,
  Image,
  Brand,
  Stock,
} = require("../../db");

const getDbProducts = async () => {
  const result = await Product.findAll({
    include: [
      {
        model: Category,
        through: { attributes: [] },
        attributes: ["name"],
      },
      {
        model: Color,
        through: { attributes: [] },
        attributes: ["color"],
      },
      {
        model: Size,
        attributes: ["size"],
        through: { attributes: [] },
      },
      {
        model: Image,
        attributes: ["imageUrl"],
      },
      {
        model: Brand,
        attributes: ["name"],
      },
      {
        model: Stock,
        // attributes: ["stockPerSize"],
      },
    ],
  });
  const products = [];
  const newResult = result.map((product) => {
    const images = product.images.map((i) => i.imageUrl);
    const brand = product.brand.name;
    // const colors = product.colors.map((c) => c.color);
    const colors = product.colors[0].color;

    const categories = product.categories.map((i) => i.name);
    const sizes = product.sizes.map((s) => s.size);
    // {
    //   "id": 7,
    //   "stockPerSize": 10,
    //   "createdAt": "2023-07-13T03:36:17.311Z",
    //   "updatedAt": "2023-07-13T03:36:17.311Z",
    //   "sizeId": 7,
    //   "productId": 1
    // },
    const stock = product.stocks.map((s) => {
      return {
        size: s.sizeId + 34,
        stockPerSize: s.stockPerSize,
      };
    });

    return {
      totalPrice: product.totalPrice,
      totalStock: product.totalStock,
      id: product.id,
      model: product.model,
      item_number: product.item_number,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      sold_count: product.sold_count,
      isPublish: product.isPublish,
      gender: product.gender,
      images: images,
      brand: brand,
      colors: colors,

      categories: categories,
      sizes: sizes,
      stock: stock,
    };

    // console.log("images", images);//funciona
    // console.log("brand", brand);//funciona
    // console.log("colors", colors); //&funciona
    // console.log("sizes", sizes); // no funciona
    // console.log("categories", categories); //
    // console.log("stocks", stock);
    // console.log(product.stocks);
  });
  // return result;
  return newResult;
};

module.exports = { getDbProducts };
