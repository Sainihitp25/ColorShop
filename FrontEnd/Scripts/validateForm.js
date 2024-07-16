function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const emailError = document.getElementById("emailError");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  usernameError.textContent = "";
  passwordError.textContent = "";

  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  }

  if (!username) {
    usernameError.textContent = "Username is required";
    isValid = false;
  }

  if (!password) {
    passwordError.textContent = "Password is required";
    isValid = false;
  }

  if (isValid) {
    axios
      .post("http://localhost:9092/user/register", {
        email: email,
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log("*register successfully");
        console.log("Signed up successfully", response.data);
        // Redirect to login page or another page after successful signup
      })
      .catch(function (error) {
        console.error("There was an error signing up!", error);
      });
  }

  return isValid;
}

const form = document.getElementById("signupForm");
form.addEventListener("submit", validateForm);
