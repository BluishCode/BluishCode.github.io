document.addEventListener("DOMContentLoaded", () => {
    console.log("Site loaded");
});

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});