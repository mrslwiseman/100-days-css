const btn = document.querySelector('.nav__menu')
const container = document.querySelector('.card-container')
function toggleDrawer() {

    btn.classList.toggle('open')
    btn.classList.toggle('close')
    container.classList.toggle('open')

}



btn.addEventListener('click', toggleDrawer )