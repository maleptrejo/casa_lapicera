'use strict';

module.exports = {
  up: (queryInterface, Types) => {
    return queryInterface.createTable('brands', {
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
      name: {
        type: Types.STRING(50),
      allowNull: false
      },
      img_brand: {
        type: Types.STRING(50),
      
      }
  });
    
  },

  down: (queryInterface, Types) => {
    return queryInterface.dropTable('brands');
  }
};
