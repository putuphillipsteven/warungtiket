module.exports = (sequelize, Sequelize) => {
  const event = sequelize.define(
    "event",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  event.associate = (models) => {
    event.hasMany(models.ticket, { foreignKey: "eventID" }),
      event.belongsTo(models.user, {
        foreignKey: "userId",
      });
  };

  return event;
};
