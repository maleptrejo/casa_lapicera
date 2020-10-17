'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {


    var refillsArray=[];
    for (let i =0; i<300; i++) {
      refillsArray.push({

        
        brand_id: faker.random.number({min:1, max: 13}),
        category_id: faker.random.number({min:1, max: 5}),
        discount_id: faker.random.number({min:1, max: 5}),
        name: faker.commerce.productName(),
        code: faker.random.alphaNumeric(8),
        description: faker.lorem.sentence(),
        price: faker.random.number(),
        stock: faker.random.number(),
        // ink: 'azul',

      })
    }




    return queryInterface.bulkInsert('refills', refillsArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('refills', null, {});
  }
};
