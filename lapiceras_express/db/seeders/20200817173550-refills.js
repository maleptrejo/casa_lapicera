'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('refills', [
      {
        id: 1,
        supply_id: 1,
        code:"aaa-445" ,
        img_main: "default-img.png",
        stock: 24,
        name: 'repuesto cross'

      },
      {
        id: 2,
        supply_id: 1,
        code:"aaa-555" ,
        img_main: "default-img.png",
        stock: 24,
        name: 'repuesto cross'

      },
      {
        id: 3,
        supply_id: 1,
        code:"aaa-444" ,
        img_main: "default-img.png",
        stock: 24,
        name: 'repuesto cross'

      },
      {
        id: 4,
        supply_id: 1,
        code:"aaa-111" ,
        img_main: "default-img.png",
        stock: 24,
        name: 'repuesto cross'
      },
    
 
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('refills', null, {});
  }
};
