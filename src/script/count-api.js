const countVisit = document.querySelector("#count");

const timesVisit = () => {
  fetch("https://api.countapi.xyz/update/yudagrh/abcd1234/?amount=1")
    .then((response) => response.json())
    .then((response) => {
      countVisit.innerHTML = response.value;
    });
};

timesVisit();
