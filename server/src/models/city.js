module.exports = (sequelize, Sequelize) => {
  const city = sequelize.define(
    "city",
    {
      citiesName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "cities",
    }
  );
  return city;
};
