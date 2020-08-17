'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('discounts', [
      {
        id: 1,
        level: 0
      },
      {
        id: 2,
        level: 0.1
      },
      {
        id: 3,
        level: 0.2
      },
      {
        id: 4,
        level: 0.3
      },
      {
        id: 5,
        level: 0.4
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('discounts', null, {});
  }
};
