// Enable clear input field button
const clickInput = (id) => {
  document
    .querySelector("#" + id)
    .parentNode.lastElementChild.classList.remove("hidden");
};
// Clear input
const clearInput = (id) => {
  document.querySelector("#" + id).classList.add("hidden");
  document.querySelector("#" + id).parentNode.firstElementChild.value = "";
};
// Prevent user from typing letters in phone number field
const validateNumber = (event) => {
  if (
    ((event.key < "0" || event.key > "9") &&
      event.key != "+" &&
      event.key != "Backspace") ||
    (event.key == "+" && event.target.value.length > 0)
  ) {
    event.preventDefault();
  }
};
// Validate email function
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
// Validate phone number function
const validatePhone = (phone) => {
  console.log(phone.match(/\d/g).length);
  return phone.match(/\d/g).length === 10 || phone.match(/\d/g).length === 11;
};

// Complete first step for appiontment
const completePersonalInfo = () => {
  let phoneNumber = document.querySelector("#input-number").value;
  let email = document.querySelector("#input-email").value;
  let isValid = false;
  if (validateEmail(email) && validatePhone(phoneNumber)) isValid = true;
  if (isValid) {
    document.querySelector("#personal-info").classList.add("hidden");
    document
      .querySelectorAll("#progress .progress-check")[1]
      .classList.add("completed");
    document.querySelector(".error-message").classList.add("hidden");
  } else {
    document.querySelector(".error-message").classList.remove("hidden");
  }
};
