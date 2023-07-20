const {
  Product,
  Color,
  Size,
  Category,
  Image,
  Brand,
  Stock,
} = require("../../db");

const getReebokProducts = async () => {
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
        where: { name: "reebok" }, // Ad
      },
      {
        model: Stock,
        // attributes: ["stockPerSize"],
      },
    ],
  });

  const newResult = result.map((product) => {
    const images = product.images.map((i) => i.imageUrl);
    const brand = product.brand.name;

    const colors = product.colors[0].color;

    const categories = product.categories.map((i) => i.name);
    const sizes = product.sizes.map((s) => s.size);

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
  });

  return newResult;
};

module.exports = { getReebokProducts };
