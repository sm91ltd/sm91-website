const track = document.querySelector(".portfolio-track");
const cards = document.querySelectorAll(".portfolio-card");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let showCount = window.innerWidth <= 768 ? 1 : 3;
function updateSlider(){
    showCount = window.innerWidth <= 768 ? 1 : 3;
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
        currentIndex++;
    }else{
        currentIndex = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {

    if(currentIndex > 0){
        currentIndex--;
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

// ==========================
// POPUP ประกาศวันที่ 28 กรกฎาคม และ 12 สิงหาคม
// ==========================

const now = new Date();

// ---------- ประกาศวันที่ 12 สิงหาคม ----------
const mothersDayPopup = document.getElementById("mothersDayPopup");
const mothersDayPopupClose = document.getElementById("mothersDayPopupClose");

const isMothersDay =
    now.getFullYear() === 2026 &&
    now.getMonth() === 7 &&
    now.getDate() === 12;

if (isMothersDay && mothersDayPopup) {
    mothersDayPopup.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeMotherPopup() {
    if (mothersDayPopup) {
        mothersDayPopup.classList.remove("show");
    }

    document.body.style.overflow = "";
}

if (mothersDayPopupClose) {
    mothersDayPopupClose.addEventListener("click", closeMotherPopup);
}

if (mothersDayPopup) {
    mothersDayPopup.addEventListener("click", function (event) {
        if (event.target === mothersDayPopup) {
            closeMotherPopup();
        }
    });
}


// ---------- ประกาศวันที่ 28 กรกฎาคม ----------
const royalPopup = document.getElementById("royalPopup");
const royalPopupClose = document.getElementById("royalPopupClose");

const isRoyalBirthday =
    now.getFullYear() === 2026 &&
    now.getMonth() === 6 &&
    now.getDate() === 28;

if (isRoyalBirthday && royalPopup) {
    royalPopup.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeRoyalPopup() {
    if (royalPopup) {
        royalPopup.classList.remove("show");
    }

    document.body.style.overflow = "";
}

if (royalPopupClose) {
    royalPopupClose.addEventListener("click", closeRoyalPopup);
}

if (royalPopup) {
    royalPopup.addEventListener("click", function (event) {
        if (event.target === royalPopup) {
            closeRoyalPopup();
        }
    });
}


// ---------- ปุ่ม ESC สำหรับปิดประกาศ ----------
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMotherPopup();
        closeRoyalPopup();
    }
});


// ==========================
// NEWS SLIDER
// ==========================


    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeRoyalPopup();
        }
    });

// ==========================
// NEWS SLIDER
// ==========================

const newsTrack = document.querySelector(".news-slider .news-box");
const newsCards = document.querySelectorAll(".news-slider .news-card");
const newsPrev = document.querySelector(".news-prev");
const newsNext = document.querySelector(".news-next");

if(newsTrack && newsCards.length){

    let newsIndex = 0;

    function newsShowCount(){
        if(window.innerWidth <= 600) return 1;
        if(window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateNewsSlider(){

        const cardWidth = newsCards[0].offsetWidth + 30;
        const max = newsCards.length - newsShowCount();

        newsTrack.style.transform =
        `translateX(-${newsIndex * cardWidth}px)`;

        newsPrev.style.display = "block";
newsNext.style.display = "block";
    }

   newsNext.addEventListener("click", () => {

    const max = newsCards.length - newsShowCount();

    if (newsIndex < max) {
        newsIndex++;
    } else {
        newsIndex = 0;
    }

    updateNewsSlider();

});

newsPrev.addEventListener("click", () => {

    const max = newsCards.length - newsShowCount();

    if (newsIndex > 0) {
        newsIndex--;
    } else {
        newsIndex = max;
    }

    updateNewsSlider();

});

    window.addEventListener("resize",updateNewsSlider);

    updateNewsSlider();
}