module.exports = (sequelize, Sequelize) => {
  const referral = sequelize.define(
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
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "referral",
    }
  );
  referral.associate = (models) => {
    referral.belongsTo(models.user, {
      foreignKey: "userId",
    });
  };
  return referral;
};
