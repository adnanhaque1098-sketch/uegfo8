const words = [
  "Web Developer",
  "Video Editor",
  "Freelancer",
  "Creative Coder"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  const current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, letterIndex++);
    if (letterIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typing.textContent = current.substring(0, letterIndex--);
    if (letterIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
