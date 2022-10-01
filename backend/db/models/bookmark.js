'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookmark.belongsTo(models.User, { foreignKey: 'userId' });
      Bookmark.belongsTo(models.Spot, { foreignKey: 'spotId' });
    }
  }
  Bookmark.init({
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Spots' },
      onDelete: 'CASCADE'
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};
