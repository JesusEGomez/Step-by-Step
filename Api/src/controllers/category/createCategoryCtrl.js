const { Category } = require('../../db.js');
const { Op } = require('sequelize');

const createCategoryCtrl = async (req, res) => {
    const { name } = req.body;
    try {
        const existingCategories = await Category.findAll({ where: { name: { [Op.iLike]: name } } });

        if (existingCategories.length > 0) {
            return res.status(500).json({ message: 'Estas categorías ya fueron creadas.' });
        }

        const newCategories = name.map((categoryName) => ({ name: categoryName }));
        await Category.bulkCreate(newCategories);
        
        return res.status(201).json({ message: 'Categoría creada.', category: newCategories });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
    }
}

module.exports = createCategoryCtrl;
