// JavaScript Document
console.log("hi");

const hamburgerButton = document.querySelector("header nav ul:nth-of-type(1) li:nth-of-type(1) button")
const kruisjeButton = document.querySelector("header nav div ul:nth-of-type(1) li:nth-of-type(1) button")
const menu = document.querySelector("div")
const body = document.querySelector("body")

hamburgerButton.addEventListener('click', openMenu)

function openMenu() {
    menu.classList.add("openMenu")
    console.log("Menu open!")
    body.classList.add("stopScrollen")
    console.log("Scrollen in body gestopt!")
}


kruisjeButton.addEventListener('click', sluitMenu)

function sluitMenu() {
    menu.classList.remove("openMenu")
    console.log("Menu gesloten!")
    body.classList.remove("stopScrollen")
    console.log("Scrollen in body actief!")
}

