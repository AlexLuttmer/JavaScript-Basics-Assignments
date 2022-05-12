const getMenuIcon = document.querySelector("#menu-icon");
const getDropMenu = document.querySelector(".drop-menu");
const siteBody = document.body;

const homeButton = document.querySelector(".home-btn");
const redButton = document.querySelector(".red-btn");
const orangeButton = document.querySelector(".orange-btn");
const purpleButton = document.querySelector(".purple-btn");
const greenButton = document.querySelector(".green-btn");


let menuToggle = function () {

    getMenuIcon.addEventListener('click', function () {
        getDropMenu.classList.toggle("menu-visi")
    })
}

let colorToggle = function () {

    homeButton.addEventListener('click', function() {
        siteBody.removeAttribute("class");
        siteBody.classList.add("grey-background");
        getDropMenu.classList.toggle("menu-visi");
    })

    redButton.addEventListener('click', function() {
        siteBody.removeAttribute("class");
        siteBody.classList.add("red-background");
        getDropMenu.classList.toggle("menu-visi");
    })

    orangeButton.addEventListener('click', function() {
        siteBody.removeAttribute("class");
        siteBody.classList.add("orange-background");
        getDropMenu.classList.toggle("menu-visi");
    })

    purpleButton.addEventListener('click', function() {
        siteBody.removeAttribute("class");
        siteBody.classList.add("purple-background");
        getDropMenu.classList.toggle("menu-visi");
    })

    greenButton.addEventListener('click', function() {
        siteBody.removeAttribute("class");
        siteBody.classList.add("green-background");
        getDropMenu.classList.toggle("menu-visi");
    })

}

menuToggle();
colorToggle();