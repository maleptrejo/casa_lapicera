'use strict';

module.exports = {
  up: async (queryInterface, Types) => {

    await queryInterface.createTable('products_ocasions', {
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
      ocasion_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'ocasions',
          key: 'id'
        }
      },
    })

    return queryInterface.bulkInsert('products_ocasions', [
    { id: 1,
      product_id:1,
      ocasion_id:1,

    },
    { id: 2,
      product_id:2,
      ocasion_id:2,

    },
    { id: 3,
      product_id:3,
      ocasion_id:3,

    },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_ocasions', null, {});
    
  }
};

