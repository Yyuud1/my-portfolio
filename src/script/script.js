const navbar = document.querySelector("nav");
const btnMenu = document.getElementById("btn-menu");
const filterButtonContainer = document.querySelector(".filter-button");
const galleryItems = document.querySelectorAll(".item");
const audio = document.querySelector("audio");
const musicLogo = document.querySelector("#music");
const textSmoke = document.querySelector(".text");

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Sidebar active
btnMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// click other sidebar
document.addEventListener("click", (e) => {
  if (!btnMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Filterd Gallery
filterButtonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("list")) {
    filterButtonContainer.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

// Hover on img
function changeImg(e) {
  document.querySelector(".img-passion").src = e;
}

// Smoke text
textSmoke.innerHTML = textSmoke.textContent.replace(/\S/g, "<small>$&</small>");

const letters = document.querySelectorAll("small");
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("mouseover", () => {
    letters[i].classList.add("active");
  });
}

// audio
musicLogo.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
