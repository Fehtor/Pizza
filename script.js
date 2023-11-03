let changeCountBtns = document.querySelectorAll('.ingredient img[value^="count"]')
let pizzaCountBtns = document.querySelectorAll('.item-count img[value^="pizza"')
let widthTypeBtns = document.querySelectorAll('.width-of-item div')

let pepperony = {
    name: "Pizza Pepperony",
    cost: 500,
    ingreds: {
        cheese: {
            cheeseAmount: 0,
            cheeseCost: 5,

        },
        bacon:{
            baconAmount: 0,
            baconCost: 10,
        },
        pepper: {
            pepperAmount: 0,
            pepperCost: 7,
        },
        carrot:{
            carrotAmount: 0,
            carrrotCost: 5,
        },
    },
    amount: 0
}

let tomato = {
    name: "Pizza Tomato",
    cost: 400,
    ingreds: {
        cheese: {
            cheeseAmount: 0,
            cheeseCost: 5,

        },
        bacon:{
            baconAmount: 0,
            baconCost: 10,
        },
        pepper: {
            pepperAmount: 0,
            pepperCost: 7,
        },
        carrot:{
            carrotAmount: 0,
            carrrotCost: 5,
        },
    },
    amount: 0
}
let blueCheese = {
    name: "Pizza Blue-Cheese",
    cost: 800,
    ingreds: {
        cheese: {
            cheeseAmount: 0,
            cheeseCost: 5,

        },
        bacon:{
            baconAmount: 0,
            baconCost: 10,
        },
        pepper: {
            pepperAmount: 0,
            pepperCost: 7,
        },
        carrot:{
            carrotAmount: 0,
            carrrotCost: 5,
        },
    },
    amount: 0
}


function addIngredient(event){
    let ingredient = event.currentTarget.parentNode
    let count = ingredient.querySelector(".ingredient-count p")
    if(event.currentTarget.getAttribute("value") == "count-plus-btn" && Number(count.innerHTML) < 99){
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
    let pizzaType = event.currentTarget.parentNode.parentNode.getAttribute("name")
    let cost = event.currentTarget.parentNode.parentNode.parentNode.querySelector(".cost #cost-num")
    console.log(cost)
    let pizzaCount = event.currentTarget.parentNode.querySelector(".count p")
    if(event.currentTarget.getAttribute("value") == "pizza-plus-btn"){
        pizzaCount.innerHTML = Number(pizzaCount.innerHTML) + 1
        switch(pizzaType){
            case "Pizza Tomato":
                tomato.amount += 1
                
                cost.innerHTML = Number(cost.innerHTML) + Number(tomato.cost)
                console.log(Number(cost))
                console.log(cost)
                break
            case "Pizza Blue-Cheese":
                blueCheese.amount += 1
                cost.innerHTML = Number(cost.innerHTML) + Number(blueCheese.cost)
                break
            case "Pizza Pepperony":
                pepperony.amount += 1
                cost.innerHTML = Number(cost.innerHTML) + Number(pepperony.cost)
                break
        }
    }
    else if(pizzaCount.innerHTML != "0"){
        pizzaCount.innerHTML = Number(pizzaCount.innerHTML) - 1
        switch(pizzaType){
            case "Pizza Tomato":
                tomato.amount -= 1
                cost.innerHTML = Number(cost.innerHTML) - tomato.cost
                break
            case "Pizza Blue-Cheese":
                blueCheese.amount -= 1
                cost.innerHTML = Number(cost.innerHTML) - blueCheese.cost
                break
            case "Pizza Pepperony":
                pepperony.amount -= 1
                cost.innerHTML = Number(cost.innerHTML) - pepperony.cost
                break
        }
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


let cart = [pepperony, tomato, blueCheese]