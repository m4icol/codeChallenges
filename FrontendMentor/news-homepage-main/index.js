const manu = document.querySelector("#menu");
const openMenu = document.querySelector("#button-menu");
const closeMenu = document.querySelector("#button-menu-close");

openMenu.addEventListener("click", () => {
    menu.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("visible");
})