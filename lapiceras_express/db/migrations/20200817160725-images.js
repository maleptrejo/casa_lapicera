'use strict';

module.exports = {
  up: (queryInterface, Types) => {
    return queryInterface.createTable('images', {
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
      route: {
        type: Types.STRING(50),
       
      },
    
      // product_id: {
      //   type: Types.INTEGER.UNSIGNED,
      //   allowNull: false,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'products',
      //     key: 'id'
      //   }
      // },
    });

  },

  down: (queryInterface, Types) => {
    return queryInterface.dropTable('images');
  }
};