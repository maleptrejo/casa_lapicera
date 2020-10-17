'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('refills_images', {
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
      refill_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'refills',
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


    var imageRefill=[]
    for (let i =1; i<=300; i++) { 
      imageRefill.push({
        id:i,
        refill_id: faker.random.number({min:1, max: 300}),
        image_id: faker.random.number({min:1, max: 7}),
      })
    }

    return queryInterface.bulkInsert('refills_images', imageRefill, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('refills_images', null, {});
    
  }
};
