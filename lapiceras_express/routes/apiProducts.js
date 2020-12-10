var express = require('express');
var router = express.Router();
const path = require(`path`);

// validators creation
const apiProductsController = require(path.join(__dirname,`..`,`controllers`,`apiProductsController`));
const ValidatorApiProductsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsCreate`));
const ValidatorApiBrandsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiBrandsCreate`));
const ValidatorApiCategoriesCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiCategoriesCreate`));
const ValidatorApiOcasionsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiOcasionsCreate`));
const ValidatorApiProfessionsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProfessionsCreate`));
const ValidatorApiColorsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiColorsCreate`));
const ValidatorApiDiscountsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiDiscountsCreate`));
const ValidatorApiSuppliesCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiSuppliesCreate`));
const ValidatorApiRefillsCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiRefillsCreate`));
const ValidatorApiImagesCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiImagesCreate`));
const ValidatorApiInksCreate = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiInksCreate`));

// validators edition
const ValidatorApiProductsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEdit`));
const ValidatorApiColorsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiColorsEdit`));
const ValidatorApiRefillsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiRefillsEdit`));
const ValidatorApiSuppliesEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiSuppliesEdit`));
const ValidatorApiProductsEditInks = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEditInks`));
const ValidatorApiProductsEditColors = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEditColors`));
const ValidatorApiProductsEditOcasions = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEditOcasions`));
const ValidatorApiProductsEditProfessions = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEditProfessions`));


/* rutas por Get */
router.get('/', apiProductsController.main);
router.get('/destacados', apiProductsController.listDestacados);
router.get('/novedades', apiProductsController.listNovedades);
router.get('/inks', apiProductsController.listInks);
router.get('/list', apiProductsController.list);
router.get('/list_arranged', apiProductsController.listArranged);
router.get('/brands', apiProductsController.listBrandsMain);
router.get('/categories', apiProductsController.listCategories);
router.get('/ocasions', apiProductsController.listOcasions);
router.get('/professions', apiProductsController.listProfessions);
router.get('/colors', apiProductsController.listColors);
router.get('/discounts', apiProductsController.listDiscounts);
router.get('/refills', apiProductsController.listRefills);
router.get('/supplies', apiProductsController.listSupplies);
router.get('/prices', apiProductsController.maxPrice);

// rutas por post
router.post('/brands', ValidatorApiBrandsCreate, apiProductsController.createBrand);
router.post('/categories', ValidatorApiCategoriesCreate, apiProductsController.createCategory);
router.post('/items',ValidatorApiProductsCreate, apiProductsController.itemCreate);
router.post('/ocasions',ValidatorApiOcasionsCreate, apiProductsController.ocasionCreate);
router.post('/colors', ValidatorApiColorsCreate, apiProductsController.colorsCreate);
router.post('/professions',ValidatorApiProfessionsCreate, apiProductsController.professionCreate);
router.post('/discounts',ValidatorApiDiscountsCreate, apiProductsController.discountsCreate);
router.post('/supplies', ValidatorApiSuppliesCreate, apiProductsController.suppliesCreate);
router.post('/refills', ValidatorApiRefillsCreate, apiProductsController.refillsCreate);
// router.post('/images', ValidatorApiImagesCreate, apiProductsController.imagesCreate);
router.post('/inks',ValidatorApiInksCreate, apiProductsController.inksCreate);

// rutas por get parametrizadas 
router.get('/items/:id', apiProductsController.itemSee);
router.get('/category/:id', apiProductsController.catSee);


// rutas por get parametrizadas bring all
router.get('/categories/:id', apiProductsController.listCats);
router.get('/brands/:id', apiProductsController.listBrands);
// router.get('/images/:id', apiProductsController.listImages);


// rutas por post parametrizadas 
router.post('/refills/filters', apiProductsController.refillsFilters);
router.post('/category/:id/filters', apiProductsController.catFilters);
router.post('/brand/:id/filters', apiProductsController.brandFilters);
router.post('/prueba_cat/:id/filters', apiProductsController.pruebaFiltros);

// router.post('/item/:id/images', ValidatorApiImagesCreate, apiProductsController.imagesCreate);
router.post('/item/:id/images',ValidatorApiImagesCreate, apiProductsController.imagesCreate);

//rutas delete parametrizadas
router.delete('/items/:id', apiProductsController.itemDelete);
router.delete('/brands/:id', apiProductsController.brandDelete);
router.delete('/images/:id', apiProductsController.imagesDelete);
router.delete('/ocasions/:id', apiProductsController.ocasionsDelete);
router.delete('/professions/:id', apiProductsController.professionsDelete);
router.delete('/categories/:id', apiProductsController.categoriesDelete);
router.delete('/colors/:id', apiProductsController.colorsDelete);
router.delete('/discounts/:id', apiProductsController.discountsDelete);
router.delete('/refills/:id', apiProductsController.refillsDelete);
router.delete('/supplies/:id', apiProductsController.suppliesDelete);

//rutas por put parametrizadas

router.put('/items/:id',ValidatorApiProductsEdit, apiProductsController.itemPut);
router.put('/items/:id/colors',ValidatorApiProductsEditColors, apiProductsController.itemPutColors);
router.put('/items/:id/inks',ValidatorApiProductsEditInks,apiProductsController.itemPutInks);
router.put('/items/:id/ocasions', ValidatorApiProductsEditOcasions, apiProductsController.itemPutOcasions);
router.put('/items/:id/professions',ValidatorApiProductsEditProfessions, apiProductsController.itemPutProfessions);


router.put('/brands/:id',ValidatorApiBrandsCreate, apiProductsController.brandsPut);
// router.put('/images/:id', apiProductsController.imagesPut);
router.put('/ocasions/:id', ValidatorApiOcasionsCreate, apiProductsController.ocasionsPut);
router.put('/professions/:id',ValidatorApiProfessionsCreate, apiProductsController.professionsPut);
router.put('/categories/:id',ValidatorApiCategoriesCreate, apiProductsController.categoriesPut);
router.put('/colors/:id',ValidatorApiColorsEdit, apiProductsController.colorsNamePut);
router.put('/refills/:id', ValidatorApiRefillsEdit, apiProductsController.refillsPut);
router.put('/refills/:id/inks', ValidatorApiProductsEditInks, apiProductsController.refillsPutInks);
router.put('/supplies/:id', ValidatorApiSuppliesEdit, apiProductsController.suppliesPut);
//no discounts edit





module.exports = router;
