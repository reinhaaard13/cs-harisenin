module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Product_Asset", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    asset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false
  })
}