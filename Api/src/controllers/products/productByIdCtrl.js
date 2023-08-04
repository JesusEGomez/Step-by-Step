const {
  Product,
  Color,
  Size,
  Category,
  Brand,
  Image,
  Stock,
} = require("../../db");

const productsByIdCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findOne({
      where: { id },
      include: [Color, Size, Category, Brand, Image, Stock],
      // include: [
      //   { model: Color, attributes: ["color"] },
      //   { model: Size, attributes: ["size"] },
      //   { model: Category, attributes: ["name"] },
      //   { model: Brand, attributes: ["name"] },
      //   { model: Image, attributes: ["imageUrl"] },
      //   { model: Stock },
      // ],
    });
    if (!products) {
      return res
        .status(404)
        .json({ message: `No se encontraro el producto con el id: ${id}` });
    }

    const newStock = products.stocks.map((s) => {
      return {
        size: s.sizeId + 34,
        stockPerSize: s.stockPerSize,
      };
    });
    // console.log(newStock);

    const newProduct = {
      totalPrice: products.totalPrice,
      totalStock: products.totalStock,
      id: products.id,
      model: products.model,
      item_number: products.item_number,
      description: products.description,
      price: products.price,
      discountPercentage: products.discountPercentage,
      sold_count: products.sold_count,
      isPublish: products.isPublish,
      gender: products.gender,
      images: products.images,
      brand: products.brand,
      colors: products.colors,

      categories: products.categories,
      sizes: products.sizes,

      stock: newStock,
    };
    // console.log(newProduct);
    return res.status(200).json(newProduct);

    // return res.status(200).json(products);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudo hacer la solicitud", error: error.message });
  }
};

module.exports = productsByIdCtrl;
