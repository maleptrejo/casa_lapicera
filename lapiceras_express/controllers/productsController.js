const path = require(`path`);
const db = require(path.join(__dirname, `..`, `database`, `models`));
const {
    Op
} = require("sequelize");

const Products = { 
    brandsSee: (req, res)=>{
        res.render('brands')
    },
    repuestos: (req, res)=>{
        res.render('repuestos')
    },
    refills: (req, res)=>{

        db.Refills.findAll({})
        .then(response => {
                let prices=[]
                response.forEach(r=>{
                    prices=[...prices, r.dataValues.price]
                })
                
                function max(input) {
                    if (toString.call(input) !== "[object Array]")  
                      return false;
                 return Math.max.apply(null, input);
                   }
                let price= max(prices)


            let listadoJSON = {
                meta: {
                    status: 200,
                },
                data: price
            }
            res.render('refills', {topprice: price})
           
        })
        .catch(function () {
            res.send('Error')
        })

        
    },
    categoriesProdSee: (req, res)=>{

        db.Products.findAll({})
        .then(response => {
                let prices=[]
                response.forEach(r=>{
                    prices=[...prices, r.dataValues.price]
                })
                
                function max(input) {
                    if (toString.call(input) !== "[object Array]")  
                      return false;
                 return Math.max.apply(null, input);
                   }
                let price= max(prices)


            let listadoJSON = {
                meta: {
                    status: 200,
                },
                data: price
            }
            res.render('products_category', {topprice: price})
        })
        .catch(function () {
            res.send('Error')
        })





        // res.render('products_category')
    },
    brandsProdSee: (req, res)=>{

        db.Products.findAll({})
        .then(response => {
                let prices=[]
                response.forEach(r=>{
                    prices=[...prices, r.dataValues.price]
                })
                
                function max(input) {
                    if (toString.call(input) !== "[object Array]")  
                      return false;
                 return Math.max.apply(null, input);
                   }
                let price= max(prices)


            let listadoJSON = {
                meta: {
                    status: 200,
                },
                data: price
            }
            res.render('products_brand', {topprice: price})
        })
        .catch(function () {
            res.send('Error')
        })
    },
    itemSee: (req, res)=>{
        res.render('item')
    },
  
}

module.exports = Products;