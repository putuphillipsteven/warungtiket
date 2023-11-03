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
        allowNull: false,
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
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );
  return event;
};
