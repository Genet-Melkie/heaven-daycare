
// Gallery Slider
let galleryIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
  showGallerySlides(galleryIndex);
});

function plusGallerySlides(n) {
  showGallerySlides(galleryIndex += n);
}

function currentGallerySlide(n) {
  showGallerySlides(galleryIndex = n);
}

function showGallerySlides(n) {
  let i;
  const slides = document.getElementsByClassName("gallery-slide");
  const dots = document.getElementsByClassName("gallery-dot");

  if (!slides.length) return;

  if (n > slides.length) { galleryIndex = 1 }
  if (n < 1) { galleryIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-gallery-dot", "");
  }

  slides[galleryIndex - 1].style.display = "block";
  dots[galleryIndex - 1].className += " active-gallery-dot";
}