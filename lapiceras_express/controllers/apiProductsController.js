const path = require(`path`);
const db = require(path.join(__dirname, `..`, `database`, `models`));
const {
    Op
} = require("sequelize");
const {
    check,
    validationResult,
    body
} = require(`express-validator`);


function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

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
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },
                    {
                        association: `images`
                    },
                    {
                        association: `inks`
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
                        association: `images`
                    },
                    {
                        association: `inks`
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


                    let imgsProdArray = prod.dataValues.images;
                    //nombre variable en array prods
                    let imgsProd = []

                    imgsProdArray.forEach(img => {


                        let image = {
                            imgId: img.dataValues.id,
                            imgRoute: img.dataValues.route
                        }
                        imgsProd.push(image)

                    })


                    let inksProdArray = prod.dataValues.inks;
                    //nombre variable en array prods
                    let inksProd = []

                    inksProdArray.forEach(ink => {


                        let incArray = {
                            inkId: ink.dataValues.id,
                            color: ink.dataValues.color
                        }
                        inksProd.push(incArray)

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
                        // img_main: prod.dataValues.img_main,
                        inks: inksProd,
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
    listBrandsMain: (req, res) => {
        console.log('aca')
        db.Brands.findAndCountAll({})
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
    listCategories: (req, res) => {
        db.Categories.findAndCountAll({})
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
    listOcasions: (req, res) => {
        db.Ocasions.findAndCountAll({})
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
    listProfessions: (req, res) => {
        db.Professions.findAndCountAll({})
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
    listColors: (req, res) => {
        db.Colors.findAndCountAll({})
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
    listDiscounts: (req, res) => {
        db.Discounts.findAndCountAll({})
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
    listRefills: (req, res) => {

        db.Refills.findAndCountAll({
                include: [{
                    association: `brands`
                }, {
                    association: `discounts`
                }, {
                    association: `categories`
                }, {
                    association: `images`
                }, {
                    association: `inks`
                }, ]
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
    listSupplies: (req, res) => {
        db.Supplies.findAndCountAll({
                include: [{
                    association: `brands`
                }, {
                    association: `discounts`
                }, {
                    association: `categories`
                }, {
                    association: `images`
                }]
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
    maxPrice: (req, res) => {
        db.Products.findAll({})
            .then(response => {
                let prices = []
                response.forEach(r => {
                    prices = [...prices, r.dataValues.price]
                })

                function max(input) {
                    if (toString.call(input) !== "[object Array]")
                        return false;
                    return Math.max.apply(null, input);
                }
                let price = max(prices)


                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    data: price
                }
                res.json(listadoJSON)
            })
            .catch(function () {
                res.send('Error')
            })
    },

    // rutas por post
    itemCreate: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Products.create({
                    code: req.body.code,
                    name: req.body.name,
                    description: req.body.description,
                    // img_main: req.body.img_main == undefined ? `default-img.png` : req.body.img_main,
                    price: req.body.price,
                    stock: req.body.stock,
                    limited: req.body.limited,
                    // ink: req.body.ink,
                    brand_id: req.body.brand_id,
                    category_id: req.body.category_id,
                    discount_id: req.body.discount_id,
                })
                .then((rta) => {
                    let colors = req.body.colors;
                    colors.forEach(col => {
                        rta.addColor(col)
                    })

                    let ocasions = req.body.ocasions;
                    ocasions.forEach(oc => {
                        rta.addOcasion(oc)
                    })

                    let professions = req.body.professions;
                    professions.forEach(prof => {
                        rta.addProfession(prof)
                    })

                    let inks = req.body.ink;
                    inks.forEach(ink2 => {
                        rta.addInk(ink2)
                    })
                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')
                })
        }
    },
    createBrand: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Brands.create({
                    name: req.body.name,
                    img_brand: req.body.img_brand == undefined ? `default-img.png` : req.body.img_brand,
                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    createCategory: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Categories.create({
                    name: req.body.name,
                    img_category: req.body.img_category == undefined ? `default-img.png` : req.body.img_category,
                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }

    },
    ocasionCreate: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {



            db.Ocasions.create({
                    name: req.body.name,

                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    professionCreate: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Professions.create({
                    name: req.body.name,

                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    colorsCreate: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Colors.create({
                    name: req.body.name,
                    color: req.body.color

                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    discountsCreate: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Discounts.create({
                    level: Number(req.body.level),
                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }

    },
    suppliesCreate: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Supplies.create({
                    category_id: req.body.category_id,
                    brand_id: req.body.brand_id,
                    discount_id: req.body.discount_id,
                    code: req.body.code,
                    name: req.body.name,
                    description: req.body.description,
                    // img_main: req.body.img_main == undefined ? `default-img.png` : req.body.img_main,
                    price: req.body.price,
                    stock: req.body.stock,
                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    refillsCreate: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Refills.create({
                    category_id: req.body.category_id,
                    brand_id: req.body.brand_id,
                    discount_id: req.body.discount_id,
                    code: req.body.code,
                    name: req.body.name,
                    description: req.body.description,
                    // img_main: req.body.img_main == undefined ? `default-img.png` : req.body.img_main,
                    price: req.body.price,
                    stock: req.body.stock,
                    // ink: req.body.ink,

                })
                .then((rta) => {
                    let inks = req.body.ink;
                    inks.forEach(ink2 => {
                        rta.addInk(ink2)
                    })
                })
                .then((created) => {



                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    inksCreate: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Inks.create({

                    color: req.body.color

                })
                .then((created) => {
                    let createdJSON = {
                        meta: {
                            status: 201
                        },
                        data: created
                    }
                    res.json(createdJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    imagesCreate: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            arrayImagenes=req.body.images
            arrayImagenes.forEach(image=>{
                db.Images.create({
                    route: image
                }).
                then((resultado)=>{
                    db.Products.findOne({
                        where: {id: req.params.id}
                    })
                    .then((rta)=>{
                        rta.addImage(resultado.dataValues.id)
                    })
                })
                .then((created) => {
                let createdJSON = {
                    meta: {
                        status: 201
                    },
                    data: created
                }
                res.json(createdJSON)
            })
            .catch(function () {
                res.send('Error')
            })

            })
        }

    },
    // rutas por get parametrizadas
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
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    }, {
                        association: `images`
                    },
                    {
                        association: `inks`
                    }


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
                include: [{
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
                        association: `images`
                    },
                    {
                        association: `inks`
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
    listBrands: (req, res) => {
        db.Products.findAndCountAll({
                where: {
                    brand_id: req.params.id,
                },
                include: [{
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
                        association: `images`
                    },
                    {
                        association: `inks`
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
    // listImages: (req, res) => {

    //     db.Products.findOne({
    //             where: {
    //                 id: req.params.id
    //             },
    //             include: {
    //                 association: `product_imgs`
    //             }
    //         })
    //         .then(response => {
    //             let imgMain = response.dataValues.img_main
    //             let imgsObj = response.dataValues.product_imgs
    //             let full_imgs = []
    //             imgsObj.forEach(img => {
    //                 full_imgs.push(img.dataValues.route)
    //             })
    //             full_imgs.push(imgMain)

    //             let listadoJSON = {
    //                 meta: {
    //                     status: 200,
    //                 },
    //                 data: full_imgs
    //             }
    //             res.json(listadoJSON)
    //         })
    //         .catch(function () {
    //             res.send('Error')
    //         })
    // },
    catSee: (req, res) => {
        db.Categories.findOne({
                where: {
                    id: req.params.id
                }
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

    // rutas por post parametrizadas con filtros
    catFilters: (req, res) => {
        console.log(req.body)
        db.Products.findAndCountAll({
                where: {
                    category_id: req.params.id,
                },
                include: [{
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
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },
                    {
                        association: `images`
                    },
                    {
                        association: `inks`
                    },


                ],
            })
          
            .then(array => {

                let filtrados = []

                array.rows.forEach(product => {
                    if ((product.dataValues.price >= req.body.prix_min) && (product.dataValues.price <= req.body.prix_max)) {
                        filtrados.push(product)
                    }
                })

                let brands = req.body.brands
                if (!isEmpty(brands)) {
                    let prodsBrands = []
                    filtrados.forEach(productoFiltrado => {
                        brands.forEach(br => {
                            if (br == productoFiltrado.dataValues.brand_id) {
                                prodsBrands.push(productoFiltrado)
                            }
                        })
                    })
                    filtrados = prodsBrands
                }


                let professions = req.body.professions
                if (!isEmpty(professions)) {
                    let prodsProfession = []
                    filtrados.forEach(productoFiltrado => {
                        productoFiltrado.dataValues.professions.forEach(idProfProd => {
                            professions.forEach(p => {
                                if (p == idProfProd.id) {
                                    if (prodsProfession.includes(productoFiltrado)) {
                                        console.log('está inlcuido')
                                    } else {
                                        prodsProfession.push(productoFiltrado)
                                    }
                                }
                            })
                        })
                    })
                    filtrados = prodsProfession
                }

                let ocasions = req.body.ocasions
                if (!isEmpty(ocasions)) {
                    let prodsOcasions = []
                    filtrados.forEach(productoFiltrado2 => {
                        productoFiltrado2.dataValues.ocasions.forEach(idOcasProd => {
                            ocasions.forEach(oc => {
                                if (oc == idOcasProd.id) {
                                    if (prodsOcasions.includes(productoFiltrado2)) {
                                        console.log('ya está filtrado')
                                    } else {
                                        prodsOcasions.push(productoFiltrado2)
                                    }
                                }
                            })
                        })
                    })
                    filtrados = prodsOcasions
                }

                let colors = req.body.colors
                if (!isEmpty(colors)) {
                    let prodsColors = []
                    filtrados.forEach(productoFiltrado3 => {
                        productoFiltrado3.dataValues.colors.forEach(idColorProd => {
                            colors.forEach(col => {
                                if (col == idColorProd.id) {
                                    if (prodsColors.includes(productoFiltrado3)) {
                                        console.log('ya está filtrado')
                                    } else {
                                        prodsColors.push(productoFiltrado3)
                                    }
                                }
                            })
                        })
                    })
                    filtrados = prodsColors
                }

                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    count: filtrados.length,
                    data: filtrados
                }
                res.json(listadoJSON)
            })
            .catch(function () {
                res.send('Error')
            })
    },
    brandFilters: (req, res) => {
        //ojo!!!! arreglar filtros brands!! mirar el de cats
        db.Products.findAndCountAll({
                where: {
                    brand_id: req.params.id,
                },
                include: [{
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
                        association: `colors`
                    },
                    {
                        association: `professions`
                    },
                    {
                        association: `ocasions`
                    },
                    {
                        association: `images`
                    },
                    {
                        association: `inks`
                    },


                ],
            })
            .then(arrayBrands => {

                let filtradosBrands = []

                arrayBrands.rows.forEach(product => {
                    if ((product.dataValues.price >= req.body.prix_min) && (product.dataValues.price <= req.body.prix_max)) {
                        let categories = req.body.categories;
                        if (!isEmpty(categories)) {
                            categories.forEach(catId => {
                                if (product.dataValues.category_id == catId) {
                                    filtradosBrands.push(product)
                                }
                            })
                        }
                    }
                })

                let professions = req.body.professions
                if (!isEmpty(professions)) {
                    let prodsProfession = []
                    filtradosBrands.forEach(productoFiltrado => {
                        productoFiltrado.dataValues.professions.forEach(idProfProd => {
                            professions.forEach(p => {
                                if (p == idProfProd.id) {
                                    if (prodsProfession.includes(productoFiltrado)) {
                                        console.log('está inlcuido')
                                    } else {
                                        prodsProfession.push(productoFiltrado)
                                    }
                                }
                            })
                        })
                    })
                    filtradosBrands = prodsProfession
                }

                let ocasions = req.body.ocasions
                if (!isEmpty(ocasions)) {
                    let prodsOcasions = []
                    filtradosBrands.forEach(productoFiltrado2 => {
                        productoFiltrado2.dataValues.ocasions.forEach(idOcasProd => {
                            ocasions.forEach(oc => {
                                if (oc == idOcasProd.id) {
                                    if (prodsOcasions.includes(productoFiltrado2)) {
                                        console.log('ya está filtrado')
                                    } else {
                                        prodsOcasions.push(productoFiltrado2)
                                    }
                                }
                            })
                        })
                    })
                    filtradosBrands = prodsOcasions
                }

                let colors = req.body.colors
                if (!isEmpty(colors)) {
                    let prodsColors = []
                    filtradosBrands.forEach(productoFiltrado3 => {
                        productoFiltrado3.dataValues.colors.forEach(idColorProd => {
                            colors.forEach(col => {
                                if (col == idColorProd.id) {
                                    if (prodsColors.includes(productoFiltrado3)) {
                                        console.log('ya está filtrado')
                                    } else {
                                        prodsColors.push(productoFiltrado3)
                                    }
                                }
                            })
                        })
                    })
                    filtradosBrands = prodsColors
                }

                let listadoJSON = {
                    meta: {
                        status: 200,
                    },
                    count: filtradosBrands.length,
                    // data: filtradosBrands
                    data: arrayBrands
                }

                res.json(listadoJSON)


            })
            .catch(function () {
                res.send('Error')

            })
    },

    //rutas delete parametrizadas
    itemDelete: (req, res) => {
        console.log(req.params.id)
        db.Products.destroy({
                where: {
                    id: req.params.id
                },

            })
            .then((prod) => {

                db.Product_imgs.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })

                // let deletedJSON = {
                //     meta: {
                //         status: 201
                //     },
                // }
                // res.json(deletedJSON)
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    brandDelete: (req, res) => {
        db.Brands.destroy({
                where: {
                    id: req.params.id
                },
            })
            .then((prod) => {
                db.Products.destroy({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })
            .then((supply) => {
                db.Supplies.destroy({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })
            .then((refill) => {
                db.Refills.destroy({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })

            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    imagesDelete: (req, res) => {
        db.Product_imgs.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    ocasionsDelete: (req, res) => {
        db.Ocasions.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    professionsDelete: (req, res) => {
        db.Professions.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    categoriesDelete: (req, res) => {
        db.Categories.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    colorsDelete: (req, res) => {
        db.Colors.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    discountsDelete: (req, res) => {
        db.Discounts.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    refillsDelete: (req, res) => {
        db.Refills.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((deleted) => {
                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    suppliesDelete: (req, res) => {

        db.Supplies.destroy({
                where: {
                    id: req.params.id
                }
            })
            // .then((deleted) => {  
            //     db.Refills.destroy({
            //         where: {
            //             supply_id: req.params.id
            //         }
            //     })
            // })
            .then((end) => {

                let deletedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(deletedJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },

    //rutas por put parametrizadas
    itemPut: (req, res) => {
        db.Products.update({
                code: req.body.code,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                limited: req.body.limited,
                ink: req.body.ink,
                category_id: req.body.category_id,
                discount_id: req.body.discount_id,
                brand_id: req.body.discount_id


            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let editedJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(editedJSON)
            })
            .catch(function () {
                res.send('Error')
            })
    },

    brandsPut: (req, res) => {

        Promise.resolve('Success')
            .then(data => {
                return data.toUpperCase()
            })
            .then(data => {
                console.log(data)
            })

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Brands.update({
                    name: req.body.name,
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    ocasionsPut: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Ocasions.update({
                    name: req.body.name,

                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    professionsPut: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Professions.update({
                    name: req.body.name,

                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    categoriesPut: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Categories.update({
                    name: req.body.name,

                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    colorsNamePut: (req, res) => {
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {

            db.Colors.update({
                    name: req.body.name,
                    color: req.body.color


                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },
    refillsPut: (req, res) => {

        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Refills.update({
                    code: req.body.code,
                    ink: req.body.ink,
                    stock: req.body.stock,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    category_id: req.body.category_id,
                    discount_id: req.body.discount_id,
                    brand_id: req.body.discount_id


                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')
                })
        }
    },
    suppliesPut: (req, res) => {
        //atención!! el body de esta query tiene que traer tmb el id para atravesar el validador.
        let errors = validationResult(req).errors;
        if (errors.length > 0) {
            res.send(errors)
        } else {
            db.Supplies.update({
                    code: req.body.code,
                    stock: req.body.stock,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    category_id: req.body.category_id,
                    discount_id: req.body.discount_id,
                    brand_id: req.body.discount_id


                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then((end) => {

                    let editedJSON = {
                        meta: {
                            status: 201
                        },
                    }
                    res.json(editedJSON)
                })
                .catch(function () {
                    res.send('Error')

                })
        }
    },



    //rutas por put parametrizadas
    itemRevertDelete: (req, res) => {

        db.Products.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((prod) => {

                db.Product_imgs.restore({
                    where: {
                        product_id: req.params.id
                    }
                })
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })

    },
    //recupera una imagen borrada
    imagesRevertDelete: (req, res) => {
        db.Product_imgs.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    //recupera todas las imagenes borradas de un producto.
    images_prodRevertDelete: (req, res) => {
        db.Product_imgs.restore({
                where: {
                    product_id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    ocasionsRevertDelete: (req, res) => {
        db.Ocasions.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    professionsRevertDelete: (req, res) => {
        db.Professions.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    categoriesRevertDelete: (req, res) => {
        db.Categories.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    colorsRevertDelete: (req, res) => {
        db.Colors.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    discountsRevertDelete: (req, res) => {
        db.Discounts.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    refillsRevertDelete: (req, res) => {
        db.Refills.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    suppliesRevertDelete: (req, res) => {
        db.Supplies.restore({
                where: {
                    id: req.params.id
                }
            })

            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })
    },
    brandRevertDelete: (req, res) => {

        db.Brands.restore({
                where: {
                    id: req.params.id
                }
            })
            .then((item) => {
                db.Products.restore({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })
            .then((item) => {
                db.Supplies.restore({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })
            .then((item) => {
                db.Refills.restore({
                    where: {
                        brand_id: req.params.id
                    }
                })
            })

            .then((end) => {

                let restoredJSON = {
                    meta: {
                        status: 201
                    },
                }
                res.json(restoredJSON)
            })
            .catch(function () {
                res.send('Error')

            })

        // db.Brands.findOne({
        //         where: {
        //             id: req.params.id
        //         },
        //         paranoid: false
        //     })
        //     .then(function (b) {
        //         b.setDataValue('deleted_at', null);
        //         res.send('ok')
        //         return b.save({
        //             paranoid: false
        //         })

        //     })
        //     .catch(function () {
        //         res.send('Error')

        //     })


    },
};

module.exports = apiProducts;

//tengo tres controladores diferentes para recuperar imágenes:
//-individualmente
//-asociadas a la recuperacióin de un producto
//-todas cuando el id prod es el que viene por parámetro
//cuando se recupera un producto al recuperar la marca, tengo dos opciones:
//-o coloco un botón que dirija a recuperar las imágenes 
//-se puede hacer un redireccionamiento automático)