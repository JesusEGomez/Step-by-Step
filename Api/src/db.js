require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const products = require("../productos");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/step`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    define: {
      freezeTableName: true, // Evita la pluralización automática de los nombres de las tablas
    },
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "/models", file))(sequelize);
    if (model) {
      sequelize.models[model.name] = model;
    }
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, User, Brand, Size, Category, Image, Color, Order, Address } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Address.hasMany(User, { foreignKey: "addressId" });
User.belongsTo(Address, { foreignKey: "addressId" });

Product.hasMany(Order, {
  foreignKey: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    allowNull: false,
  },
});
Order.belongsTo(Product);

User.hasMany(Order, {
  foreignKey: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    allowNull: false,
  },
});
Order.belongsTo(User);

Product.belongsToMany(Category, {
  through: "product_category",
  // foreignKey: "productId",
});

Category.belongsToMany(Product, {
  through: "product_category",
  // foreignKey: "categoryId",
});

Product.belongsToMany(Size, {
  through: "product_size",
  // foreignKey: "productId",
});
Size.belongsToMany(Product, {
  through: "product_size",
  // foreignKey: "sizeId",
});

//* Color.hasMany(Product, {
//   foreignKey: {
//     type: DataTypes.INTEGER,
//     // allowNull: false,
//   },
// });
// Product.belongsTo(Color);
Product.belongsToMany(Color, {
  through: "product_color",
});
Color.belongsToMany(Product, {
  through: "product_color",
});

Image.hasMany(Product, { foreignKey: "productId" });
Product.belongsTo(Image, { foreignKey: "productId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
