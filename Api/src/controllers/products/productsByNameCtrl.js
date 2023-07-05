const { Product, Color, Size, Category, Brand } = require("../../db");
const { Op } = require("sequelize");

const productsByNameCtrl = async (req, res) => {
    const { name } = req.query;

    try {
        const products = await Product.findAll({
            where: {
                model: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [Color, Size, Category, Brand]
        })

        if (!products.length) {
            return res.status(404).json({ message: `No se encontraron productos con el modelo: ${name}` });
        }

        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json({ message: 'No se pudo hacer la solicitud', error: error.message })
    }
}

module.exports = productsByNameCtrl;