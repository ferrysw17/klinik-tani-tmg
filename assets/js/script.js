// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Menu diklik

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Ketika klik diluar side bar akan keluar

const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
});