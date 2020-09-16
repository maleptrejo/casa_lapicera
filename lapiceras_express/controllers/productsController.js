const path = require(`path`);
const db = require(path.join(__dirname, `..`, `database`, `models`));
const {
    Op
} = require("sequelize");

const Products = { 
    brandsSee: (req, res)=>{
        res.render('brands')
    },
    categoriesProdSee: (req, res)=>{
        res.render('products_category')
    },
    brandsProdSee: (req, res)=>{
        res.render('products_brand')
    },
    itemSee: (req, res)=>{
        res.render('item')
    },
  
}

module.exports = Products;