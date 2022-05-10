// Part 1: Adding a click event to a button

const alertButton = document.getElementById('alertbutton');

alertButton.addEventListener('click', function() {
    alert("Congratulations, you have succesfully clicked a button. I'm impressed!")
})

// Part 2: Using a click event to change an element's classes

// Creating the function that changes the class

const changeBackgroundColor = function () {
    const siteBody = document.body;
    siteBody.classList.add("red-background");
}

// Attaching the event listener to the button

const changeColorButton = function () {
    const changeButton = document.getElementById("changebutton");
    changeButton.addEventListener("click", function() {
    changeBackgroundColor();
    })
}

changeColorButton();

// Part 3: Using a click event to toggle an element's classes

// Creating the function that toggles the class

const toggleBackgroundColor = function () {
    const siteBody = document.body;
    siteBody.classList.toggle("red-background");
}

// Attaching the event listener to the button

const toggleColorButton = function () {
    const changeButton = document.getElementById("togglebutton");
    changeButton.addEventListener("click", function() {
    toggleBackgroundColor();
    })
}

toggleColorButton();



