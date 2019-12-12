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
const btn = document.querySelector("button");
let pictures = []; 
let clickedImage = ""; 
let twoImages = []; 


const clickImage = function () {
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
        setTimeout(function () {
            if (twoImages[0].getAttribute('alt') === twoImages[1].getAttribute('alt')) {
                twoImages[0].classList.add('inactive');
                twoImages[1].classList.add('inactive');

            } else {
              
                twoImages[0].setAttribute('src', 'images/11.jpg');
                twoImages[1].setAttribute('src', 'images/11.jpg');

            }
            clickedImage = ""
            twoImages.length = 0
            for (let i = 0; i < pictures.length; i++) {
                if(pictures[i].className !=='inactive'){
                pictures[i].addEventListener("click", clickImage);
            }
            }
        }, 1000);

    };
    


};

btn.addEventListener("click", () => {
    newImages();
    hideParagraphAndButton();

});

const newImages = () => {
    for (let i = 0; i < 20; i++) {

        let images = document.createElement("img"); //tworzy element img
        document.body.appendChild(images); //dodaje img do domu na koncu taga body

        let randomImage = Math.floor(Math.random() * imagesAttributes.length); //losuje attrybuty
        let random = imagesAttributes[randomImage][0];
        let random1 = imagesAttributes[randomImage][1];
        images.setAttribute(random, random1);
        images.setAttribute('alt', random1);
        imagesAttributes.splice(randomImage, 1); //usuwa element
        pictures.push(images); //dodaje elementy do tablicy 


        setTimeout(function () {
            images.setAttribute("src", "images/11.jpg");
            images.addEventListener("click", clickImage)
        }, 3000);



    }; //tworzy obrazy

}

const hideParagraphAndButton = () => {
    paragraph.classList.add("d-none");
    btn.classList.add("d-none");
}; //ukrywa button i tekst