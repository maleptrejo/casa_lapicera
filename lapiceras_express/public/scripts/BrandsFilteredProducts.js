let applyFilters= document.querySelector('.apply-filter-js')
let checkProf=document.getElementsByClassName('checkProf')
let checkOc=document.getElementsByClassName('checkOc')
let checkCat=document.getElementsByClassName('checkCat')
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

    let categories=[]
    Array.from(checkCat).forEach(cat=>{
        if(cat.checked){
            categories=[...categories, cat.value]
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
            if(!isEmpty(categories)){
                bodyJson.categories=categories
            }
            if(!isEmpty(ocasions)){
                bodyJson.ocasions=ocasions
            }
            if(!isEmpty(professions)){
                bodyJson.professions=professions
            }

    fetch(`http://localhost:3000/api_products/brand/${urlIdCat}/filters`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(bodyJson)
    })

    .then(response=> response.json())
    .then(json=>{
        document.querySelector('#deck-products').innerHTML=""
        let arrayProd= json.data
        
        if (arrayProd.length==0) {
            document.querySelector('div.elemento-2').innerHTML += `<div class="see-more-link"><p>La búsqueda no ha arrojado resultados </p></div>`
        }

        console.log(arrayProd.length)
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
            document.querySelector('#deck-products').innerHTML += divCard
            }
        });

        if (json.meta.pagination.next_page!= null) {
        let more = `<div class="see-more-link"><a id="link-more" href="${json.meta.pagination.next_page}">Ver más</a></div>`
        document.querySelector('div.elemento-2').innerHTML += more
    } else {
        document.querySelector('div.see-more-link').innerHTML=""
    }  
    })
    .then((a) => {
        let linkMore = document.querySelector('a#link-more')
        if (linkMore) { 
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
        }
    }) 
})


