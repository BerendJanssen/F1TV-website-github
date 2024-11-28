// JavaScript Document
console.log("hi");

const Button = document.querySelector("header nav ul:nth-of-type(1) li:nth-of-type(1) button")
const Menu = document.querySelector("div")
const Body = document.querySelector("body")

Button.addEventListener('click', openMenu)

function openMenu() {
    Menu.classList.toggle("openMenu")
    console.log("Menu open!")
    Body.classList.toggle("nietScrollen")
    console.log("Niet scrollen!")
}

