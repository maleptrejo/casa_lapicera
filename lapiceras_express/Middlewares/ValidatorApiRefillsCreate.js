const path = require(`path`);
const db = require(path.join(__dirname,`..`,`database`,`models`));
const { check, validationResult, body } = require('express-validator');

/************** MODULE TO EXPORT **************/
var validator = [
    check(`ink`).not().isNumeric().withMessage(`The key 'ink' must be a string`).isLength({min:3}).withMessage(`The key 'ink' is missing or has en invalid value (3 caracters at least).`),
    check(`code`).isLength({min:3}).withMessage(`The key 'code' is missing or has en invalid value (3 caracters at least).`),
    body(`code`).custom(function(code){
        // console.log('esta es mi brand:' +brand)
        return db.Refills.findOne({
            where:{code: code }
           
        })
        .then(resultado => {
            if(resultado!=null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The code is already in dataBase`),
    check(`name`).isLength({min:5}).withMessage(`The key 'name' is missing or has en invalid value (5 caracters at least).`),
    check(`description`).isLength({min:5}).withMessage(`The key 'description' is missing or has en invalid value (5 caracters at least).`),
    check(`price`).isNumeric().withMessage(`The key 'price' is missing or has en invalid value (it must be a number).`),
    check(`stock`).isNumeric().withMessage(`The key 'stock' is missing or has en invalid value (it must be a number).`),
    // check(`img_main`).matches(/\.(png|jpg|jpeg|jfif)$/i).withMessage(`The key 'img_main' is missing or has the wrong extenssion`),
    check(`category_id`).isNumeric().withMessage(`The key 'category_id' is missing or has en invalid value.`),
    body(`category_id`).custom(function(category){

        return db.Categories.findOne({
            where:{id: category }
           
        })
        .then(resultado => {
            if(resultado==null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The category is noy in dataBase`),

    check(`brand_id`).isNumeric().withMessage(`The key 'brand_id' is missing or has en invalid value.`),
    body(`brand_id`).custom(function(brand){

        return db.Brands.findOne({
            where:{id: brand }
           
        })
        .then(resultado => {
            if(resultado==null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The brand is noy in dataBase`),
    check(`discount_id`).isNumeric().withMessage(`The key 'discount_id' is missing or has en invalid value.`),
    body(`discount_id`).custom(function(discount){

        return db.Discounts.findOne({
            where:{id: discount }
           
        })
        .then(resultado => {
            if(resultado==null) {
            
           return Promise.reject();

           }  
        })
    })
    .withMessage(`The discount is noy in dataBase`),
   
];

/************** EXPORTING MODULE **************/
module.exports = validator;