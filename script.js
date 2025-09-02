// 🎮 Part 1: Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "Switch to Light Mode";
  } else {
    modeToggle.textContent = "Switch to Dark Mode";
  }
});

// 🎮 Part 2: Counter Game
let counterValue = 0;
const counter = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

// 🎮 Part 2: FAQ Collapsible Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// 📋✅ Part 3: Form Validation
const form = document.getElementById("signupForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from refreshing page

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  const successMessage = document.getElementById("successMessage");
  if (valid) {
    successMessage.textContent = "Form submitted successfully! 🎉";
    form.reset(); // clear form fields
  } else {
    successMessage.textContent = "";
  }
});
