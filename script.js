const validateForm = () => {
  let form = document.getElementById("myForm");
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let otherNames = document.getElementById("otherNames").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let gender = document.getElementById("gender").value;

  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let genderError = document.getElementById("genderError");
  let otherNameError = document.getElementById("otherNameError");

  let valid = true;

  if (firstName.length < 1 || /\d/.test(firstName)) {
    firstNameError.textContent =
      "First name is required and cannot contain numbers.";
    valid = false;
  } else {
    firstNameError.textContent = "";
  }

  if (lastName.length < 1 || /\d/.test(lastName)) {
    lastNameError.textContent =
      "Last name is required and cannot contain numbers.";
    valid = false;
  } else {
    lastNameError.textContent = "";
  }
  if (/\d/.test(otherNames)) {
    otherNameError.textContent = "Name cannot contain numbers.";
    valid = false;
  } else {
    otherNameError.textContent = "";
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Invalid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (phone.length !== 11 || isNaN(phone)) {
    phoneError.textContent = "Phone number must be 11 digits.";
    valid = false;
  } else {
    phoneError.textContent = "";
  }

  if (gender === "") {
    genderError.textContent = "Please select a gender.";
    valid = false;
  } else {
    genderError.textContent = "";
  }
  if (!valid) {
    return false;
  }
};
