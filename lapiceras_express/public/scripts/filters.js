let applyFilters= document.querySelector('.apply-filter-js')
let checkProf=document.getElementsByClassName('checkProf')
let checkOc=document.getElementsByClassName('checkOc')
let checkBr=document.getElementsByClassName('checkBr')
let checkCol=document.getElementsByClassName('checkCol')
let inputFrom= document.querySelector('.js-input-from')
let inputTo= document.querySelector('.js-input-to')
let urlIdCat=((window.location.pathname).split('/')).pop()
// let cardDeck= document.querySelector('#deck-products')

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

applyFilters.addEventListener('click', function(e){

    let professions=[]
    Array.from(checkProf).forEach(prof=>{
        if(prof.checked){
            professions=[...professions, prof.value]
        }
    })

    let ocasions=[]
    Array.from(checkOc).forEach(oc=>{
        if(oc.checked){
            ocasions=[...ocasions, oc.value]
        }
    })

    let brands=[]
    Array.from(checkBr).forEach(br=>{
        if(br.checked){
            brands=[...brands, br.value]
        }
    })

    let colors=[]
    Array.from(checkCol).forEach(col=>{
        if(col.checked){
            colors=[...colors, col.value]
        }
    })

    let prix_min=inputFrom.value;
    let prix_max=inputTo.value;


    let bodyJson= {
            prix_min: prix_min,
            prix_max: prix_max,}

            if(!isEmpty(colors)){
                bodyJson.colors=colors
            }
            if(!isEmpty(brands)){
                bodyJson.brands=brands
            }
            if(!isEmpty(ocasions)){
                bodyJson.ocasions=ocasions
            }
            if(!isEmpty(professions)){
                bodyJson.professions=professions
            }
   
   console.log(JSON.stringify(bodyJson))

    fetch(`http://localhost:3000/api_products/category/${urlIdCat}/filters`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(bodyJson)
    })

    .then(response=> response.json())
    .then(json=>{

        cardDeck.innerHTML=""

        let arrayProd= json.data

       

    arrayProd.forEach(product => {
        console.log(product)
    let image= `<img class="card-img-top" src="../../images/products/${product.img_main}" alt="Card image cap">`
    let divBody= `<div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text">${product.description}</p></div>`
    let divFooter=`<div class="card-footer filters"><p class="text-muted">$${product.price}</p></div>`
    let divCard=`<div class="card"><a href="/products/item/${product.id}">` + image+divBody+divFooter + `</a></div> `
    // let divCard=`<div class="card">` + image+divBody+divFooter + `</div> `
    cardDeck.innerHTML+=divCard
});
        
    } )

  
})