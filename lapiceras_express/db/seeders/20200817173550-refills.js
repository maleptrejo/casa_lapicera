'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('refills', [
      {
        id: 1,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 2,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 3,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 4,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 5,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 6,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 7,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 8,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 9,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      },
      {
        id: 10,
        brand_id: 1,
        category_id: 3,
        discount_id: 1,
        ink: 'azul',
        code: faker.random.alphaNumeric(8),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img_main: 'default-img.png',
        price: faker.random.number(),
        stock: faker.random.number(),
      }
    
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('refills', null, {});
  }
};
