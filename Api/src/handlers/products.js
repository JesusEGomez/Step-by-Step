const {
  getProductsFromDb,
  createProduct,
} = require("../controllers/products/products.js");

const { postImages } = require("../controllers/loadDataBase/loadSelections.js");

const {
  bulkCreateBrands,
  bulkCreateImages,
  bulkCreateCategories,
  bulkCreateGender,
  // bulkCreateColors,
  bulkCreateSizes,
} = require("../controllers/loadDataBase/loadSelections.js");

const pepe = require("../../productos.js");
// bulkCreateBrands();

const allProducts = async (req, res) => {
  try {
  } catch (error) {}
};

const postProduct = async (req, res) => {
  const {
    item_number,
    model,
    description,
    price,
    discountPercentage,
    stock,
    isPublish,
    sold_count,
  } = req.body;
  try {
    const newProduct = await createProduct(req.body);
    // console.log("handler", newProduct);
    res
      .status(201)
      .json({ message: "Producto creado exitosamente", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

const postImagesToUrl = async (req, res) => {
  try {
    const newPepe = pepe.netProducts.flat();

    res.status(201).json(newPepe);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error al crear el imgen" });
  }
};

const hardcodeProducts = async (req, res) => {
  try {
    const newPepe = pepe.products.map((m) => {
      return {
        item_number: m.item_number,
        model: m.name,
        description: m.description,
        price: m.price,
        discount_percentage: m.discount_percentage,
        gender: m.gender[0],
        brand: m.brand[0],
        stock: m.stock,
        sold_count: m.sold_count,
        category: m.category,
        size: m.size,
      };
    });

    res.status(201).json(newPepe);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error al crear el producto" });
  }
};

const getProducts = async (req, res) => {
  const products = await getProductsFromDb();
  res.status(200).json(products);
};

module.exports = {
  getProducts,
  postProduct,
  postImagesToUrl,
  hardcodeProducts,
  allProducts,
};
