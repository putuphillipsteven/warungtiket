module.exports = (sequelize, Sequelize) => {
  const transaction = sequelize.define(
    "transaction",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      referalId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      eventId: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "transactions",
    }
  );
  transaction.associate = (models) => {
    transaction.belongsTo(models.user, { foreignKey: "userId" });
  };

  return transaction;
};
