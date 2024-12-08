// JavaScript Document
console.log("hi");

const themaToggle = document.querySelector(".switch input")

const hamburgerButton = document.querySelector("header nav ul:nth-of-type(1) li:nth-of-type(1) button")
const kruisjeButton = document.querySelector("header nav div ul:nth-of-type(1) li:nth-of-type(1) button")
const menu = document.querySelector("div")
const body = document.querySelector("body")
const header = document.querySelector("body header nav ul")

// Hambureger menu openen 
hamburgerButton.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.add("openMenu");
    console.log("Menu open!");
    body.classList.add("stopScrollen");
    console.log("Scrollen in body gestopt!");
}

// Hamburger menu sluiten 
kruisjeButton.addEventListener('click', sluitMenu);

function sluitMenu() {
    menu.classList.remove("openMenu");
    console.log("Menu gesloten!");
    body.classList.remove("stopScrollen");
    console.log("Scrollen in body actief!");
}

// Dark mode 
themaToggle.addEventListener('click', veranderThema);

function veranderThema() {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    console.log("Thema veranderd")
}

// Shortcut - x sluit hamburgermenu
// Niet aan de praat kunnen krijgen met escape, geen idee waarom niet
document.addEventListener('keypress', function (event) {
    if (event.key === 'x') {
        sluitMenu()
    }
})