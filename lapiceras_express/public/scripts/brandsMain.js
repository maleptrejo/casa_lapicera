let brandsMain = document.querySelector("#brands-grid-main")

// function fetchBrands(url){

    fetch(`http://localhost:3000/api_products/brands`)
    .then(function(respuesta){
        if (respuesta.status==200) {
            return respuesta.json();
        }
        return Promise.reject ('Error...')
    })
    .then (function (json){
       
        for (let i =0; i<json.data.rows.length; i++) {
            console.log(json.data.rows[i])

            //cada div lleva un a con ruta a productos de esa marca
            let elemento =`<div><a href="/products/brands/${json.data.rows[i].id}"><img src= "../../images/brands/${json.data.rows[i].img_brand}" alt='logo_brand' ></a></div>`
            brandsMain.innerHTML+=elemento;
        }

    })


// }