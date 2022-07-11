const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('active')
}


