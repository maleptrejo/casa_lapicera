var express = require('express');
var router = express.Router();
const path = require(`path`);
const apiProductsController = require(path.join(__dirname,`..`,`controllers`,`apiProductsController`));

/* GET users listing. */
router.get('/', apiProductsController.main);
router.get('/list_json', apiProductsController.listJson);
router.get('/list', apiProductsController.list);
router.get('/item', apiProductsController.itemSee);


module.exports = router;
