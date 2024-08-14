const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  checkKey = document.querySelector(".keys-checkbox input");

let aud = new Audio("tunes/a.wav");

const tune = function (key) {
  aud.src = `tunes/${key}.wav`;
  aud.play();
  const clickedKye = document.querySelector(`[data-key='${key}']`);
  clickedKye.classList.add("active");
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", function () {
    tune(key.dataset.key);
  });
});
const ShowOrHide = (x) => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

const preSKey = (x) => {
  tune(x.key);
};
checkKey.addEventListener("input", ShowOrHide);
document.addEventListener("keydown", preSKey);
