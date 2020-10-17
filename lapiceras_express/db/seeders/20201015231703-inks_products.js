'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('inks_products', {
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
      ink_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'inks',
          key: 'id'
        }
      },
    })


    var inkProd=[]
    for (let i =1; i<=300; i++) { 
      inkProd.push({
        id:i,
        product_id: i,
        // product_id: faker.random.number({min:1, max: 300}),
        ink_id: faker.random.number({min:1, max: 4}),
      })
    }

    return queryInterface.bulkInsert('inks_products', inkProd, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inks_products', null, {});
    
  }
};
