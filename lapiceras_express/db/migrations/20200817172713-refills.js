'use strict';

module.exports = {
  up: (queryInterface, Types) => {
    return queryInterface.createTable('refills', {
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
      code: {
        type: Types.STRING(50),
        allowNull: false,
        unique: true
      },
      ink: {
        type: Types.STRING(10),
        allowNull: false,
        defaultValue: 'azul'
      },
      img_main: {
        type: Types.STRING(50),
      },
      stock: {
        type: Types.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      name: {
        type: Types.STRING(100),
        allowNull: false,
        defaultValue: 'n/a'
      },
     
    });

  },

  down: (queryInterface, Types) => {
    return queryInterface.dropTable('refills');
  }
};