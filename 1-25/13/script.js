const gridItems = document.querySelectorAll('.grid__item');
const gridOverlayParent = document.querySelector('.container');
const closeBtn = document.querySelector('.button--close');
gridItems.forEach(grid => {
    grid.addEventListener('click', () => {
        gridOverlayParent.classList.toggle('visible');
    })
})

closeBtn.addEventListener('click', () => {
    gridOverlayParent.classList.toggle('visible');
})

console.log(gridOverlayParent)