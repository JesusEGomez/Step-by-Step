const express = require("express");
const { config } = require("dotenv");
const pg = require("pg");
const { conn } = require("./src/db.js");
const loadDb = require("./src/controllers/loadDataBase/loadSelections.js");

config();

const server = express();
const pool = new pg.Pool({
  connectionString: process.env.DATEBASE_URL,
});

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await loadDb.bulkCreateBrands();
  await loadDb.bulkCreateCategories();
  await loadDb.bulkCreateSizes();
  await loadDb.bulkCreateColors();
  await loadDb.bulkCreateGender();
  await loadDb.createAllProducts();
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
