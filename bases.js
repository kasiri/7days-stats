let currentIndex = 0;

function moveSlider(direction) {
    const slider = document.getElementById("slider");
    const slides = slider.querySelectorAll(".slide");

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    const slideWidth = slider.querySelector(".slide").offsetWidth + 20; // 20px gap
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}


// Lightbox
document.querySelectorAll(".slide img").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("lightbox-img").src = img.src;
        document.getElementById("lightbox").style.display = "flex";
    });
});

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
