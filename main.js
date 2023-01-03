const nav = document.querySelector("nav");
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibiltiy = primaryNav.getAttribute("data-visible");

    if (visibiltiy === "false") {
        nav.setAttribute("aria-expanded", true);
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibiltiy === "true") {
        nav.setAttribute("aria-expanded", false);
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})