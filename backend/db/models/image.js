'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Spot, { foreignKey: 'spotId' })
      Image.belongsTo(models.Review, { foreignKey: 'reviewId' })
    }
  }
  Image.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
    },
    reviewId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
    },
    imageType: {
      allowNull: false,
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
