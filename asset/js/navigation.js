document.addEventListener("DOMContentLoaded", function () {
  // Navbar drop down Navigation

  // Getting all element
  const dropDownButton = this.documentElement.querySelectorAll(".dropdown-btn");
  const navDropdownItem = this.documentElement.querySelectorAll(
    ".__navbar-mobile-dropdown"
  );
  const featherX = this.documentElement.querySelector(".feather-x");
  const featherAlignJustify = this.documentElement.querySelector(
    ".feather-align-justify"
  );

  //   Checks if dropdown button and navbar drop down item exist
  if (dropDownButton && navDropdownItem) {
    // Loop through each btn
    dropDownButton.forEach((dropDownBtn) => {
      // Listens for click event
      dropDownBtn.addEventListener("click", () => {
        // Loop through each navbar drop down
        navDropdownItem.forEach((navDropdownItm) => {
          navDropdownItm.classList.toggle("drop-down-class");

          // Checks if X and align svg exist before statement
          if (featherX && featherAlignJustify) {
            if (
              !navDropdownItm.classList.contains("drop-down-class") &
              (!featherX && featherAlignJustify)
            ) {
              featherAlignJustify.classList.toggle("svg-display");
              featherX.classList.toggle("svg-hidden");
            } else {
              featherAlignJustify.classList.toggle("svg-hidden");
              featherX.classList.toggle("svg-display");
            }
          }
        });
      });
    });
  }
});
