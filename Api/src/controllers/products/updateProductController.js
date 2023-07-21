const { Product, Color, Size, Category, Brand, Image } = require("../../db");

const updateProduct = async (id, isPublish) => {
  console.log("id", id);
  try {
    const product = await Product.findByPk(id);

    if (product) {
      // Update the isPublish property of the product object
      product.isPublish = isPublish;

      // Save the changes to the database
      await product.save();

      console.log("Product updated successfully!");
      return product; // Return the updated product if needed
    } else {
      console.log("Product not found.");
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

module.exports = updateProduct;
// Example usage
//   const productIdToUpdate = 1; // Replace this with the actual product id you want to update
//   const newProductData = {
//     // Replace the properties and values with the new data you want to update
//     name: "Updated Product Name",
//     price: 49.99,
//     // ... and other properties
//   };

// updateProduct(productIdToUpdate, newProductData);
