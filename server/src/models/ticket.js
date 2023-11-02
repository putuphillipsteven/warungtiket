module.exports = (sequelize, Sequelize) => {
  const ticket = sequelize.define(
    "ticket",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ticketName: {
        type: Sequelize.STRING,
      },
      ticketQuantity: {
        type: Sequelize.INTEGER,
      },
      ticketPrice: {
        type: Sequelize.INTEGER,
      },
      ticketDescription: {
        type: Sequelize.STRING,
      },
      eventID: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      tableName: "tickets",
    }
  );
  return ticket;
};
