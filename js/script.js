const track = document.querySelector(".portfolio-track");
const cards = document.querySelectorAll(".portfolio-card");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const showCount = 3;

function updateSlider(){
    const cardWidth = cards[0].offsetWidth + 30;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove("active"));

    if(currentIndex === 0){
        dots[0].classList.add("active");
    }else{
        dots[1].classList.add("active");
    }
}

nextBtn.addEventListener("click", () => {
    if(currentIndex < cards.length - showCount){
        currentIndex += showCount;
    }else{
        currentIndex = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if(currentIndex > 0){
        currentIndex -= showCount;
    }else{
        currentIndex = cards.length - showCount;
    }

    updateSlider();
});

dots[0].addEventListener("click", () => {
    currentIndex = 0;
    updateSlider();
});

dots[1].addEventListener("click", () => {
    currentIndex = 3;
    updateSlider();
});

window.addEventListener("resize", updateSlider);

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar ul a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});