module.exports = (sequelize, Sequelize) => {
  const ticket = sequelize.define(
    "ticket",
    {
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
  ticket.associate = (models) => {
    ticket.belongsTo(models.event, { foreignKey: "eventID" });
  };

  return ticket;
};
