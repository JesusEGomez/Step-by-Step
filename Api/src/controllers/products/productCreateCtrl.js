const { Product, Brand, Size } = require('../../db');

const createProductCtrl = async (req, res) => {
    try {
        const { item_number, model, description,
            price, discountPercentage, stock,
            isPublish, brand, size
        } = req.body;

        // Verificar si el brand ya existe en la base de datos
        let existingBrand = await Brand.findOne({ where: { name: brand } });

        if (!existingBrand) {
            existingBrand = await Brand.create({ name: brand });
        }

        // Validar y convertir el array de size
        const validatedSize = size.map((value) => {
            if (typeof value === 'number') {
                return value.toString();
            }
            return value;
        });

        // Verificar si los tamaños ya existen en la base de datos
        const existingSizes = await Size.findAll({ where: { size: validatedSize } });

        // Crear nuevos tamaños si no existen
        const newSizes = validatedSize.filter((value) => !existingSizes.some((size) => size.size === value));
        await Size.bulkCreate(newSizes.map((value) => ({ size: value })));

        // Crear el producto con las asociaciones
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

        res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

module.exports = createProductCtrl;
