"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tickets", {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tickets");
  },
};
