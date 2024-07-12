document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", async function (event) {
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
      try {
        const response = await axios.post('http://localhost:9092/user/register', {
          emailId: email,
          username: username,
          password: password
        });

        alert("signup successful");
        console.log('Signed up successfully', response.data);

        // Wait for 12 seconds before redirecting
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Redirect to login page or another page after successful signup
        window.location.href = '/login.html';
      } catch (error) {

        alert("User Already Exists");
        console.error('There was an error signing up!', error);
      }
    }
  });
});