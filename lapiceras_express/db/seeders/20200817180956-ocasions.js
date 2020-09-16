'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ocasions', [
      {
        id: 1,
        name: "Graduación",
       
      },
      {
        id: 2,
        name: "Aniversario",
       
      },
      {
        id: 3,
        name: "Uso personal",
       
      },
      {
        id: 4,
        name: "Cumpleaños",
       
      },
      {
        id: 5,
        name: "Regalo empresarial",
       
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ocasions', null, {});
    
  }
};
