const form = document.getElementById("form");
const firstnameIN = document.getElementById("FirstName-input");
const emailIN = document.getElementById("email-input");
const passwordIn = document.getElementById("password-input");
const repeatIN = document.getElementById("repeat-password");
const erMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  let err = [];
  if (firstnameIN) {
    err = getSignedInErroes(
      firstnameIN.value,
      emailIN.value,
      passwordIn.value,
      repeatIN.value
    );
  } else {
    err = getLoginErrors(emailIN.value, passwordIn.value);
  }
  if (err.length > 0) {
    e.preventDefault();
    erMessage.innerText = err.join(". ");
  }
});

function getSignedInErroes(FirstName, email, password, repeatPassword) {
  let err = [];
  if (FirstName === "" || FirstName === null) {
    err.push("First name is required");
    firstnameIN.parentElement.classList.add("incorrect");
  }
  if (email === "" || email === null) {
    err.push("email is required");
    emailIN.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    err.push("password is required");
    passwordIn.parentElement.classList.add("incorrect");
  }
  return err;
}
function getLoginErrors(email, password) {
  let err = [];
  if (email === "" || email === null) {
    err.push("email is required");
    emailIN.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    err.push("password is required");
    passwordIn.parentElement.classList.add("incorrect");
  }
}
