document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text-left");
  const movementSpeed = 0.3;

  // website on load animation
  setTimeout(() => {
    textElement.classList.add(".is-visible");
  }, 100);

  // Movement animation for scrolling
  function handleScrollMovement() {
    // Get the current vertical scroll position
    const scrollY = window.scrollY;
  }

  window.addEventListener("scroll", handleScrollMovement);
});
