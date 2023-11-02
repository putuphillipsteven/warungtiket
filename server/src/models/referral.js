module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "referral",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      referralCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isUse: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
      tableName: "referral",
    }
  );
  return user;
};
