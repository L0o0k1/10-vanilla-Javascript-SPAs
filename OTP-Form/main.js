// Select all input elements and the button
const inp = document.querySelectorAll("input");
const btn = document.querySelector("button");

// Add event listeners to each input field
inp.forEach((input, index1) => {
  input.addEventListener("input", (x) => {
    // Define current, next, and previous input elements
    const currentINP = input;
    const nextINP = input.nextElementSibling;
    const prevINP = input.previousElementSibling;

    // Limit input to one character
    if (currentINP.value.length > 1) {
      currentINP.value = currentINP.value[0];
    }

    // Move focus to next input if available and current input is not empty
    if (nextINP && currentINP.value !== "") {
      nextINP.removeAttribute("disabled");
      nextINP.focus();
    }

    // Handle backspace key
    if (x.key === "Backspace") {
      inp.forEach((input, index2) => {
        if (index1 <= index2 && prevINP) {
          input.setAttribute("disabled", true);
          currentINP.value = "";
          prevINP.focus();
        }
      });
    }

    // Activate button if last input is filled
    if (!inp[3].disabled && inp[3].value !== "") {
      btn.classList.add("active");
      return;
    }
  });
});

// Initialize the first input field on page load
window.addEventListener("load", () => {
  inp[0].removeAttribute("disabled");
  inp[0].focus();
});
