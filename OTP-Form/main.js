const inp = document.querySelectorAll("input");
const btn = document.querySelector("button");

inp.forEach((input, index1) => {
  input.addEventListener("input", (x) => {
    const currentINP = input;
    (nextINP = input.nextElementSibling),
      (prevINP = input.previousElementSibling);

    if (currentINP.value.length > 1) {
      currentINP.value = currentINP.value[0];
    }

    if (nextINP && currentINP.value !== "") {
      nextINP.removeAttribute("disabled");
      nextINP.focus();
    }
    if (x.key === "Backspace") {
      inp.forEach((input, index2) => {
        if (index1 <= index2 && prevINP) {
          input.setAttribute("disabled", true);
          currentINP.value = "";
          prevINP.focus();
        }
      });
    }
    if (!inp[3].disabled && inp[3].value !== "") {
      btn.classList.add("active");
      return;
    }
  });
});

window.addEventListener("load", () => {
  inp[0].removeAttribute("disabled");
  inp[0].focus();
});
