// Responsive Header

const hamburgerMenu = document.querySelector(".hamMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
// const navLinks = document.querySelector(".navlinks");


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
});

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("active")
});


// closing the header on anchor tags 

// navLinks.addEventListener("click", () => {
//     hamburgerMenu.classList.remove("active")
// });

// navLinks.addEventListener("click", () => {
//     header.classList.remove("active")
// });

// navLinks.addEventListener("click", () => {
//     nav.classList.remove("active")
// });




// MyProjects Expanding Images

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    });      
});

const removeActiveClass = function () {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};