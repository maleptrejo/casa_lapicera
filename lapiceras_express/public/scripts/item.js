let idProd =((window.location.pathname).split('/')).pop()
let title= document.getElementById('product')
let brand= document.getElementById('brand')
let category= document.getElementById('category')
let price= document.getElementById('price')
let code= document.getElementById('code')
let spanOc= document.getElementById('ocasions')
let spanProf= document.getElementById('professions')

fetch(`http://localhost:3000/api_products/items/${idProd}`)
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function(json){

console.log(json.data)
title.innerHTML=json.data.name
category.innerHTML=`<a href="/products/categories/${json.data.categories.id}">`+json.data.categories.name +` </a>`
// HACER QUE BRAND SEA COMO CAT Y LLEVE CON HIPERVINCULO A PROD DE ESA MARCA!
brand.innerHTML=json.data.brands.name
price.innerHTML=new Intl.NumberFormat("de-DE").format(json.data.price)
code.innerHTML=json.data.code

let ocArray=[];
json.data.ocasions.forEach(oc=>{
    ocArray=[...ocArray, oc.name]
})
spanOc.innerHTML=ocArray.toString().replaceAll(',',', ')

let profArray=[];
json.data.professions.forEach(prof=>{
    profArray=[...profArray, prof.name]
})

spanProf.innerHTML=profArray.toString().replaceAll(',', ', ')


})