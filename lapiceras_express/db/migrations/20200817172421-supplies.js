'use strict';

module.exports = {
  up: (queryInterface, Types) => {
    return queryInterface.createTable('supplies', {
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
    
      category_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      brand_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'brands',
          key: 'id'
        }
      },
      discount_id: {
        type: Types.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'discounts',
          key: 'id'
        }
      },
    });

  },

  down: (queryInterface, Types) => {
    return queryInterface.dropTable('supplies');
  }
};