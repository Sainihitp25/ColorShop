
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted");

        let isValid = true;

        const email = document.getElementById("Email").value;
        const password = document.getElementById("password").value;

        console.log("Email:", email);
        console.log("Password:", password);

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
            console.log("Form is valid");

            window.location.href = '/dashboard.html'

        } else {
            console.log("Form is not valid");
        }
    });
});
