// let cardProfessions= document.querySelector(".card-body-professions")
// let cardOcasions= document.querySelector(".card-body-ocasions")
// let cardBrands= document.querySelector(".card-body-brands")
// let cardColors= document.querySelector(".card-body-colors")


fetch("http://localhost:3000/api_products/brands")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
   let brands=json.data.rows
   brands.forEach(br => {
    cardBrands.innerHTML+=`<label class="container container-filter-check">${br.name}<input id="Brcbox${br.id}" value="${br.id}" type="checkbox" class="checkBr" ><span class="checkmark"></span></label>`
   });
})


fetch("http://localhost:3000/api_products/categories")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
   let Categories=json.data.rows
   Categories.forEach(cat => {
    cardCategories.innerHTML+=`<label class="container container-filter-check">${cat.name}<input id="Catcbox${cat.id}" value="${cat.id}" type="checkbox" class="checkCat" ><span class="checkmark"></span></label>`
   });
})


fetch("http://localhost:3000/api_products/inks")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
    
    let inks=json.data
    
    let fr= document.createDocumentFragment()
    inks.forEach(ink=>{

        let label=document.createElement('label')
        label.classList.add('container')
        label.classList.add('container-filter-check')
        label.innerHTML=`${ink.color}<input id="Inkcbox${ink.id}" value="${ink.id}" type="checkbox" class="checkInk" ><span class="checkmark"></span>`
        fr.appendChild(label)
    })

    cardInks.appendChild(fr)
})




