'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('professions', [
      {
        id: 1,
        name: "Abogado",
       
      },
      {
        id: 2,
        name: "Arquitecto",
       
      },
      {
        id: 3,
        name: "Cargo público | Funcionario",
       
      },
      {
        id: 4,
        name: "Contador público",
       
      },
      {
        id: 5,
        name: "Economista",
       
      },
      {
        id: 6,
        name: "Médico",
       
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('professions', null, {});
    
  }
};
