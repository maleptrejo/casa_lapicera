'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "Campo Marzio",
        img_brand: "campo.png"
      },
      {
        id: 2,
        name: "Caran d´Ache",
        img_brand: "caran.png"
      },
      {
        id: 3,
        name: "Cross",
        img_brand: "cross-log-new.png"
      },
      {
        id: 4,
        name: "Fisher Space Pen",
        img_brand: "fischer.png"
      },
      {
        id: 5,
        name: "Graf Von Faber-Castell",
        img_brand: "Logo-Graf-von-Faber-Castell.png"
      }, 
      {
        id: 6,
        name: "Lamy",
        img_brand: "lamy.png"
      },
      {
        id: 7,
        name: "Montblanc",
        img_brand: "Montblanc_logo.svg.png"
      },
      {
        id: 8,
        name: "Montegrappa",
        img_brand: "montegrappa.png"
      },
      {
        id: 9,
        name: "Parker",
        img_brand: "parker.png"
      },
      {
        id: 10,
        name: "Pelikan",
        img_brand: "pelikan.png"
      },
      {
        id: 11,
        name: "Pininfarina",
        img_brand: "pininfarina.png"
      },
      {
        id: 12,
        name: "S.T. Dupont",
        img_brand: "dupont.png"
      },
      {
        id: 13,
        name: "Waterman",
        img_brand: "waterman.png"
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
    
  }
};
