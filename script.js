// script.js
const validNames1 = ['abc']
const validNames2 = ['Poa thúi','Poa iu dáu','Poa quạy','cục dzàng','người yêu','em bé','vk Tunie'];
function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim(); // Trim whitespace

    if (validNames1.includes(nameInput)) {
        localStorage.setItem('guestName', nameInput);
        window.location.href = 'thankyou1.html';
    } else if (validNames2.includes(nameInput)) {
        localStorage.setItem('guestName', nameInput);
        window.location.href = 'thankyou2.html';
    } else {
        document.getElementById("oopsPopup").style.display = "block";
    }
}
function goBack() {
    window.history.back();
}
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
function hideOopsPopup() {
    document.getElementById("oopsPopup").style.display = "none";
}
function showAnotherPopup() {
    document.getElementById("anotherPopup").style.display = "block";
}

function hideAnotherPopup() {
    document.getElementById("anotherPopup").style.display = "none";
}
function hideMap() {
    document.getElementById("mapPopup").style.display = "none";
}

function showMapPopup() { // Function to show the map popup directly from the main window
    document.getElementById("mapPopup").style.display = "block";
}
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkName();
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const guestName = localStorage.getItem('guestName');
    if (guestName) {
        document.getElementById('guestName').textContent = guestName;
    }
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function changeImage(src, alt) {
    document.querySelector('.gallery img').src = src;
    document.querySelector('.gallery img').alt = alt;
    document.querySelector('.dropdown button.dropbtn').textContent = alt;
  }