const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define("Users", {
    fbID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nickname:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  return Users
}