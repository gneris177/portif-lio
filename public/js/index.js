const menu = document.querySelector('.mini-menu')
const iconMenu = document.querySelector('.icon-menu')
const titulo = document.querySelector('.titulo-1')


iconMenu.onclick = () => {
    menu.style.display = 'flex'
    iconMenu.style.display = 'none'
    titulo.style.display = 'none'   
}
