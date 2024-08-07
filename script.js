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
