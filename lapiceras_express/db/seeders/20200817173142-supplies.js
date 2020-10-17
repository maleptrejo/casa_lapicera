'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    var suppliesArray=[];
    for (let i =0; i<300; i++) {
      suppliesArray.push({

        
        brand_id: faker.random.number({min:1, max: 13}),
        category_id: faker.random.number({min:1, max: 5}),
        discount_id: faker.random.number({min:1, max: 5}),
        name: faker.commerce.productName(),
        code: faker.random.alphaNumeric(8),
        description: faker.lorem.sentence(),
        price: faker.random.number(),
        stock: faker.random.number(),

      })
    }

    
    return queryInterface.bulkInsert('supplies', suppliesArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('supplies', null, {});
  }
};
