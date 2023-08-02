let home = 0
let guest = 0
let counterHome = document.getElementById("counter-home")
let counterGuest = document.getElementById("counter-guest")

function add1Point() {
    if (event.target.parentElement.id == "home-btns") {
        home += 1
        counterHome.textContent = home
    } else {
        guest += 1
        counterGuest.textContent = guest
    } 
}

function add2Points() {
    if (event.target.parentElement.id == "home-btns") {
        home += 2
        counterHome.textContent = home
    } else {
        guest += 2
        counterGuest.textContent = guest
    } 
}

function add3Points() {
    if (event.target.parentElement.id == "home-btns") {
        home += 3
        counterHome.textContent = home
    } else {
        guest += 3
        counterGuest.textContent = guest
    } 
}

function resetGame() {
    home = 0
    guest = 0
    counterHome.textContent = home
    counterGuest.textContent = guest
}