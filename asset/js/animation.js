document.addEventListener("DOMContentLoaded", () => {
  // Hero section carousel animation
  let currentIndex = 0;
  const slideCount = trackers.length;
  let slideInterval = null;
  const AUTO_MS = 5000; // 5 seconds scroll change

  function goToSlide(index) {
    if (index < 0 || index >= slideCount) return;
    currentIndex = index;
    slidesTrack.style.transform = `translateX(-${index * 100}%)`;

    trackers.forEach((t) => t.classList.remove("active"));
    trackers[index].classList.add("active");
  }

  trackers.forEach((tracker) => {
    tracker.addEventListener("click", () => {
      const index = Number(tracker.dataset.index);
      if (Number.isFinite(index)) {
        goToSlide(index);
        resetAutoPlay();
      }
    });
  });

  function autoPlay() {
    // clear any existing interval just in case
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    }, AUTO_MS);
  }

  function resetAutoPlay() {
    clearInterval(slideInterval);
    autoPlay();
  }

  // initialize: ensure first tracker active & start autoplay
  goToSlide(0);
  autoPlay();
});
