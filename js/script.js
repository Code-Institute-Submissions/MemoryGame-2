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
const beginner = document.querySelector('.beginner');
const intermediate = document.querySelector('.intermediate');
const master = document.querySelector('master');
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
            pictures[i].removeEventListener("click", clickImage)
        }
        setTimeout(function() {
            if (twoImages[0].getAttribute('alt') === twoImages[1].getAttribute('alt')) {
                twoImages[0].classList.add('inactive');
                twoImages[1].classList.add('inactive');
                result++;
                if (result === 10) {
                    console.log(number);
                    const removeChildren = document.querySelector(".mainDiv");
                    while (removeChildren.firstChild) {
                        removeChildren.firstChild.remove();
                    }
                    let jumbotron = document.createElement('div');
                    div.appendChild(jumbotron);
                    jumbotron.classList.add('jumbotron', 'jumbotron-fluid');
                    jumbotron.innerHTML = `<div class="container"><h1 class="display-4">You played ${gameTime - number} seconds</h1><button onclick="location.reload()">Play again</button></div>`;
                 //   let playAgainButton = document.createElement('button');
                   // div.appendChild(playAgainButton);
                    //playAgainButton.setAttribute('onclick', 'location.reload()') ;


                    //end of the game, remove all elemnts from main div and show information about result and how long the gamer played.
                }
            }
            else {

                twoImages[0].setAttribute('src', 'images/11.jpg');
                twoImages[1].setAttribute('src', 'images/11.jpg');

            }
            clickedImage = ""
            twoImages.length = 0
            for (let i = 0; i < pictures.length; i++) {
                if (pictures[i].className !== 'inactive') {
                    pictures[i].addEventListener("click", clickImage);
                }
            }
        }, 1000);

    };



};


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        newImages();
        hideParagraphAndButton(btn[i]);
        console.log(btn[i]);
        //stopWatch

    });
}

//Stopwatch

const stopWatch = function() {
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");


    if (number > 0) {
        let timer = setInterval(function() {
            // Stop if passed end time
            number--;
            if (number <= 0 || result === 10) {
                clearInterval(timer);
                
            }

            let secs = number;
            let mins = Math.floor(number / 60);

            secs -= mins * 60;

            // Update HTML
            minutes.innerHTML = `0${mins}:`;
            seconds.innerHTML = secs;



        }, 1000);


    }
};

//Creating images

const newImages = () => {
    for (let i = 0; i < 20; i++) {

        let images = document.createElement("img");
        div.appendChild(images); //dodaje img do domu na koncu taga body
        let randomImage = Math.floor(Math.random() * imagesAttributes.length);
        let random = imagesAttributes[randomImage][0];
        let random1 = imagesAttributes[randomImage][1];
        images.setAttribute(random, random1);
        images.setAttribute('alt', random1);
        imagesAttributes.splice(randomImage, 1);
        pictures.push(images);


        setTimeout(function() {
            images.setAttribute("src", "images/11.jpg");
            images.addEventListener("click", clickImage)
        }, 3000);



    };

}


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
