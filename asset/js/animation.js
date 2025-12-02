document.addEventListener("DOMContentLoaded", () => {
  // scroll movement handler
  function handleScrollMovement() {
    const scrollY = window.scrollY;
    // move element by small fraction (only if it exists)
    const moveTarget = document.querySelector(".move-on-scroll");
    if (moveTarget) {
      moveTarget.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  }
  window.addEventListener("scroll", handleScrollMovement);

  // slider logic (defensive)
  const slidesTrack = document.querySelector(".slides-track");
  const trackers = document.querySelectorAll(".tracker");

  // Ensure required elements exist
  if (!slidesTrack) {
    console.warn("Slider: .slides-track not found in DOM — slider won't run.");
    return;
  }
  if (!trackers || trackers.length === 0) {
    console.warn("Slider: no .tracker elements found — slider won't run.");
    return;
  }

  let currentIndex = 0;
  const slideCount = trackers.length;
  let slideInterval = null;
  const AUTO_MS = 5000; // 5 seconds slide

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

  // ensure first tracker active & start autoplay
  goToSlide(0);
  autoPlay();
});
