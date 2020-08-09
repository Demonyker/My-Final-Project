const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isEmail: true,
    }
  },
  phone: {
    type: DataTypes.NUMBER,
  }
}, {
    freezeTableName: true
  // Other model options go here
});

User.sync();
module.exports = {
    User
}