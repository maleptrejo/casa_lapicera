let brandsIndex = document.querySelector("#brands-grid")

// function fetchBrands(url){

    fetch(`http://localhost:3000/api_products/brands`)
    .then(function(respuesta){
        if (respuesta.status==200) {
            return respuesta.json();
        }
        return Promise.reject ('Error...')
    })
    .then (function (json){
       

        for (let i =0; i<=7; i++) {
           

            let elemento ="<div><img src= ../../images/brands/" + json.data.rows[i].img_brand+" alt='logo_brand' ></div>"
            brandsIndex.innerHTML+=elemento;
        }

    })


// }