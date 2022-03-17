const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 8889,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.subham_111915128_details = require("./employee.model.js")(sequelize, Sequelize);
db.sahil_111915108_salary = require("./sallery.model.js")(sequelize, Sequelize);

db.sahil_111915108_details.hasMany(db.sahil_111915108_salary, { foreignKey: 'employee_id_number' })
db.sahil_111915108_salary.belongsTo(db.sahil_111915108_details, { foreignKey: 'employee_id_number' })




module.exports = db;
