const button = document.getElementById("button");
button.addEventListener("click", function () {
  const message = document.getElementById("message");
  message.classList.toggle("hidden");
  message.style.animation = "fadeIn 1.5s ease-in-out";

  let sound = new Audio("audio/click.ogg");
  sound.play();
});

window.onload = function () {
  document.getElementById("popup").style.display = "block";
  typeText(titleElement, titleText, 100);
  setTimeout(
    () => typeText(textElement, dialogText, 50),
    titleText.length * 100
  );
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
  let sound = new Audio("audio/open.ogg");
  sound.play();
}

function showSurprise() {
  document.getElementById("surprise-container").style.display = "block";
  let sound = new Audio("audio/click.ogg");
  sound.play();
}

function closeSurprise() {
  document.getElementById("surprise-container").style.display = "none";
  let sound = new Audio("audio/open.ogg");
  sound.play();
}

const titleText = "Selamat datang Audrey!";
const dialogText =
  "Hai aku adalah robot yang menjaga website ini.\nWebsite ini dibangun khusus untukmu dengan sepenuh hati. \nSilahkan masuk:D";
const titleElement = document.getElementById("dialog-title");
const textElement = document.getElementById("dialog-text");

function typeText(element, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
