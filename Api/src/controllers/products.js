const { Product } = require("../db");

// const filldB = () => {
//   try {
//     return Product.create({
//       item_number: "NICD5432-003",
//       name: "Zapatillas Nike Air Max Excee",
//       description:
//         "Lucí con estilo en tus entrenamientos o en tu día a día gracias a las Zapatillas Nike Air Max Excee, su tecnología Air max te brinda mejores y amortiguadas pisadas que te harán sentir seguro y confiado en cualquier momento que las lleves puestas.",
//       price: 57.99,
//       discount_percentage: 0,
//       rating: [4],
//       stock: 50,
//       brand: ["nike"],
//       category: ["training", "casual"],
//       images: [
//         "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw56df9706/products/NI_CD5432-003/NI_CD5432-003-1.JPG",
//         "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8011ab4c/products/NI_CD5432-003/NI_CD5432-003-2.JPG",
//         "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw888a9341/products/NI_CD5432-003/NI_CD5432-003-4.JPG",
//         "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw44aa7830/products/NI_CD5432-003/NI_CD5432-003-6.JPG",
//       ],
//       size: [34, 35, 37, 38, 39, 40, 42, 43],
//       color: ["black"],
//       gender: ["women"],
//       is_active: true,
//       sold_count: 0,
//     });
//   } catch (error) {}
// };
// filldB();

const postProduct = async (product) => {
  console.log("product", product);
  const newProduct = await Product.create(product);
  // console.log(newProduct);
  return newProduct;
};

module.exports = { postProduct };

// postProducts();

// {
//   item_number: "NIDR7882-700",
//   name: "Zapatillas Urbanas Nike Court Vision Mid Winter Hombre",
//   description:
//     "Si te gusta destacarte entre la multitud, las Zapatillas Urbanas Nike Court Vision Mid Winter Hombre son para vos. Inspirado en el básquetbol de los años 80 te permite llevar tu estilo retro a la temporada de invierno. Los colores clásicos, las lengüetas grandes y el cuello con amortiguación adicional ofrecen un look premium de última moda para que brilles en todo momento. La mezcla de materiales duraderos y acolchados suma calidez a tu outfit para que te sientas cómodo en todo momento. Además, la suela de goma posee un patrón gráfico actualizado para mejorar la tracción y durabilidad. Vestite con un look canchero y elegante.",
//   price: 54.99,
//   discount_percentage: 0,
//   rating: [1, 2, 3, 4, 5],
//   stock: 50,
//   brand: ["nike"],
//   category: ["casual"],
//   images: ["...", "...", "...", "..."],
//   size: [34, 35, 37, 38, 39, 40, 42, 43, 44, 45],
//   color: ["brown"],
//   gender: ["men"],
//   is_active: true,
//   sold_count: 0,
// }
