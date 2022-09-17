const navButton = document.querySelector(".popup");
const menu = document.querySelector(".mobileMenu")

navButton.addEventListener('click', () => {
    menu.classList.toggle('hide');
})