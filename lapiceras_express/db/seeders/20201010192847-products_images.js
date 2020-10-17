'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('products_images', {
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
      image_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'images',
          key: 'id'
        }
      },
    })


    var imageProd=[]
    for (let i =1; i<=300; i++) { 
      imageProd.push({
        id:i,
        product_id: i,
        image_id: faker.random.number({min:1, max: 7}),
      })
    }

    return queryInterface.bulkInsert('products_images', imageProd, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_images', null, {});
    
  }
};
