//Image Slider Javascript Code

//variables
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

let iD = null;

//event listener 
document.addEventListener("DOMContentLoaded", initializeSlider);

// function of intitializing the image slider
function initializeSlider() {

if(slides.length > 0){


    slides[slideIndex].classList.add("displaySlide");
    iD = setInter(nextSlide, 5000);
}

}

// showSlide as a function with an argument of index
function showSlide(index){

if(index >= slides.length){
slideIndex = 0;
} else if(index < 0) {
slideIndex = slides.length - 1;
}


slides.forEach(slide => {
    slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");

}

//for the two buttons with prevSlide being the 'previous button' and nextSlide being the 'next button'
function prevSlide(){
slideIndex--;
showSlide(slideIndex);
}

function nextSlide() {
slideIndex++;
showSlide(slideIndex);
}

//