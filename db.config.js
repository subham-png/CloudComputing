module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "subham_111915128",
  dialect: "mysql",
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};