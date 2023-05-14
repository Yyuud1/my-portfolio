const navbar = document.querySelector("nav");
const navbarA = document.querySelectorAll("header a");
const homeA = document.querySelectorAll(".home a");
const homeP = document.querySelectorAll(".home p");
const homeTitle = document.querySelectorAll("h2");
const aboutP = document.querySelector(".about p");
const aboutA = document.querySelectorAll(".about .sosmed-about a");
const aboutH3 = document.querySelector(".about h3");
const countApi = document.querySelector(".count-api");
const apiH3 = document.querySelector(".count-api h3");
const span = document.querySelectorAll("span");
const paragraf = document.querySelectorAll("p");
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
btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("active");
});

// click other sidebar
document.addEventListener("click", (e) => {
  if (!btnMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Background Mode
const toggleMode = document.querySelector("#toggle-mode");
let theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "dark");
}

const whiteMode = () => {
  document.body.classList.add("white-mode");
  localStorage.setItem("theme", "white");
  navbarA.forEach((nava) => {
    nava.style.color = "#333";
  });
  homeA.forEach((homeA) => {
    homeA.style.color = "#333";
  });
  homeA[3].style.color = "#eff0f4";
  // homeA[3].style.background = "hsl(352, 75%, 60%)";
  homeP.forEach((homep) => {
    homep.style.color = "#333";
  });
  homeTitle.forEach((hometit) => {
    hometit.style.color = "#333";
  });
  aboutP.style.color = "#444";
  aboutA.forEach((abota) => {
    abota.style.color = "#444";
  });
  aboutH3.style.color = "#444";
  apiH3.style.color = "#444";
  countApi.style.color = "#444";
  span.forEach((sp) => {
    sp.style.color = "#444";
  });
};

const darkMode = () => {
  document.body.classList.remove("white-mode");
  localStorage.setItem("theme", "dark");
  navbarA.forEach((nava) => {
    nava.style.color = "#eff0f4";
  });
  homeA.forEach((homeA) => {
    homeA.style.color = "#eff0f4";
  });
  homeA[3].style.background = "hsl(252, 75%, 60%)";
  homeP.forEach((homep) => {
    homep.style.color = "#eff0f4";
  });
  homeTitle.forEach((hometit) => {
    hometit.style.color = "#eff0f4";
  });
  aboutP.style.color = "#eff0f4";
  aboutA.forEach((abota) => {
    abota.style.color = "#eff0f4";
  });
  aboutH3.style.color = "#eff0f4";
  apiH3.style.color = "#eff0f4";
  countApi.style.color = "#eff0f4";
  span.forEach((sp) => {
    sp.style.color = "#eff0f4";
  });
};

toggleMode.addEventListener("click", (e) => {
  theme = localStorage.getItem("theme");
  if (theme === "dark") {
    whiteMode();
  } else {
    darkMode();
  }

  e.preventDefault();
});

if (theme === "white") {
  whiteMode();
}

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

// Hover on img hobby
function changeImg(e) {
  document.querySelector(".img-passion").src = e;
}
const changeImage = document.querySelectorAll("#changeImg");
for (let i = 0; i < changeImage.length; i++) {
  changeImage[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
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
musicLogo.addEventListener("click", (e) => {
  e.preventDefault();
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
