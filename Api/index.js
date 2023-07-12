// const express = require("express");
// const { config } = require("dotenv");
// const pg = require("pg");
// const { conn } = require("./src/db.js");
// const loadDb = require("./src/controllers/loadDataBase/loadSelections.js");
// const createUsers = require('./src/controllers/loadDataBase/loadUsers.js')

// config();

// const server = express();
// const pool = new pg.Pool({
//   connectionString: process.env.DATEBASE_URL,
// });

// // Syncing all the models at once.
// conn.sync({ force: true }).then(async () => {
//   await loadDb.bulkCreateBrands();
//   await loadDb.bulkCreateCategories();
//   await loadDb.bulkCreateSizes();
//   await loadDb.bulkCreateColors();
//   await loadDb.bulkCreateGender();
//   await loadDb.createAllProducts();
//   await createUsers()

//   server.listen(3001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//   });
// });

//                       oo0oo
//                      o8888888o
//                      88" . "88
//                      (| -- |)
//                      0\  =  /0
//                    __/---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  . .'
//          ."" '<  `._<|>/__.' >' "".
//         | | :  - \.;\ _ /;./ -  : | |
//         \  \ _.   \_ __\ /__ _/   .- /  /
//     =====-.____. ___/__.-___.-'=====
//                       =---='
//     ~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const loadDb = require("./src/controllers/loadDataBase/loadSelections.js");
const createUsers = require('./src/controllers/loadDataBase/loadUsers.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await loadDb.bulkCreateBrands();
  await loadDb.bulkCreateCategories();
  await loadDb.bulkCreateSizes();
  await loadDb.bulkCreateColors();
  await loadDb.bulkCreateGender();
  await loadDb.createAllProducts();
  await createUsers()

  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});