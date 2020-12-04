'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inks', [
      {
        id: 1,
        color: "azul",
        
      },
     {
       id: 2,
       color: "rojo",
       
     },
     {
       id: 3,
       color: 'negro'
       
     },
     {
       id:4,
  
       color: 'verde'
     },
    
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inks', null, {});
    
  }
};
