const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    check(`level`).isDecimal().withMessage(`The key 'level' is missing or has en invalid value.`),
   
    body(`level`).custom(function(level){

        return db.Discounts.findOne({
            where:{level: level }
           
        })
        .then(resultado => {
            if(resultado!=null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The level is already in dataBase`),

 

   
];

/************** EXPORTING MODULE **************/
module.exports = validator;