const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    check(`name`).isLength({min:2}).withMessage(`The key 'name' is missing or has en invalid value (5 caracters at least).`),
   
    body(`name`).custom((value, {req, loc, path})=>{
        return db.Colors.findOne({
            where:{name: value }
        })
        .then(resultado => {
            if(resultado!=null) {
                if(resultado.dataValues.id!=req.params.id) {
                    return Promise.reject();
                  }
           }  
        })
    })
    .withMessage(`The color is already in dataBase`),



    check(`color`).isLength({min:2}).withMessage(`The key 'color' is missing or has en invalid value (5 caracters at least).`),
    body(`color`).custom((value, {req, loc, path})=>{
        return db.Colors.findOne({
            where:{color: value }
        })
        .then(resultado => {
            if(resultado!=null) {
                if(resultado.dataValues.id!=req.params.id) {
                    return Promise.reject();
                  }
           }  
        })
    })
    .withMessage(`The tone is already in dataBase`),
    // check(`img_brand`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'img_brand' is missing or has the wrong extenssion`),
];

/************** EXPORTING MODULE **************/
module.exports = validator;