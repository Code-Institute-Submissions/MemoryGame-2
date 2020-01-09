//Variables

const imagesAttributes = [
    ['src', 'images/1.jpg'],
    ['src', 'images/2.jpg'],
    ['src', 'images/3.jpg'],
    ['src', 'images/4.jpg'],
    ['src', 'images/5.jpg'],
    ['src', 'images/1.jpg'],
    ['src', 'images/2.jpg'],
    ['src', 'images/3.jpg'],
    ['src', 'images/4.jpg'],
    ['src', 'images/5.jpg'],
    ['src', 'images/6.jpg'],
    ['src', 'images/6.jpg'],
    ['src', 'images/7.jpg'],
    ['src', 'images/7.jpg'],
    ['src', 'images/8.jpg'],
    ['src', 'images/8.jpg'],
    ['src', 'images/9.jpg'],
    ['src', 'images/9.jpg'],
    ['src', 'images/10.jpg'],
    ['src', 'images/10.jpg']
];

const paragraph = document.querySelector("p");
const div = document.querySelector(".mainDiv");
let btn = document.querySelectorAll("button");
btn = [...btn];
const btn1 = btn;
let pictures = [];

let clickedImage = "";
let twoImages = [];
let number = "";
let result = "";
let gameTime = "";



//The game, compraing images function

const clickImage = function() {
    clickedImage = this;
    if (clickedImage === twoImages[0]) return;
    clickedImage.setAttribute('src', clickedImage.getAttribute('alt'));

    if (twoImages.length === 0) {
        twoImages.unshift(clickedImage);
        return;
    }

    else {
        twoImages.push(clickedImage);
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].removeEventListener("click", clickImage);
        }
        setTimeout(function() {
            if (twoImages[0].getAttribute('alt') === twoImages[1].getAttribute('alt')) {
                twoImages[0].classList.add('inactive');
                twoImages[1].classList.add('inactive');
                result++;
                if (result === 10) {

                    const removeChildren = document.querySelector(".mainDiv");
                    while (removeChildren.firstChild) {
                        removeChildren.firstChild.remove();
                    }
                    let jumbotron = document.createElement('div');
                    div.appendChild(jumbotron);
                    jumbotron.classList.add('jumbotron', 'jumbotron-fluid', 'text-center', 'font-button');
                    jumbotron.innerHTML = `<div class="container"><h1 class="display-4">You won!</h1><h1 class="display-4">You played ${gameTime - number} seconds</h1><div class="center-button"><button onclick="location.reload()" class="btn btn-secondary btn-sm font-button">Play again</button></div></div>`;
                }

            }
            else {

                twoImages[0].setAttribute('src', 'images/11.jpg');
                twoImages[1].setAttribute('src', 'images/11.jpg');

            }
            clickedImage = "";
            twoImages.length = 0;
            for (let i = 0; i < pictures.length; i++) {
                if (pictures[i].className !== 'inactive') {
                    pictures[i].addEventListener("click", clickImage);
                }
            }
        }, 500);

    }



};

const timesUp = function() {
    const removeChildren = document.querySelector(".mainDiv");
    while (removeChildren.firstChild) {
        removeChildren.firstChild.remove();
    }
    let jumbotron = document.createElement('div');
    div.appendChild(jumbotron);
    jumbotron.classList.add('jumbotron', 'jumbotron-fluid', 'text-center', 'font-button');
    jumbotron.innerHTML = `<div class="container"><h1 class="display-4">Times up!</h1><h1 class="display-4">You played ${gameTime - number} seconds</h1><div class="center-button"><button onclick="location.reload()" class="btn btn-secondary btn-sm font-button">Play again</button></div></div>`;
};

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        newImages();
        hideParagraphAndButton(btn[i]);

    });
}

//Stopwatch

const stopWatch = function() {
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");


    if (number > 0) {
        let timer = setInterval(function() {

            number--;
            if (result === 10) {
                clearInterval(timer);
                        }
            if (number <= 0) {
                clearInterval(timer);
                timesUp();
            }

            let secs = number;
            let mins = Math.floor(number / 60);

            secs -= mins * 60;


            minutes.innerHTML = `0${mins}:`;
            seconds.innerHTML = secs;
            if (number <= 9) {
                seconds.innerHTML = `0${secs}`;

            }


        }, 1000);


    }
};

//Creating images

const newImages = () => {
    for (let i = 0; i < 20; i++) {

        let images = document.createElement("img");
        div.appendChild(images);
        let randomImage = Math.floor(Math.random() * imagesAttributes.length);
        let random = imagesAttributes[randomImage][0];
        let random1 = imagesAttributes[randomImage][1];
        images.setAttribute(random, random1);
        images.setAttribute('alt', random1);
        imagesAttributes.splice(randomImage, 1);
        pictures.push(images);


        setTimeout(function() {
            images.setAttribute("src", "images/11.jpg");
            images.addEventListener("click", clickImage);
        }, 3000);



    }

};


//Hiding buttons and paragraph

const hideParagraphAndButton = (btn) => {


    if (btn.classList.contains('beginner')) {
        number = 120;
        gameTime = number;
        stopWatch();
    }
    else if (btn.classList.contains('intermediate')) {
        number = 80;
        gameTime = number;
        stopWatch();
    }
    else if (btn.classList.contains('master')) {
        number = 40;
        gameTime = number;
        stopWatch();
    };

    paragraph.classList.add("d-none");



    for (let i = 0; i < btn1.length; i++) {
        btn1[i].classList.add("d-none");
    }


};
