var express = require('express');
var router = express.Router();
const path = require(`path`);
const apiProductsController = require(path.join(__dirname,`..`,`controllers`,`apiProductsController`));

/* GET users listing. */
router.get('/', apiProductsController.main);
router.get('/list', apiProductsController.list);
router.get('/list_arranged', apiProductsController.listArranged);
// router.get('/list_filters', apiProductsController.listFilters);
router.get('/item/:id', apiProductsController.itemSee);
router.get('/list_cats/:id', apiProductsController.listCats);


module.exports = router;
