'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

console.log(process.env.NODE_ENV)

const models = process.cwd() + '/models/' || __dirname;

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log(config);
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
// .readdirSync(models)
// .filter(file => {
//   return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
// })
// .forEach(file => {
//   console.log(path.join(models, file));
//   const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes);
//   db[model.name] = model;
// });

const files = require.context('./', false, /\.js$/i);
files.keys().forEach(key => {
  if(key.includes('index')){
    return
  }
  const model = files(key)(sequelize, Sequelize.DataTypes)
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Category.belongsTo(db.Asset, {
  foreignKey: "asset_id",
  sourceKey: "id"
})
db.Asset.hasOne(db.Category, {
  foreignKey: "asset_id",
  sourceKey: "id"
})

db.Product.belongsToMany(db.Asset, {
  through: db.Product_Asset,
  foreignKey: "product_id",
  otherKey: "asset_id"
})
db.Asset.belongsToMany(db.Product, {
  through: db.Product_Asset,
  foreignKey: "asset_id",
  otherKey: "product_id"
})

db.Product.belongsToMany(db.Category, {
  through: db.Category_Product,
  foreignKey: "category_id",
  otherKey: "product_id"
})
db.Category.belongsToMany(db.Product, {
  through: db.Category_Product,
  foreignKey: "product_id",
  otherKey: "category_id"
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
