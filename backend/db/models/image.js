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
      // define association here
    }
  }
  Image.init({
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    reviewId: {
      allowNull: false,
      type: DataTypes.INTEGER
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
