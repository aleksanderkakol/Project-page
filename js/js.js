const show = document.querySelector('.nav-dropdown-link');
const menu = document.querySelector('.nav-dropdown-menu');

//click on dropdownmenu

show.addEventListener('click', function () {
    menu.classList.toggle('show');
});

window.addEventListener('click', function (e) {
    if (e.target!==show) {
        menu.classList.remove('show');
    }
});


/////hide and show text

const paragraph = document.getElementsByClassName('section-main-container-text');
const readMore = document.getElementsByClassName('section-main-container-btn');
const maxLength = 300;

for (let i = 0; i < readMore.length; i++) {

            let longText = paragraph[i].innerText;

            let shortText = paragraph[i].innerText.substring(0, maxLength);

            if (paragraph[i].innerText.length > maxLength) {
                paragraph[i].innerText = shortText;
            } else {
                readMore[i].style.display = 'none';
            }

    readMore[i].addEventListener('click', function () {

            if (paragraph[i].innerText.length > maxLength) {
                paragraph[i].innerText = shortText;
                readMore[i].innerHTML = 'Learn More &raquo';
            } else if (paragraph[i].innerText.length <= maxLength) {
                paragraph[i].innerText = longText;
                readMore[i].innerHTML = 'Hide Text &laquo';
            }
    });

}

// let characters = maxLength;
// setInterval(function () {
//     if (characters === lengthText) {
//         clearInterval(this)
//     } else {
//         characters++;
//         paragraph[i].style.transition = '1s';
//         paragraph[i].innerText = longText.substring(0, characters);
//     }
// }, 10);


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
        }
    }

});

//click on logo

logo.addEventListener('click', function () {
    window.location.reload();
    window.scrollTo(0, 0);

});


const arrow = document.querySelector('.arrow');
const flexBox = document.querySelector('.flex');

flexBox.addEventListener("mouseover", function () {
    arrow.style.display = 'inline-block';
    arrow.style.transition = '1s';
    arrow.style.color = 'black';
    arrow.style.transform = 'rotate(90deg)';
});

flexBox.addEventListener("mouseout", function () {
    arrow.style.transition = '1s';
    arrow.style.transform = 'rotate(0deg)';
    arrow.style.color = 'white';
});


const navBar = document.querySelector('.nav-bar');
const scrollDown = navBar.offsetTop;
const toTop = document.querySelector('.top');

//click and go to top of page

toTop.addEventListener('click', function () {

   document.documentElement.scrollIntoView({
       behavior: "smooth",
       block: "start"
   })
});


window.addEventListener('scroll', function () {

    //sticky navbar

   if (document.documentElement.scrollTop >= scrollDown) {
       document.body.style.paddingTop = navBar.offsetHeight + 'px';
       navBar.classList.add('fixed');
       toTop.classList.add('show');
   } else {
       document.body.style.paddingTop = '0';
       navBar.classList.remove('fixed');
       toTop.classList.remove('show');
   }

   //link active

    let windowPos = window.scrollY+1;
    let startContainer = document.getElementById('start').offsetTop;
    let aboutContainer = document.getElementById('about').offsetTop;
    let contactContainer = document.getElementById('contact').offsetTop;
    let startLink = document.querySelector('.start');
    let aboutLink = document.querySelector('.about');
    let contactLink = document.querySelector('.contact');

    if (windowPos > startContainer) {
        startLink.classList.add('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
    }
    if (windowPos > aboutContainer) {
        startLink.classList.remove('active');
        contactLink.classList.remove('active');
        aboutLink.classList.add('active');
    }
    if (windowPos > contactContainer) {
        aboutLink.classList.remove('active');
        contactLink.classList.add('active');
    }
    if (windowPos < startContainer){
        startLink.classList.remove('active');
    }

});


////anchor click
const anchorLinks = document.querySelectorAll('a[href^="#"]');
////active  link

anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const current = document.querySelector(this.getAttribute('href'));

        current.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    });
});



////contact form

const nameInput = document.querySelector('.contact-input-name');
const emailInput = document.querySelector('.contact-input-email');
const textAreaInput = document.querySelector('.contact-textarea');
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {

    e.preventDefault();

    let correct = true;

    if (nameInput.value.length < 3 && emailInput.value.search('@') === -1 && textAreaInput.value.length <= 0) {
        alert('Name is too short\nEmail must contain @\nMessage is too short');
        nameInput.focus();
        correct = false;
    }
    else if (nameInput.value.length < 3 && emailInput.value.search('@') === -1) {
        alert("Name is too short\nEmail must contain @");
        nameInput.focus();
        correct = false;
    }
    else if (nameInput.value.length < 3 && textAreaInput.value.length <= 0) {
        alert("Name is too short\nMessage is too short");
        nameInput.focus();
        correct = false;
    }
    else if (nameInput.value.length < 3) {
        alert("Name is too short");
        nameInput.focus();
        correct = false;
    }
    else if (emailInput.value.search('@') === -1 && textAreaInput.value.length <= 0) {
        alert("Email must contain @\nMessage is too short");
        emailInput.focus();
        correct = false;
    }
    else if (emailInput.value.search('@') === -1) {
        alert("Email must contain @");
        emailInput.focus();
        correct = false;
    }
    else if (textAreaInput.value.length <= 0) {
        alert('Message is too short');
        textAreaInput.focus();
        correct = false;
    }
    if (correct) {
        alert('Wiadomość wysłano! :)');
        Email.send(emailInput.value,
            "olcio45@gmail.com",
            nameInput.value,
            textAreaInput.value,
            "smtp.elasticemail.com",
            "olcio45@gmail.com",
            "5727c895-54d6-4745-aa39-c2f29a8e07ea");
        nameInput.value = '';
        emailInput.value = '';
        textAreaInput.value = '';
    }

});

//canvas

const canvas = document.querySelector('canvas');


const screenWidth = document.documentElement.clientWidth;

canvas.width = screenWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');



//mouse move
let mouse = {
    x:undefined,
    y:undefined
};
const numStars = 1000;
let stars = [];
let size = 1;
let fl = canvas.width;
let centerX = canvas.width/2;
let centerY = canvas.width/2;
let speed = 0.5;
const maxRadius = 10;
const minRadius = 2;
const distance = 80;

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x + document.documentElement.scrollLeft;
    mouse.y = event.y + document.documentElement.scrollTop;

    // console.log(mouse);
});


//left click
let up = true;
const maxSpeed = 30;
const minSpeed = 0.5;


canvas.addEventListener('click', function () {
        if (up && speed <= maxSpeed) {
            speed++;
            if (speed === maxSpeed) {
                up = false;
            }
        } else {
            up = false;
            speed--;
            if (speed <= minSpeed) {
                up = true;
            }
        }
});



// right click
canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    up = true;
    speed = 0.5;
});


//resize window
// window.addEventListener('resize', function () {
//      canvas.width = window.innerWidth;
//      canvas.height = window.innerHeight;

     // animate();

 // });

///stars
function Star() {


    this.x = Math.random()*(innerWidth - size * 2) + size;
    this.y = Math.random()*(innerHeight - size * 2) + size;
    this.z = Math.random()*(innerWidth - size * 2) + size;


    ////move

    this.move = function () {

        this.z = this.z-speed;
        if (this.z<=0){
            this.z = canvas.width;
        }
    };


    this.show = function () {

        let x,y;

        x = (this.x -centerX)*(fl/this.z);
        x = x + centerX;

        y = (this.y -centerY)*(fl/this.z);
        y = y + centerY;

        this.s = size*(fl/this.z);


/////mousemove

        if (mouse.x - x < distance && mouse.x - x > -distance && mouse.y - y < distance && mouse.y - y > -distance) {
            if (this.s < maxRadius){
                this.s +=1;
            }
        } else if (this.s > minRadius) {
            this.s -= 1;
        }

////////show stars

        c.beginPath();
        c.fillStyle = 'white';
        c.arc(x, y, this.s, 0, Math.PI*2);
        c.fill();



    };

    this.update = function () {

        this.show()

    };

}

//////get stars

for (let i=0; i<numStars; i++) {
    stars.push(new Star());
}



function animate() {
    c.fillStyle = '#343a40';
    c.fillRect(0,0,window.innerWidth, window.innerHeight);
    for (let i=0; i<numStars; i++) {
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



////////////////////////////////////
