const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/


var validator = [
    
    // body(`product_id`).custom(function(product){
    //     return db.Products.findByPk(product).then(resultado => {
    //         if(resultado == null) {
    //            return Promise.reject();
    //        }  
    //     })
    // }).withMessage(`The key 'product_id' is missing or is not in database`),
 
  // check(`route`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'route' is missing or has the wrong extenssion`),

  body(`images`).custom(function(images){

    let arrayFinal=[];

    images.forEach(img=>{
      if (img.match(/\.(png|jpg|jpeg|jfif)$/i)){
        console.log('ok')
        arrayFinal=[...arrayFinal, img]
      }
    })

    if (arrayFinal.length!=images.length){
      console.log('no')
     return Promise.reject();
   
    }
    
  }).withMessage(`The key 'route' is missing or has the wrong extenssion`)

];

/************** EXPORTING MODULE **************/
module.exports = validator;