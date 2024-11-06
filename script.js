// Select form and error display elements
const form = document.getElementById("myForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate each field
  let isValid = true;

  // Name Validation (required, at least 3 characters)
  const name = form.name.value.trim();
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long";
    isValid = false;
  }

  // Email Validation (simple regex pattern)
  const email = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Password Validation (at least 6 characters)
  const password = form.password.value;
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});
