let idBrand = ((window.location.pathname).split('/')).pop()


let cardDeck = document.querySelector('#deck-products')

fetch(`http://localhost:3000/api_products/brands/${idBrand}`)
.then(function (respuesta) {
    if (respuesta.status == 200) {
        return respuesta.json();
    }
    return Promise.reject('Error...')
})
.then(function (json) {
    
    let arrayProd = json.data.rows
    arrayProd.forEach(product => {
        if(product.images[0]) {
        
        let divCard = `  <div class="card">
        <a href="/products/item/${product.id}">
        <div class=container-img-card>
        <img src="../../images/products/${product.images[0].route}" alt="Card image cap">
        </div>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </a>
        </div>`
        cardDeck.innerHTML += divCard
        }
    });
    
    let resto= json.meta.pagination.next_page.split('=').pop()

    if (json.meta.pagination.next_page!= null) {
        
        let nextPage = json.meta.pagination.next_page.split('=').pop()
        let more = `<div class="see-more-link"><a id="link-more" href="http://localhost:3000/api_products/brands/${idBrand}?start=${nextPage}">Ver más</a></div>`
        document.querySelector('div.elemento-2').innerHTML += more
    } else {
        document.querySelector('div.elemento-2').innerHTML += ""
    }
    
})



.then((a) => {
    let linkMore = document.querySelector('a#link-more')
    linkMore.addEventListener('click', function (e) {
        e.preventDefault()
       
        fetch(this.href)
        .then(function (respuesta) {
            if (respuesta.status == 200) {
                return respuesta.json();
            }
            return Promise.reject('Error...')
        })
        .then(function (json) {
           
            let arrayProd = json.data.rows
            
        
            arrayProd.forEach(product => {
              
                if(product.images[0]) {

                let divCard = `  <div class="card">
                <a href="/products/item/${product.id}">
                <div class=container-img-card>
                <img src="../../images/products/${product.images[0].route}" alt="Card image cap">
                </div>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </a>
                </div>`
                document.querySelector('#deck-products').innerHTML+=divCard
                }
            });
 
            if ( json.meta.pagination.next_page!= null) {
                 linkMore.href=json.meta.pagination.next_page       
            }else{
                document.querySelector('div.see-more-link').innerHTML=""
            }
            
        })
        
    })
    
})