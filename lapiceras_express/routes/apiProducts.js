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

// validators edition
const ValidatorApiProductsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiProductsEdit`));
const ValidatorApiColorsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiColorsEdit`));
const ValidatorApiRefillsEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiRefillsEdit`));
const ValidatorApiSuppliesEdit = require(path.join(__dirname,`..`,`Middlewares`,`ValidatorApiSuppliesEdit`));


/* rutas por Get */
router.get('/', apiProductsController.main);
router.get('/list', apiProductsController.list);
router.get('/list_arranged', apiProductsController.listArranged);
router.get('/brands', apiProductsController.listBrands);
router.get('/categories', apiProductsController.listCategories);
router.get('/ocasions', apiProductsController.listOcasions);
router.get('/professions', apiProductsController.listProfessions);
router.get('/colors', apiProductsController.listColors);
router.get('/discounts', apiProductsController.listDiscounts);
router.get('/refills', apiProductsController.listRefills);
router.get('/supplies', apiProductsController.listSupplies);

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
router.post('/images', ValidatorApiImagesCreate, apiProductsController.imagesCreate);

// rutas por get parametrizadas
router.get('/items/:id', apiProductsController.itemSee);
router.get('/categories/:id', apiProductsController.listCats);
router.get('/images/:id', apiProductsController.listImages);

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
router.put('/brands/:id',ValidatorApiBrandsCreate, apiProductsController.brandsPut);
// router.put('/images/:id', apiProductsController.imagesPut);
router.put('/ocasions/:id', ValidatorApiOcasionsCreate, apiProductsController.ocasionsPut);
router.put('/professions/:id',ValidatorApiProfessionsCreate, apiProductsController.professionsPut);
router.put('/categories/:id',ValidatorApiCategoriesCreate, apiProductsController.categoriesPut);
router.put('/colors/:id',ValidatorApiColorsEdit, apiProductsController.colorsNamePut);
router.put('/refills/:id', ValidatorApiRefillsEdit, apiProductsController.refillsPut);
router.put('/supplies/:id', ValidatorApiSuppliesEdit, apiProductsController.suppliesPut);
//no discounts edit


//rutas por put -revertDelete- parametrizadas
router.put('/items/revert/:id', apiProductsController.itemRevertDelete);
router.put('/brands/revert/:id', apiProductsController.brandRevertDelete);
router.put('/images/revert/:id', apiProductsController.imagesRevertDelete);
router.put('/images_prod/revert/:id', apiProductsController.images_prodRevertDelete);
router.put('/ocasions/revert/:id', apiProductsController.ocasionsRevertDelete);
router.put('/professions/revert/:id', apiProductsController.professionsRevertDelete);
router.put('/categories/revert/:id', apiProductsController.categoriesRevertDelete);
router.put('/colors/revert/:id', apiProductsController.colorsRevertDelete);
router.put('/discounts/revert/:id', apiProductsController.discountsRevertDelete);
router.put('/refills/revert/:id', apiProductsController.refillsRevertDelete);
router.put('/supplies/revert/:id', apiProductsController.suppliesRevertDelete);



module.exports = router;
