'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Bailey Light",
        img_main: "cross_bailey.jpg",
        code:"aaa-333" ,
        description: "Cross Bailey Light Polished Coral Resin Rollerball Pen",
        stock: 24,
        price: 3380 ,
        brand_id: 3,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 2,
        name: "Classic Century",
        img_main: "cross_classic.jpg",
        code:"aaa-222" ,
        description: "Classic Century Brushed Chrome Rollerball Pen",
        stock: 24,
        price: 4620 ,
        brand_id: 1,
        category_id: 2,
        discount_id: 3
      },
      {
        id: 3,
        name: "Cross Classic Century Collection for Scuderia Ferrari",
        img_main: "cross_ferrari.jpg",
        code:"bbb-222" ,
        description: "Cross Classic Century Collection for Scuderia Ferrari Matte BlackLacquer Rollerball",
        stock: 24,
        price: 4620 ,
        brand_id: 4,
        category_id: 2,
        discount_id: 2
      },
      {
        id: 4,
        name: "Bailey Light",
        img_main: "cross_bailey.jpg",
        code:"bbb-333" ,
        description: "Cross Bailey Light Polished Coral Resin Rollerball Pen",
        stock: 24,
        price: 3380 ,
        brand_id: 5,
        category_id: 3,
        discount_id: 1
      },
      {
        id: 5,
        name: "Cross Classic Century Collection for Scuderia Ferrari",
        img_main: "cross_ferrari.jpg",
        code:"aaa-444" ,
        description: "Cross Classic Century Collection for Scuderia Ferrari Matte BlackLacquer Rollerball",
        stock: 24,
        price: 4620 ,
        brand_id: 2,
        category_id: 3,
        discount_id: 4
      },
      {
        id: 6,
        name: "Classic Century",
        img_main: "cross_classic.jpg",
        code:"aaa-555" ,
        description: "Classic Century Brushed Chrome Rollerball Pen",
        stock: 24,
        price: 4620 ,
        brand_id: 2,
        category_id: 1,
        discount_id: 3
      },
 
     

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
