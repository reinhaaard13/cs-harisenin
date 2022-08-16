module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Category_Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_id: {
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