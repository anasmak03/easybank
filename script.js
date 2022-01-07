const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})