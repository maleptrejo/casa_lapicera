'use strict';
const faker= require('faker')

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('inks_refills', {
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
        refill_id: i,
        // refill_id: faker.random.number({min:1, max: 300}),
        ink_id: faker.random.number({min:1, max: 4}),
      })
    }

    return queryInterface.bulkInsert('inks_refills', inkProd, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inks_refills', null, {});
    
  }
};
