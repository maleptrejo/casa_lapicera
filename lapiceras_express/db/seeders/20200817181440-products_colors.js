'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('products_colors', {
      id: {
        type: Types.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      created_at: {
        type: Types.DATE,
        allowNull: false,
        defaultValue: Types.literal('NOW()'),
      },
      updated_at: {
        type: Types.DATE,
        defaultValue: Types.literal('NOW()'),
      },
      deleted_at: {
        type: Types.DATE,
      },
      product_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        }
      },
      color_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'colors',
          key: 'id'
        }
      },
    })


    var colorProd=[]
    for (let i =1; i<=300; i++) { 
      colorProd.push({
        id:i,
        product_id: faker.random.number({min:1, max: 300}),
        color_id: faker.random.number({min:1, max: 5}),
      })
    }

    return queryInterface.bulkInsert('products_colors', colorProd, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_colors', null, {});
    
  }
};
