// Get all audio elements from the page
const audios = document.querySelectorAll("audio");

audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    // Pause every other audio when this is audio plays
    audios.forEach((other) => {
      if (other != audio) other.pause();
    });
  });
});
