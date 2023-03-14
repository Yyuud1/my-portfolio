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

// Video Filtered
let mainVideo = document.querySelector(".main-video video");
let listVideo = document.querySelectorAll(".list-video .child-video");
let titleVideo = document.querySelector(".main-video .title-video");

listVideo.forEach((vid) => {
  vid.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    vid.classList.add("active");

    if (vid.classList.contains("active")) {
      let source = vid.children[0].getAttribute("src");
      mainVideo.src = source;
      let text = vid.children[1].innerHTML;
      titleVideo.innerHTML = text;
    }
  };
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
