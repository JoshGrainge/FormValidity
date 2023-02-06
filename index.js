const form = document.querySelector("#user-info");
const mail = document.querySelector("#mail");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirm-pass");
const submit = document.querySelector("#submit");

const mailError = document.querySelector("#mail + span");
const countryError = document.querySelector("#country + span");
const zipError = document.querySelector("#zip + span");
const passError = document.querySelector("#pass + span");
const confirmPassError = document.querySelector("#confirm-pass + span");

mail.addEventListener("input", () => {
  if (mail.validity.typeMismatch) {
    country.setCustomValidity(" ");
    mailError.textContent = "Please enter a valid email address";
  } else {
    country.setCustomValidity("");
    mailError.textContent = "";
  }
});

country.addEventListener("input", () => {
  if (country.value.length == 0) {
    country.setCustomValidity(" ");
    countryError.textContent = "Please enter your country";
  } else {
    country.setCustomValidity("");
    countryError.textContent = "";
  }
});

zip.addEventListener("input", () => {
  if (zip.value.length == 0) {
    zip.setCustomValidity(" ");
    zipError.textContent = "Please enter a valid zip code";
  } else {
    zip.setCustomValidity("");
    zipError.textContent = "";
  }
});

pass.addEventListener("input", () => {
  let valid = true;
  if (pass.value.length < 8) {
    valid = false;
    passError.textContent =
      "You must enter a password of at least 8 characters";
  }

  if (valid) {
    pass.setCustomValidity("");
    passError.textContent = "";
  } else {
    pass.setCustomValidity(" ");
  }
});

confirmPass.addEventListener("input", () => {
  let valid = true;
  if (confirmPass.value < 8) {
    valid = false;
    confirmPassError.textContent =
      "You must enter a password of at least 8 characters";
  } else if (confirmPass.value !== pass.value) {
    valid = false;
    confirmPassError.textContent = "Passwords do not match";
  }

  if (valid) {
    confirmPass.setCustomValidity("");
    confirmPassError.textContent = "";
  } else {
    confirmPass.setCustomValidity(" ");
  }
});

form.addEventListener("submit", (e) => {
  console.log("Form validity: " + form.checkValidity());
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
