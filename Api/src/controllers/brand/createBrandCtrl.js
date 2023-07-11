const { Brand } = require("../../db.js");

const createBrand = async (brand) => {
  // const existsBrand = await Brand.findOne({
  //   where: { name: brand },
  // });

  // if (existsBrand) {
  //   return {
  //     message: `No se puede crear el BRAND debido a que hay un conflicto con un dato unico existente`,
  //   };
  // }
  console.log("controller", brand);
  const newBrand = await Brand.create({ name: brand });
  return newBrand;
};

module.exports = createBrand;
