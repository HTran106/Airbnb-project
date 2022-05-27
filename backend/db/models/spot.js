'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spot.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    },
    country:{
      allowNull: false,
      type: DataTypes.STRING
      },
    lat: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    lng: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
