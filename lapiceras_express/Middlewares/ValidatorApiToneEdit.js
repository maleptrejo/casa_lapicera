const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    check(`color`).isLength({min:2}).withMessage(`The key 'color' is missing or has en invalid value (5 caracters at least).`),
   
    body(`color`).custom(function(color){
        return db.Colors.findOne({
            where:{color: color }
   
        })
        .then(resultado => {
    
      
            if(resultado!=null) {
               

           return Promise.reject();

           }  
        })
    })
    .withMessage(`The tone is already in dataBase`),

 

    // check(`img_brand`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'img_brand' is missing or has the wrong extenssion`),
];

/************** EXPORTING MODULE **************/
module.exports = validator;