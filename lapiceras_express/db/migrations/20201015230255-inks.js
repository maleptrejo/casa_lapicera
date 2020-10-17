'use strict';

module.exports = {
  up: (queryInterface, Types) => {
    return queryInterface.createTable('inks', {
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
      color: {
        type: Types.STRING(45),
        allowNull: false,
        defaultValue: 'blue'
      },
  });
    
  },

  down: (queryInterface, Types) => {
    return queryInterface.dropTable('inks');
  }
};
