let applyFilters= document.querySelector('.apply-filter-js')
let checkProf=document.getElementsByClassName('checkProf')
let checkOc=document.getElementsByClassName('checkOc')
let checkBr=document.getElementsByClassName('checkBr')
let checkCol=document.getElementsByClassName('checkCol')
let slider=document.querySelector('.js-range-slider')





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

  let prix_min=slider.dataset.min;
  let prix_max=slider.dataset.max;
  console.log(prix_max)
  console.log(prix_min)

  
   


 





})