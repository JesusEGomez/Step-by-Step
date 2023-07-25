const findById = async (model, id) => {
  try {
    const entity = await model.findOne({ where: { id } });
    return entity;
  } catch (error) {
    // throw Error(`Error al buscar la entidad por ID: ${error.message}`);
  }
};

module.exports = { findById };
