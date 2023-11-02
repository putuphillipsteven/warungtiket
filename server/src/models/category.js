module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define(
    "category",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoriesName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "categories",
    }
  );
  return category;
};
