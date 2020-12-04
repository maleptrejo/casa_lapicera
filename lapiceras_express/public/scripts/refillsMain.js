// let idCategory = ((window.location.pathname).split('/')).pop()


let cardDeck = document.querySelector('#deck-products')

fetch(`http://localhost:3000/api_products/refills`)
.then(function (respuesta) {
    if (respuesta.status == 200) {
        return respuesta.json();
    }
    return Promise.reject('Error...')
})
.then(function (json) {
   
    let arrayProd = json.data.rows
    
    let fr= document.createDocumentFragment();

    arrayProd.forEach(product => {
        if(product.images[0]) {
        
        let divCard = document.createElement('div')
        divCard.classList.add('card')
        divCard.innerHTML=`<a href="/products/item/${product.id}">
                            <div class=container-img-card>
                            <img src="../../images/products/${product.images[0].route}" alt="Card image cap">
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </a>`

        fr.appendChild(divCard)
        }

    });


    cardDeck.appendChild(fr)

    
    // let resto= json.meta.pagination.next_page.split('=').pop()

    if (json.meta.pagination.next_page!= null) {
    
        let nextPage = json.meta.pagination.next_page.split('=').pop()
        let more = `<div class="see-more-link"><a id="link-more" href="http://localhost:3000/api_products/refills?start=${nextPage}">Ver más</a></div>`
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
            let bloque=document.getElementById('deck-products')
          
            let arrayProd = json.data.rows
      
            let fr= document.createDocumentFragment();
        
            arrayProd.forEach(product => {
              
                if(product.images[0]) {
                    console.log(product)
                    let divCard = document.createElement('div')
                    divCard.classList.add('card')
                    divCard.innerHTML=`<a href="/products/item/${product.id}">
                            <div class=container-img-card>
                            <img src="../../images/products/${product.images[0].route}" alt="Card image cap">
                            </div>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </a>`

                   fr.appendChild(divCard)
               
                   
                }
            });
          
          bloque.appendChild(fr)
        
 
            if ( json.meta.pagination.next_page!= null) {
              console.log('antes del link')
                 linkMore.href=json.meta.pagination.next_page       
            }else{
                document.querySelector('div.see-more-link').innerHTML=""
            }
            
        })
        
    })
    
})