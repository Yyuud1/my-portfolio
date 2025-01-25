// const countVisit = document.querySelector("#count");

// const timesVisit = () => {
//   fetch("https://api.countapi.xyz/update/yudagrh/abcd1234/?amount=1")
//     .then((response) => response.json())
//     .then((response) => {
//       countVisit.innerHTML = response.value;
//     });
// };

// timesVisit();

const visit = document.getElementById("count");

updateVisit();

function updateVisit() {
  fetch("https://api.countapi.xyz/update/yyuud/mouse/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      visit.innerHTML = res.value;
    });
}
