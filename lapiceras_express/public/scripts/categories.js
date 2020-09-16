let banerCats = document.querySelector('.baner-js')

let h2=document.querySelector('h2.hidden')

let idCat =((window.location.pathname).split('/')).pop()

fetch(`http://localhost:3000/api_products/category/${idCat}`)
.then(function(respuesta){
    if (respuesta.status==200) {
        return respuesta.json();
    }
    return Promise.reject ('Error...')
})
.then(function (json){

    banerCats.innerHTML+=` <img src="../../images/categories/${json.data.img_category}" alt="">`
    h2.innerHTML=json.data.name
    let par= json.data.name


  let catheader=document.getElementById('catheader')
  catheader.innerHTML=par.toUpperCase()
  
})