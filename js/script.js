const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')
// Hamburger button listener
btn.addEventListener('click', navToggle)
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './img/logo-white.svg')
    } else {
        logo.setAttribute('src', './img/logo.svg')
    }
}