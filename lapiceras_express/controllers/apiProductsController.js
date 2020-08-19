const path = require(`path`);
const db = require(path.join(__dirname, `..`, `database`, `models`));
const { Op } = require("sequelize");

const apiProducts = {
    main: (req, res) => {
        res.send('ok')
    },

    list: (req, res) => {
        db.Products.findAndCountAll({
                include: [{
                        association: `brands`
                    },
                    {
                        association: `categories`
                    },
                    {
                        association: `discounts`
                    },
                    {
                        association: `product_imgs`
                    },
                    {
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },


                ],
            })
            .then((products) => {

                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    data: products
                }
                res.json(listadoJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    listArranged: (req, res) => {
        //este controlador trae cierta info en un objeto depurado. Ver si es útil, o si conviene depurar el json en el fetch
        db.Products.findAndCountAll({
                include: [{
                        association: `brands`
                    },
                    {
                        association: `categories`
                    },
                    {
                        association: `discounts`
                    },
                    {
                        association: `product_imgs`
                    },
                    {
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },


                ],
            })
            .then((products) => {

                let prodsCicle = products.rows
                let productsList = []


                prodsCicle.forEach(prod => {


                    let imgsProdArray = prod.dataValues.product_imgs;
                    //nombre variable en array prods
                    let imgsProd = []

                    imgsProdArray.forEach(img => {


                        let image = {
                            imgId: img.dataValues.id,
                            imgRoute: img.dataValues.route
                        }
                        imgsProd.push(image)

                    })


                    let colorsProdArray = prod.dataValues.colors
                    //nombre variable en array prods
                    let colorsProd = []

                    colorsProdArray.forEach(col => {
                        let color = {
                            colorId: col.dataValues.id,
                            colorName: col.dataValues.name,
                            colorCode: col.dataValues.color
                        }
                        colorsProd.push(color)
                    })



                    let professionsProdArray = prod.dataValues.professions
                    let professionsProd = []
                    professionsProdArray.forEach(prof => {
                        let profession = {
                            profId: prof.dataValues.id,
                            profName: prof.dataValues.name,
                        }
                        professionsProd.push(profession)
                    })


                    let ocasionsProdArray = prod.dataValues.ocasions
                    //nombre variable en array prods
                    let ocasionsProd = []
                    ocasionsProdArray.forEach(oc => {
                        let ocasion = {
                            ocId: oc.dataValues.id,
                            ocName: oc.dataValues.name
                        }
                        ocasionsProd.push(ocasion)
                    })

                    let productItem = {
                        id: prod.dataValues.id,
                        code: prod.dataValues.code,
                        name: prod.dataValues.name,
                        price: prod.dataValues.price,
                        description: prod.dataValues.description,
                        img_main: prod.dataValues.img_main,
                        ink: prod.dataValues.ink,
                        stock: prod.dataValues.stock,
                        limited: prod.dataValues.limited,
                        brandId: prod.dataValues.brands.dataValues.id,
                        brandName: prod.dataValues.brands.dataValues.name,
                        brandimg: prod.dataValues.brands.dataValues.img_brand,
                        categoryId: prod.dataValues.categories.dataValues.id,
                        categoryName: prod.dataValues.categories.dataValues.name,
                        categoryImg: prod.dataValues.categories.dataValues.img_category,
                        discountId: prod.dataValues.discounts.dataValues.id,
                        discountLevel: prod.dataValues.discounts.dataValues.level,
                        images: imgsProd,
                        colors: colorsProd,
                        professions: professionsProd,
                        ocasions: ocasionsProd


                    }
                    productsList.push(productItem)

                })



                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    data: productsList
                }
                res.json(listadoJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    itemSee: (req, res) => {
        db.Products.findOne({
                where: {
                    id: req.params.id,
                },
                include: [{
                        association: `brands`
                    },
                    {
                        association: `categories`
                    },
                    {
                        association: `discounts`
                    },
                    {
                        association: `product_imgs`
                    },
                    {
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },


                ],
            })
            .then(response => {


                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    data: response
                }

                res.json(listadoJSON)


            })
            .catch(function () {
                res.send('Error')

            })

    },
    listCats: (req, res) => {
    
        db.Products.findAndCountAll({
                where: {
                    category_id: req.params.id,
                },
                include: [
                    {
                        association: 'professions',
                    },
                    {
                        association: `brands`
                    },
                    {
                        association: `categories`
                    },
                    {
                        association: `discounts`
                    },
                    {
                        association: `product_imgs`
                    },
                    {
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },


                ],
            })
            .then(response => {

                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    data: response
                }

                res.json(listadoJSON)


            })
            .catch(function () {
                res.send('Error')

            })
    },
    listBrands: (req, res)=>{
        db.Brands.findAndCountAll({
           
               
        })
        .then(response => {

            let listadoJSON = {
                meta: {
                    status: 200,
                },
                data: response
            }

            res.json(listadoJSON)


        })
        .catch(function () {
            res.send('Error')

        })
    },
  //list por marcas
  itemDelete: (req, res) =>{
      console.log(req.params.id)
db.Products.destroy({
    where: {
        id: req.params.id
    }
})
.then ((prod)=>{
    res.status(200)
} )
.catch(function () {
    res.send('Error')

})
  },
  brandDelete: (req, res)=>{
    db.Brands.destroy({
        where: {
            id: req.params.id
        }
    })
    .then ((prod)=>{
        res.status(200)
    } )
    .catch(function () {
        res.send('Error')
    
    })
  },
};

module.exports = apiProducts;