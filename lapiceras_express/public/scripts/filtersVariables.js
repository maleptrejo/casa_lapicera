let cardProfessions= document.querySelector(".card-body-professions")
let cardOcasions= document.querySelector(".card-body-ocasions")
let cardBrands= document.querySelector(".card-body-brands")
let cardCategories= document.querySelector(".card-body-category")
let cardColors= document.querySelector(".card-body-colors")
let cardInks= document.querySelector(".card-body-inks")

//productos filtrados
let urlIdCat=((window.location.pathname).split('/')).pop()
let applyFilters= document.querySelector('.apply-filter-js')
let checkProf=document.getElementsByClassName('checkProf')
let checkOc=document.getElementsByClassName('checkOc')
let checkBr=document.getElementsByClassName('checkBr')
let checkCol=document.getElementsByClassName('checkCol')
let checkInk=document.getElementsByClassName('checkInk')
let inputFrom= document.querySelector('.js-input-from')
let inputTo= document.querySelector('.js-input-to')
let checkCat=document.getElementsByClassName('checkCat')

//isEmpty

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}