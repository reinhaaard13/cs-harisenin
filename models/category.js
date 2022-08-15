module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    asset_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  })
}