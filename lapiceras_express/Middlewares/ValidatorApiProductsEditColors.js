const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [

    check(`colors`).isArray()
    .custom (a=>{

        return a.every((e)=>{
            if (isNaN(e)){
                return false;
            }else{
                return true;
            }
        })
    }).withMessage(`The value is not correct`)
 


    // check(`colors`).not().isNumeric().withMessage(`The value is not correct`).isLength({min:3}).withMessage(`The key 'color' is missing or has an invalid value (3 caracters at least).`),
];


/************** EXPORTING MODULE **************/
module.exports = validator;