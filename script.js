document.querySelectorAll(".block-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    title.classList.toggle("open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Open spoiler
    }
  });
});

const audio = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");

let pauseCount = 0;

toggleButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleButton.classList.remove("paused"); // Add or remove a class for styling
    pauseCount = 0;
  } else {
    audio.pause();
    pauseCount++;
    toggleButton.classList.add("paused");

    if (pauseCount === 2) {
      toggleButton.style.display = "none";
    }
  }
});

window.addEventListener("load", () => {
  audio.play().catch((err) => {
    console.log("Autoplay prevented by browser:", err);
  });
});
