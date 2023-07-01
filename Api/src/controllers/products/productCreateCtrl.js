const { Product, Brand, Size } = require('../../db');

const createProductCtrl = async (req, res) => {
    try {
        const {
            item_number,
            model,
            description,
            price,
            discountPercentage,
            stock,
            isPublish,
            brand,
            size,
        } = req.body;

        // Verificar si el brand ya existe en la base de datos
        let existingBrand = await Brand.findOne({ where: { name: brand } });

        if (!existingBrand) {
            existingBrand = await Brand.create({ name: brand });
        }

        // Crear o buscar los tamaños proporcionados
        const existingSizes = await Size.findAll({ where: { size: size } });
        const missingSizes = size.filter((s) => !existingSizes.some((es) => es.size === s));

        // Crear los tamaños faltantes
        const createdSizes = await Promise.all(
            missingSizes.map((s) => Size.create({ size: s }))
        );

        // Crear el producto y asociarlo con el brand y los tamaños
        const newProduct = await Product.create({
            item_number,
            model,
            description,
            price,
            discountPercentage,
            stock,
            isPublish,
            brandId: existingBrand.id,
        });

        // Asociar los tamaños al producto
        await newProduct.addSizes(createdSizes);

        res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

module.exports = createProductCtrl;
