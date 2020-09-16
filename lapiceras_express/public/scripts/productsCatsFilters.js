let cardProfessions= document.querySelector(".card-body-professions")
let cardOcasions= document.querySelector(".card-body-ocasions")
let cardBrands= document.querySelector(".card-body-brands")
let cardColors= document.querySelector(".card-body-colors")



fetch("http://localhost:3000/api_products/professions")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
   let professions=json.data.rows
   professions.forEach(prof => {

    cardProfessions.innerHTML+=`<label class="container container-filter-check">${prof.name} <input id="Profcbox${prof.id}" value="${prof.id}" type="checkbox" class="checkProf" ><span class="checkmark"></span></label>`
      //  cardProfessions.innerHTML+=`<label class="check-occasion"><input type="checkbox" id="cbox${prof.id}" value="${prof.id}">${prof.name}</label>`
   });
})

fetch("http://localhost:3000/api_products/ocasions")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
   let ocasions=json.data.rows
   ocasions.forEach(oc => {

    cardOcasions.innerHTML+= `<label class="container container-filter-check">${oc.name}<input id="Occbox${oc.id}" value="${oc.id}" type="checkbox" class="checkOc"><span class="checkmark"></span></label>`
       
   });
})

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

fetch("http://localhost:3000/api_products/colors")
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){
   let colors=json.data.rows
   colors.forEach(col => {
  
    cardColors.innerHTML+=` <label class="container container-filter-check">${col.name}
    <input id="Colcbox${col.id}" value="${col.id}" type="checkbox" class="checkCol">
    <span class="checkmark-color" style="background:${col.color} "></span>
</label> `
   });
})


