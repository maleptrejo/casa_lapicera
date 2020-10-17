'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  

    // var imagenes=[];
    // for (let i =0; i<300; i++) {
    //   imagenes.push({
    //     route: 'default-img.png',
    //   })
    // }

    var imagenes=[
      {
        id: 1,
        route: 'cross_bailey.jpg'
      },
      {
        id: 2,
        route: 'cross_ferrari.jpg'
      },
      {
        id: 3,
        route: 'cross_classic.jpg'
      },
      {
        id: 4,
        route: 'bailey3.jpg'
      },
      {
        id: 5,
        route: 'bailey2.jpg'
      },
      {
        id: 6,
        route: 'bailey1.jpg'
      },
      {
        id: 7,
        route: 'bailey4.jpg'
      }
    ]
    
     return queryInterface.bulkInsert('images', imagenes, {});
   
  },

  down: async (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('images', null, {});
     
  }
};
