document.addEventListener("DOMContentLoaded", function () {
  // Load Team json file
  fetch("../../data/songs.json")
    .then((response) => response.json())
    .then((team) => {
      const slides = document.getElementById("slides");

      team.forEach((person) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
        <div class="container-img">
          <img src="${person.image}" alt="${person.name}" />
        </div>
        <article>
          <p style="color: #fff; font-size: large">${person.name}</p>

          <p
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              gap: 6px;
              color: #a855f7;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a855f7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-music"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            ${person.role}
          </p>

          <p>${person.bio}</p>

          <a href="mailto:${person.email}">${person.email}</a>
        </article>
      `;

        slides.appendChild(slide);
      });
    })
    .catch((error) => console.log("Error loading JSON", error));
});
