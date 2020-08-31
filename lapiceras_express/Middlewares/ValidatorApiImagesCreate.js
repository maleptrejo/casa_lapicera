const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    
    body(`product_id`).custom(function(product){
        return db.Products.findByPk(product).then(resultado => {
            if(resultado == null) {
               return Promise.reject();
           }  
        })
    }).withMessage(`The key 'product_id' is missing or is not in database`),

  // check(`route`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'route' is missing or has the wrong extenssion`),

   
];

/************** EXPORTING MODULE **************/
module.exports = validator;