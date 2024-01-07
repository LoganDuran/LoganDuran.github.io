// Responsive Header

const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("active")
});





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