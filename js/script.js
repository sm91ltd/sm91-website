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

// LIGHTBOX

const portfolioImages = document.querySelectorAll(".portfolio-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

portfolioImages.forEach(img => {
    img.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

const aboutImage = document.querySelector(".about-image img");

if(aboutImage){
    aboutImage.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.style.display = "flex";
        lightboxImg.src = aboutImage.src;
    });
}

// MENU SCROLL FIX
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if(targetSection){
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        navMenu.classList.remove("active");
    });
});