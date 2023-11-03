module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define(
    "category",
    {
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
