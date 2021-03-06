var express = require('express');
var router = express.Router();
const path = require(`path`);
const ProductsController = require(path.join(__dirname,`..`,`controllers`,`productsController`));

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ok')
  });

router.get('/brands', ProductsController.brandsSee);

router.get('/brands_items', ProductsController.brandsProdSee);

router.get('/categories/:id', ProductsController.categoriesProdSee);
router.get('/item/:id', ProductsController.itemSee);
 

module.exports = router;