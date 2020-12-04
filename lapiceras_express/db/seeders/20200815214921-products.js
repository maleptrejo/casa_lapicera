'use strict';
const faker= require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {

    var productos=[];
    for (let i =0; i<300; i++) {
      productos.push({
      name: faker.commerce.productName(),
       code: faker.random.alphaNumeric(8),
       description: faker.lorem.sentence(),
       stock: faker.random.number(),
       price: faker.random.number(),
       brand_id: faker.random.number({min:1, max: 13}),
      category_id: faker.random.number({min:1, max: 6}),
       discount_id: faker.random.number({min:1, max: 5}),
       selected: faker.random.number({min:0, max: 1}),
       new: faker.random.number({min:0, max: 1}),
       limited: faker.random.number({min:0, max: 1}),
      })
    }

    return queryInterface.bulkInsert('products', productos, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
