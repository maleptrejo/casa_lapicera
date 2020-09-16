'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('products_professions', {
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
      profession_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'professions',
          key: 'id'
        }
      },
    })

    var object=[]
    for (let i =1; i<=300; i++) { 
      object.push({
        id:i,
        product_id: faker.random.number({min:1, max: 300}),
        profession_id: faker.random.number({min:1, max: 6}),
      })
    }

    return queryInterface.bulkInsert('products_professions', object, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_professions', null, {});
    
  }
};
