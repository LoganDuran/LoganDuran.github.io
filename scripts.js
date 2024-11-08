// Responsive Header

const hamburgerMenu = document.querySelector(".hamMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".navlinks");

hamburgerMenu.addEventListener("click", () => {
  [header, nav, hamburgerMenu].forEach((section) =>
    section.classList.toggle("active")
  );
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    [header, nav, hamburgerMenu].forEach((section) =>
      section.classList.remove("active")
    );
  });
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

// Dynamic TechStack Scripts

function openTab(tabId) {
  document.startViewTransition(() => {
    const tabs = document.getElementsByClassName("popup-tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "grid";
  });
}

function closeTab(element) {
  document.startViewTransition(() => {
    element.style.display = "none";
  });
}
