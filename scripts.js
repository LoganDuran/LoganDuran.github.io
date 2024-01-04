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