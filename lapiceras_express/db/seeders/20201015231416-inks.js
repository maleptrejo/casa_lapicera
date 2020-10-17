'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('inks', [
      {
        id: 1,
        color: "blue",
        
      },
     {
       id: 2,
       color: "red",
       
     },
     {
       id: 3,
       color: 'black'
       
     },
     {
       id:4,
  
       color: 'green'
     },
    
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inks', null, {});
    
  }
};
