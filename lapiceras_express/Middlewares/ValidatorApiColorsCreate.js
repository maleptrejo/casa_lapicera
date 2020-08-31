const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    check(`name`).isLength({min:2}).withMessage(`The key 'name' is missing or has en invalid value (5 caracters at least).`),
    body(`name`).custom(function(color){
        // console.log('esta es mi brand:' +brand)
        return db.Colors.findOne({
            where:{name: color }
           
        })
        .then(resultado => {
            if(resultado!=null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The color is already in dataBase`),

 

    // check(`img_brand`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'img_brand' is missing or has the wrong extenssion`),
];

/************** EXPORTING MODULE **************/
module.exports = validator;