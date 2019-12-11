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

btn.addEventListener("click", () => {
    newImages()
    hideParagraphAndButton();

});

const newImages = () => {
    for (let i = 0; i < 20; i++) {

        let images = document.createElement("img");
        document.body.appendChild(images);

        let randomImage = Math.floor(Math.random() * imagesAttributes.length);
        let src = imagesAttributes[randomImage][0];
        let path = imagesAttributes[randomImage][1];
        images.setAttribute(src, path);
        images.setAttribute('alt', path);
        imagesAttributes.splice(randomImage, 1);


    };

}

const hideParagraphAndButton = () => {
    paragraph.classList.add("d-none");
    btn.classList.add("d-none");
};
