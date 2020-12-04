fetch(`http://localhost:3000/api_products/novedades`)
.then(function (respuesta) {
    if (respuesta.status == 200) {
        return respuesta.json();
    }
    return Promise.reject('Error...')
})
.then(function (json) {
    
    let arrayProd = json.data
  

    if(arrayProd.length<1){
        containerNovedades.innerHTML=`<p> No tenemos productos nuevos </p>`
    } else {

         if(arrayProd.length>1 && arrayProd.length<=2){

        let fr=document.createDocumentFragment();

        arrayProd.forEach(a=>{

            let tarjeta=document.createElement('div');
            let precio=new Intl.NumberFormat("de-DE").format(a.price)
            tarjeta.className="card"
            tarjeta.innerHTML=`<a href="/products/item/${a.id}">
                                <div class="container-img-main">
                                   <img src="../../images/products/${a.images[0].route}" class="card-img-top" alt="${a.name}">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${a.name}</h5>
                                    <p class="card-text">${a.brands.name}</p>
                                    <p class="card-text"><small class="text-muted">$${precio}</small></p>
                                </div>
                                </a>`
            fr.appendChild(tarjeta)
        })

        //if después del for hay 3 o menos, insertar un solo carousel  con active;

       
            let carousel1=document.createElement('div')
            carousel1.classList.add("carousel-item")
            carousel1.classList.add("active")

            let carousel2=document.createElement('div')
            carousel2.classList.add('card-deck')
            carousel2.appendChild(fr)
            carousel1.appendChild(carousel2)
            carouselNovedades.appendChild(carousel1)

        }else if(arrayProd.length>2){

            let fr1=document.createDocumentFragment();
            let fr2=document.createDocumentFragment();

            for (let i=0; i<=5; i++){

                if(i<=2){

                    let tarjeta=document.createElement('div');
                    let precio=new Intl.NumberFormat("de-DE").format(arrayProd[i].price)
                    tarjeta.className="card"
                    tarjeta.innerHTML=`<a href="/products/item/${arrayProd[i].id}">
                                        <div class="container-img-main">
                                           <img src="../../images/products/${arrayProd[i].images[0].route}" class="card-img-top" alt="${arrayProd[i].name}">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${arrayProd[i].name}</h5>
                                            <p class="card-text">${arrayProd[i].brands.name}</p>
                                            <p class="card-text"><small class="text-muted">$${precio}</small></p>
                                        </div>
                                        </a>`
                    fr1.appendChild(tarjeta)
                }else{
                    let tarjeta=document.createElement('div');
                    let precio=new Intl.NumberFormat("de-DE").format(arrayProd[i].price)
                    tarjeta.className="card"
                    tarjeta.innerHTML=`<a href="/products/item/${arrayProd[i].id}">
                                        <div class="container-img-main">
                                           <img src="../../images/products/${arrayProd[i].images[0].route}" class="card-img-top" alt="${arrayProd[i].name}">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">${arrayProd[i].name}</h5>
                                            <p class="card-text">${arrayProd[i].brands.name}</p>
                                            <p class="card-text"><small class="text-muted">$${precio}</small></p>
                                        </div>
                                        </a>`
                    fr2.appendChild(tarjeta)
                }

            }

            let carousel1=document.createElement('div')
            carousel1.classList.add("carousel-item")
            carousel1.classList.add("active")
            let carousel2=document.createElement('div')
            carousel2.classList.add('card-deck')
            carousel2.appendChild(fr1)
            carousel1.appendChild(carousel2)
            carouselNovedades.appendChild(carousel1)

            let carousel1b=document.createElement('div')
            carousel1b.classList.add("carousel-item")
            let carousel2b=document.createElement('div')
            carousel2b.classList.add('card-deck')
            carousel2b.appendChild(fr2)
            carousel1b.appendChild(carousel2b)
            carouselNovedades.appendChild(carousel1b)
         
        }
    }
})


