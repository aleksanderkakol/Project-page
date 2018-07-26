window.mobilecheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};





const show = document.querySelector('.nav-dropdown-link');
const menu = document.querySelector('.nav-dropdown-menu');
const dropdownLink = document.querySelector('.nav-dropdown');

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


///////////slowly writings characters

// let characters = maxLength;
// setInterval(function () {
//     if (characters === lengthText) {
//         clearInterval(this)
//     } else {
//         characters++;
//         paragraph[i].style.transition = '1s';
//         paragraph[i].innerText = longText.substring(0, characters);
//     }
// }, 100);


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

logo.addEventListener('click', function (e) {
    e.preventDefault();
    if (mobilecheck()) {
        dropdownLink.classList.toggle("show");
    } else {
        window.location.reload();
        window.scrollTo(0, 0);
    }

});


//div on animation

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



//click and go to top of page

const navBar = document.querySelector('.nav-bar');
const scrollDown = navBar.offsetTop;
const toTop = document.querySelector('.top');


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
       if  (mobilecheck()) {
           toTop.classList.remove('show');
       }
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
        let http = new XMLHttpRequest();
        http.open("POST", "https://script.google.com/macros/s/AKfycbzzi9T6NCnqBi-LiRk8lCHb3MB7wRLhZIvQr71u9Q/exec", true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        let params = 'Name: '+nameInput.value + 'E-mail: '+emailInput.value +'Message: '+textAreaInput.value;
        http.send(params);
        xmlHttp.overrideMimeType('text/html; charset=ISO-8859-2');
        http.onload = function () {
            alert('Wiadomość wysłano! :)');
            console.log(http.responseText);
        };
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




const numStars = 1111;
let stars = [];
let size = 1;
let fl = canvas.width;
let centerX = canvas.width/2;
let centerY = canvas.width/2;
let speed = 0.5;
const maxRadius = 10;
const minRadius = 2;
const distance = 80;



//mouse move
let mouse = {
    x:undefined,
    y:undefined
};

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x + document.documentElement.scrollLeft;
    mouse.y = event.y + document.documentElement.scrollTop;

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
