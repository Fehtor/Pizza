let changeCountBtns = document.querySelectorAll('.ingredient img[value^="count"]')
let pizzaCountBtns = document.querySelectorAll('.item-count img[value^="pizza"')
let widthTypeBtns = document.querySelectorAll('.width-of-item div')

function addIngredient(event){
    let ingredient = event.currentTarget.parentNode
    let count = ingredient.querySelector(".ingredient-count p")
    if(event.currentTarget.getAttribute("value") == "count-plus-btn"){
        ingredient.classList.add("ingredient-clicked")
        ingredient.querySelector(".ingredient-count").style.display = "flex"
        ingredient.querySelector("i").style.display = "none"
        count.innerHTML =  Number(count.innerHTML) + 1
        
        count.innerHTML = "+" + count.innerHTML;
    }
    else{
        if(count.innerHTML == "+1"){
            ingredient.classList.remove("ingredient-clicked")
            ingredient.querySelector(".ingredient-count").style.display = "none"
            ingredient.querySelector("i").style.display = "inline"
            count.innerHTML = Number(count.innerHTML) - 1
        }
        else if(Number(count.innerHTML) > 1){
            count.innerHTML = Number(count.innerHTML) - 1
            count.innerHTML = "+" + count.innerHTML;
        }
    }
}

function addPizza(event){
    let pizzaCount = event.currentTarget.parentNode.querySelector(".count p")
    if(event.currentTarget.getAttribute("value") == "pizza-plus-btn"){
        pizzaCount.innerHTML = Number(pizzaCount.innerHTML) + 1
    }
    else if(pizzaCount.innerHTML != "0"){
        pizzaCount.innerHTML = Number(pizzaCount.innerHTML) - 1
    }
}

function changeWidthType(){  
    for(let i = 0; i < widthTypeBtns.length; i++){
        widthTypeBtns[i].classList.toggle("choosen-width-type")
    }
}

for(let i = 0; i < widthTypeBtns.length; i++){
    widthTypeBtns[i].addEventListener("click", changeWidthType)
}

for(let i = 0; i < pizzaCountBtns.length; i++){
    pizzaCountBtns[i].addEventListener("click", addPizza)
}

for(let i = 0; i < changeCountBtns.length; i++){
    changeCountBtns[i].addEventListener("click", addIngredient)
}

