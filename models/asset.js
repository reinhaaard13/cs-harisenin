module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Asset", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  })
}