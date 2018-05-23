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

//canvas

var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth -15;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var mouse = {
    x:undefined,
    y:undefined
};
var numStars = 2000;
var stars = [];
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.width/2;
var speed = 5;
var maxRadius = 10;
var minRadius = 2;


window.addEventListener('mousemove', function (event) {
    // mouse.x = event.x + document.documentElement.scrollLeft;
    mouse.x = event.x;
    // mouse.y = event.y + document.documentElement.scrollTop;
    mouse.y = event.y;


    // console.log(mouse);
});



function Star(x, y, s, a, b) {


    this.x = Math.random()*(innerWidth - size * 2) + size;
    this.y = Math.random()*(innerHeight - size * 2) + size;
    this.z = Math.random()*(innerWidth - size * 2) + size;

    this.a = a;
    this.b = b;

    this.move = function () {

        this.z = this.z-speed;
        if (this.z<=0){
            this.z = canvas.width;
        }
    };


    this.show = function () {

        var x = 0;
        var y = 0;
        var s = this.s;

        x = (this.x -centerX)*(fl/this.z);
        x = x + centerX;


        y = (this.y -centerY)*(fl/this.z);
        y = y + centerY;

        this.s = size*(fl/this.z);
        // s = size*(fl/this.z);




        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.s < maxRadius){
                this.s +=4;
            }
        } else if (this.s > this.minRadius) {
            this.s -= 1;
        }

        c.beginPath();
        c.fillStyle = 'white';
        c.arc(x, y, this.s, 0, Math.PI*2);
        c.fill();



    };

    this.update = function () {


        this.show()

    };

}

for (var i=0; i<numStars; i++) {
    stars.push(new Star());
}

function animate() {
    c.fillStyle = 'black';
    c.fillRect(0,0,window.innerWidth, window.innerHeight);
    for (var i=0; i<numStars; i++) {
        stars[i].move();
        stars[i].update();
    }
    window.requestAnimationFrame(animate);
}

animate();

/////////////////////////////////////////////////////

//
//
// var mouse = {
//     x: undefined,
//     y: undefined
// };
//
// var maxRadius = 50;
// // var minRadius = 2;
//
// var colorArray = [
//     '#1C1C1C',
//     '#00007F',
//     '#4775FF',
//     '#FFD600',
//     '#FF0000'
// ];
//
// window.addEventListener('mousemove', function (event) {
//     // console.log(event)
//     mouse.x = event.x + document.documentElement.scrollLeft;
//     mouse.y = event.y + document.documentElement.scrollTop;
// });
//
//
// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//
//     init();
//
// });
//
//
// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//
//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = 'red';
//         c.fillStyle = this.color;
//         c.fill();
//     };
//
//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             this.dx = -this.dx;
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;
//
//
//         //mousemove
//
//
//         if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
//             if (this.radius < maxRadius){
//             this.radius +=1;
//             }
//         } else if (this.radius > this.minRadius) {
//             this.radius -= 1;
//         }
//
//
//
//         this.draw();
//     }
//
// }
//
// var circleArray = [];
//
// for (var i=0; i<1000; i++) {
//     var radius = Math.random() * 3 + 1;
//     var x = Math.random()*(innerWidth - radius * 2) + radius;
//     var y = Math.random()*(innerHeight - radius * 2) + radius;
//     var dx = (Math.random()- 0.5);
//     var dy = (Math.random()- 0.5);
//
//     circleArray.push(new Circle(x, y, dx, dy, radius));
// }
//
//
//
//
//
// function init() {
//
//     circleArray = [];
//
//     for (var i=0; i<1000; i++) {
//         var radius = Math.random() * 3 + 1;
//         var x = Math.random()*(innerWidth - radius * 2) + radius;
//         var y = Math.random()*(innerHeight - radius * 2) + radius;
//         var dx = (Math.random()- 0.5);
//         var dy = (Math.random()- 0.5);
//
//         circleArray.push(new Circle(x, y, dx, dy, radius));
//     }
// }
//
// // console.log(circleArray);
//
//
//
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//
//     for (var i=0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }
//
// }
// animate();
