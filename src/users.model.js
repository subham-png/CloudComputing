module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.BOOLEAN
    },
    lastname: {
      type: Sequelize.BOOLEAN
    },
    dob: {
      type: Sequelize.DATE
    },
    email: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};
