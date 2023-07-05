const { Product, Color, Size, Category, Brand } = require("../../db");

const productsByIdCtrl = async (req, res) => {
    const { id } = req.params;

    try {
        const products = await Product.findOne({
            where: {
                id: id
            },
            include: [Color, Size, Category, Brand]
        })

        if (!products.length) {
            return res.status(404).json({ message: `No se encontraro el producto con el id: ${id}` });
        }

        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json({ message: 'No se pudo hacer la solicitud', error: error.message })
    }
}

module.exports = productsByIdCtrl;