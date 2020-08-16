'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "Estilograficas",
        img_category: "fountain-baner.jpeg"
      },
      {
        id: 2,
        name: "Boligrafos",
        img_category: "ballpoint1.jpg"
      },
      {
        id: 3,
        name: "Rollerballs",
        img_category: "roller.jpeg"
      },
    
      {
        id: 4,
        name: "Portaminas",
        img_category: "pencil5.jpeg"
      }, 
      {
        id: 5,
        name: "Sets",
        img_category: "sets1.jpeg"
      },
    

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
