'use strict';
const faker= require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {

    var productos=[];
    for (let i =0; i<300; i++) {
      productos.push({
      name: faker.commerce.productName(),
       img_main: "cross_bailey.jpg",
       code: faker.random.alphaNumeric(8),
       description: faker.lorem.sentence(),
       stock: faker.random.number(),
       price: faker.random.number(),
       brand_id: faker.random.number({min:1, max: 13}),
      category_id: faker.random.number({min:1, max: 5}),
       discount_id: faker.random.number({min:1, max: 5}),
      })
    }

    return queryInterface.bulkInsert('products', productos, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
