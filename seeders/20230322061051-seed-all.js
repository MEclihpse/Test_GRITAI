'use strict';
const Employees = require('../data/db.json').Employees


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    Employees.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
      el.tanggal_lahir = new Date(el.tanggal_lahir)
    })

    await queryInterface.bulkInsert('Employees', Employees, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null, {})
  }
};
