'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('supplies_images', {
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
      supply_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'supplies',
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


    var imageSupply=[]
    for (let i =1; i<=300; i++) { 
      imageSupply.push({
        id:i,
        supply_id: faker.random.number({min:1, max: 300}),
        image_id: faker.random.number({min:1, max: 7}),
      })
    }

    return queryInterface.bulkInsert('supplies_images', imageSupply, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('supplies_images', null, {});
    
  }
};
