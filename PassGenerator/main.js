// Select DOM elements
const passInp = document.querySelector(".passwordBox input"),
  cpICon = document.querySelector(".passwordBox .copy-icon"),
  rgInput = document.querySelector(".rangeBox input"),
  sldNum = document.querySelector(".rangeBox .slider-number"),
  gntBtn = document.querySelector(".generate-button");

// Define character set for password generation
let all_Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Function to generate a random password
const gen_Passwod = function () {
  let N_pass = "";

  for (let i = 0; i < rgInput.value; i++) {
    let randomNumNum = Math.floor(Math.random() * all_Chars.length);
    N_pass += all_Chars[randomNumNum];
  }
  passInp.value = N_pass;
  cpICon.classList.replace("uil-file-check-alt", "uil-copy");
};

// Event listener for range input
rgInput.addEventListener("input", () => {
  sldNum.innerText = rgInput.value;
  gen_Passwod();
});

// Event listener for copy icon
cpICon.addEventListener("click", () => {
  navigator.clipboard.writeText(passInp.value);
  cpICon.classList.replace("uil-copy", "uil-file-check-alt");
});

// Generate initial password
gen_Passwod();

// Event listener for generate button
gntBtn.addEventListener("click", gen_Passwod);
