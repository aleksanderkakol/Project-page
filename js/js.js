const show = document.querySelector('.nav-dropdown-link');
const menu = document.querySelector('.nav-dropdown-menu');
show.addEventListener('click', function () {
    menu.classList.toggle('show');
});