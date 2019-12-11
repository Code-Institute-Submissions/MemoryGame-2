const paragraph = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    
    hideParagraphAndButton();

});

const hideParagraphAndButton = () => {
    paragraph.classList.add("d-none");
    btn.classList.add("d-none");
};