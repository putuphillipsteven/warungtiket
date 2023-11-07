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
      referralCode: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      eventId: {
        type: Sequelize.INTEGER,
      },
      referralUsed: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "transactions",
    }
  );
  transaction.associate = (models) => {
    transaction.belongsTo(models.user, {
      foreignKey: "userId",
    });
    transaction.hasMany(models.transactionDetails, {
      foreignKey: "transactionId",
    });
    // transaction.belongsTo(models.event, {
    //   foreignKey: "eventId",
    // });
  };

  return transaction;
};
