'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('colors', [
      {
        id: 1,
        name: "azul",
        color: "linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,29,107,1) 85%, rgba(32,29,107,1) 100%)"
      },
     {
       id: 2,
       name: "rojo",
       color: "linear-gradient(to right, rgba(232,21,49,1) 0%, rgba(110,11,24,1) 100%)"
     },
     {
       id: 3,
       name: "dorado",
       color: "linear-gradient(to right, rgba(241,231,103,1) 28%, rgba(254,183,70,1) 76%, rgba(254,182,69,1) 77%)"
     }
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', null, {});
    
  }
};
