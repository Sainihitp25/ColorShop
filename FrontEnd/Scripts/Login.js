document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("EmailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email) {
      emailError.textContent = "Email is required";
      isValid = false;
    }

    if (!password) {
      passwordError.textContent = "Password is required";
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post("http://localhost:9092/user/login", {
          emailId: email,
          password: password,
        });

        if (response.status === 200) {
          const token = response.data.token;

          localStorage.setItem("token", token);
          localStorage.setItem("userName", response.data.username);
          localStorage.setItem("userId", response.data.userId);

          // SweetAlert for successful login
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Redirecting to dashboard...',
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            window.location.href = "/dashboard.html";
          });
        } else {
          console.log("Unexpected response status:", response.status);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid credentials',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.log("Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid credentials',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });

        if (error.response) {
          console.log("Server error:", error.response.data);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Axios error:", error.message);
        }
      }
    }
  });
});
