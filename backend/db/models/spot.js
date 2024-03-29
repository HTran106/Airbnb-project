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
      Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true })
      Spot.hasMany(models.Image, { foreignKey: 'spotId', as: 'images', onDelete: 'CASCADE', hooks: true })
      Spot.belongsTo(models.User, { foreignKey: 'ownerId', as: 'Owner' })
      Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true })
      Spot.hasMany(models.Bookmark, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true })
    }
  }
  Spot.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
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
    country: {
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
      type: DataTypes.TEXT
    },
    squareFt: {
      allowNull: true,
      type: DataTypes.INTEGER
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
