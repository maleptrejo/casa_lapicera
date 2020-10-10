let idCategory =((window.location.pathname).split('/')).pop()


let cardDeck= document.querySelector('#deck-products')

fetch(`http://localhost:3000/api_products/categories/${idCategory}`)
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function(json){


let arrayProd= json.data.rows

arrayProd.forEach(product => {
    let image= `<img class="card-img-top" src="../../images/products/${product.img_main}" alt="Card image cap">`
    let divBody= `<div class="card-body"><h5 class="card-title">${product.name}</h5><p class="card-text">${product.description}</p></div>`
    let divFooter=`<div class="card-footer filters"><p class="text-muted">$${product.price}</p></div>`
    let divCard=`<div class="card"><a href="/products/item/${product.id}">` + image+divBody+divFooter + `</a></div> `
    cardDeck.innerHTML+=divCard
});



})

