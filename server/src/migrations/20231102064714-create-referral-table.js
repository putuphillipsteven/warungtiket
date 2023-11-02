"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("referral", {
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
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
