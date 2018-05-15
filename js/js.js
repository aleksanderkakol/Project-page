const show = document.querySelector('.nav-dropdown-link');
const menu = document.querySelector('.nav-dropdown-menu');
show.addEventListener('click', function () {
        menu.classList.toggle('show');
});

window.addEventListener('click', function (e) {
    if (e.target!==show) {
        menu.classList.remove('show');
    }
});
