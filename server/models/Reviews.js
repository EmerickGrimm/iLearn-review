const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {

  const Reviews = sequelize.define("Reviews", {
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: '0'
    }, 
    category:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags:{
      type: DataTypes.STRING
    }
  })

  return Reviews
}