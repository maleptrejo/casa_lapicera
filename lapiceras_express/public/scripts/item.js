let idProd =((window.location.pathname).split('/')).pop()
let title= document.getElementById('product')
let brand= document.getElementById('brand')
let category= document.getElementById('category')
let price= document.getElementById('price')
let code= document.getElementById('code')
let spanOc= document.getElementById('ocasions')
let spanProf= document.getElementById('professions')
let carouselBig= document.querySelector('.carousel-inner')
// let carouselSmall=document.querySelector('.carousel-indicators')
let control=document.querySelectorAll('.control')

fetch(`http://localhost:3000/api_products/items/${idProd}`)
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function(json){

title.textContent=json.data.name
// title.innerHTML=json.data.name

// category.innerHTML=`<a href="/products/categories/${json.data.categories.id}">`+json.data.categories.name +` </a>`
let a=document.createElement('a')
a.setAttribute('href',`/products/categories/${json.data.categories.id}` )
a.textContent=json.data.categories.name
category.appendChild(a)

// brand.innerHTML=json.data.brands.name

let aBrand=document.createElement('a')
aBrand.setAttribute('href', `/products/brands/${json.data.brands.id}`)
aBrand.textContent=json.data.brands.name
brand.appendChild(aBrand)

price.textContent=new Intl.NumberFormat("de-DE").format(json.data.price)

code.textContent=json.data.code

let ocArray=[];
json.data.ocasions.forEach(oc=>{
    ocArray=[...ocArray, oc.name]
})
spanOc.textContent=ocArray.toString().replaceAll(',',', ')

let profArray=[];
json.data.professions.forEach(prof=>{
    profArray=[...profArray, prof.name]
})

spanProf.textContent=profArray.toString().replaceAll(',', ', ')

//<div class="carousel-item active"> <img src="../../images/products/bailey1.jpg" alt="Hills"> </div>

let divImg=document.createElement('div')
divImg.classList.add('carousel-item')
let imgBig=document.createElement('img')
imgBig.setAttribute('alt', 'imagen del producto')
imgBig.classList.add('d-block')
imgBig.classList.add('w-100')

if(json.data.images.length==1){

    divImg.classList.add('active')
    imgBig.setAttribute('src', `../../images/products/${json.data.images[0].route}` )
    divImg.appendChild(imgBig)
    carouselBig.appendChild(divImg)

    control.forEach(cont=>{
        cont.setAttribute('style', 'display: none')
    })

} else if (json.data.images.length>1){

    let fragBig= document.createDocumentFragment();
    // let fragSmall= document.createDocumentFragment();

    for (let i=0; i<json.data.images.length; i++) {

        let divImg2=document.createElement('div')
        divImg2.classList.add('carousel-item')
        let imgBig2=document.createElement('img')
        imgBig2.setAttribute('alt', 'imagen del producto')

        if(i==0){
            divImg2.classList.add('active')
        }
        imgBig2.setAttribute('src', `../../images/products/${json.data.images[i].route}` )
        divImg2.appendChild(imgBig2)
        fragBig.appendChild(divImg2)

    }
   
    carouselBig.appendChild(fragBig)
   
}

})