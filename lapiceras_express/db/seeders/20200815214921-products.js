'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "Bailey Light",
        img_main: "cross_bailey.jpg",
        code:"aaa-333" ,
        description: "Cross Bailey Light Polished Coral Resin Rollerball Pen",
        stock: 24,
        price: 3380 ,
        brands_id: 3,
        categories_id: 3,
      },
      {
        id: 2,
        name: "Classic Century",
        img_main: "cross_classic.jpg",
        code:"aaa-222" ,
        description: "Classic Century Brushed Chrome Rollerball Pen",
        stock: 24,
        price: 4620 ,
        brands_id: 3,
        categories_id: 3,
      },
   //OJO!!! Categorias es n:m!!!
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
