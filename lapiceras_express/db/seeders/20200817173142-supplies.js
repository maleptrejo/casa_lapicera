'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('supplies', [
      {
        id: 1,
        brand_id: 1,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 2,
        brand_id: 2,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 3,
        brand_id: 3,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 4,
        brand_id: 4,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 5,
        brand_id: 5,
        category_id: 3,
        discount_id: 1
      },
   
 
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('supplies', null, {});
  }
};
