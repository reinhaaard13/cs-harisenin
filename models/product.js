module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  })
}