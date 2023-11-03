let changeCountBtns = document.querySelectorAll('.ingredient img[value^="count"]')
let pizzaCountBtns = document.querySelectorAll('.item-count img[value^="pizza"')
let widthTypeBtns = document.querySelectorAll('.width-of-item div')

let pepperony = {
    name: "Pizza Pepperony",
    cost: 500,
    ingreds: {
        cheese : {
            amount: 0,
            cost: 5,
        },
        bacon :{
            amount: 0,
            cost: 10,
        },
        pepper : {
            amount: 0,
            cost: 7,
        },
        carrot : {
            amount: 0,
            cost: 5,
        }
    },
    amount: 0
}

let tomato = {
    name: "Pizza Tomato",
    cost: 400,
    ingreds: {
        cheese : {
            amount: 0,
            cost: 5,
        },
        bacon :{
            amount: 0,
            cost: 10,
        },
        pepper : {
            amount: 0,
            cost: 7,
        },
        carrot : {
            amount: 0,
            cost: 5,
        }
    },
    amount: 0
}
let blueCheese = {
    name: "Pizza Blue-Cheese",
    cost: 800,
    ingreds: {
        cheese : {
            amount: 0,
            cost: 5,
        },
        bacon :{
            amount: 0,
            cost: 10,
        },
        pepper : {
            amount: 0,
            cost: 7,
        },
        carrot : {
            amount: 0,
            cost: 5,
        }
    },
    
    amount: 0
}

let inrgedList = ["cheese", "bacon", "pepper", "carrot"]

let pizzas = [tomato, pepperony, blueCheese]
function addIngredient(event){
    let pizzaId = event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".item").getAttribute("pizzaID")
    let ingredType = event.currentTarget.parentNode.getAttribute("ingredType")

    
    let ingredient = event.currentTarget.parentNode
    let count = ingredient.querySelector(".ingredient-count p")
    if(event.currentTarget.getAttribute("value") == "count-plus-btn" && Number(count.innerHTML) < 99){
        ingredient.classList.add("ingredient-clicked")
        ingredient.querySelector(".ingredient-count").style.display = "flex"
        ingredient.querySelector("i").style.display = "none"
        count.innerHTML =  Number(count.innerHTML) + 1
        count.innerHTML = "+" + count.innerHTML;
        pizzas[pizzaId].ingreds[ingredType].amount += 1
    }
    else{
        if(count.innerHTML == "+1"){
            ingredient.classList.remove("ingredient-clicked")
            ingredient.querySelector(".ingredient-count").style.display = "none"
            ingredient.querySelector("i").style.display = "inline"
            count.innerHTML = Number(count.innerHTML) - 1
            pizzas[pizzaId].ingreds[ingredType].amount -= 1
        }
        else if(Number(count.innerHTML) > 1){
            count.innerHTML = Number(count.innerHTML) - 1
            count.innerHTML = "+" + count.innerHTML;
            pizzas[pizzaId].ingreds[ingredType].amount -= 1
        }
    }

    uppdateCost()
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
                //cost.innerHTML = Number(cost.innerHTML) + Number(tomato.cost)
                break
            case "Pizza Blue-Cheese":
                blueCheese.amount += 1
                //cost.innerHTML = Number(cost.innerHTML) + Number(blueCheese.cost)
                break
            case "Pizza Pepperony":
                pepperony.amount += 1
                //cost.innerHTML = Number(cost.innerHTML) + Number(pepperony.cost)
                break
        }
    }
    else if(pizzaCount.innerHTML != "0"){
        pizzaCount.innerHTML = Number(pizzaCount.innerHTML) - 1
        switch(pizzaType){
            case "Pizza Tomato":
                tomato.amount -= 1
               // cost.innerHTML = Number(cost.innerHTML) - tomato.cost
                break
            case "Pizza Blue-Cheese":
                blueCheese.amount -= 1
                //cost.innerHTML = Number(cost.innerHTML) - blueCheese.cost
                break
            case "Pizza Pepperony":
                pepperony.amount -= 1
                //cost.innerHTML = Number(cost.innerHTML) - pepperony.cost
                break
        }
    }
    uppdateCost()
}

function uppdateCost(){
    let cost = document.querySelector(".cost #cost-num")
    let num = 0;
    for(let i = 0; i < pizzas.length; i++){
        num += pizzas[i].amount * pizzas[i].cost
        for(let j = 0; j < inrgedList.length; j++){
            num += pizzas[i].ingreds[inrgedList[j]].amount * pizzas[i].ingreds[inrgedList[j]].cost * pizzas[i].amount
        }
    }
    cost.innerHTML = num
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