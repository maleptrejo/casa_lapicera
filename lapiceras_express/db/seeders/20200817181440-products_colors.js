'use strict';

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

    return queryInterface.bulkInsert('products_colors', [
    { id: 1,
      product_id:1,
      color_id:1,

    },
    { id: 2,
      product_id:2,
      color_id:2,

    },
    { id: 3,
      product_id:3,
      color_id:3,

    },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products_colors', null, {});
    
  }
};
