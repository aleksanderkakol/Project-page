const show = document.querySelector('.nav-dropdown-link');
const menu = document.querySelector('.nav-dropdown-menu');

//click on dropdownmenu

show.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('show');
});

window.addEventListener('click', function (e) {
    if (e.target!==show) {
        menu.classList.remove('show');
    }
});

const container = document.querySelector('.container');
const page = document.querySelectorAll('.section-main-container');
const form = document.querySelector('.nav-form');
const input = document.querySelector('.nav-form-search');
const logo = document.querySelector('.nav-link');

//search input

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let p = '';
    for (let i=0; i<page.length; i++) {
        p = page[i].querySelectorAll('p')[0];

        let filter = input.value.toUpperCase();

        if (p.innerText.toUpperCase().indexOf(filter) > -1) {
            page[i].classList.add('show');

        } else {
            page[i].classList.add('hide');
            page[i].classList.remove('show');
            container.classList.add('hide');
        }
    }

});

//click on logo

logo.addEventListener('click', function () {
    container.classList.remove('hide');
    let p = '';
    for (let i=0; i<page.length; i++) {
        p = page[i].querySelectorAll('p')[0];
        page[i].classList.remove('show');
        page[i].classList.remove('hide');
    }

});

