module.exports = (sequelize, Sequelize) => {
  const transactionDetail = sequelize.define(
    "transactionDetails",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transactionId: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "transactionDetails",
    }
  );
  return transactionDetail;
};
