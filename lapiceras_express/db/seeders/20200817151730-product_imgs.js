'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    
     return queryInterface.bulkInsert('product_imgs', [
       {
       id: 1,
       route: 'default-img.png',
       product_id: 1
     },
     {
      id: 2,
      route: 'default-img.png',
      product_id: 2
    },
    {
      id: 3,
      route: 'default-img.png',
      product_id: 3
    },
    {
      id: 4,
      route: 'default-img.png',
      product_id: 1
    }
    
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('product_imgs', null, {});
     
  }
};
