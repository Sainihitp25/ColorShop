// // // function validateLoginForm(event) {
// // //   event.preventDefault();

// // //   let isValid = true;

// // //   const email = document.getElementById("Email").value;
// // //   const password = document.getElementById("password").value;

// // //   console.log(email)
// // //   console.log(password)

// // //   const emailError = document.getElementById("EmailError");
// // //   const passwordError = document.getElementById("passwordError");

// // //   emailError.textContent = "";
// // //   passwordError.textContent = "";


// // //   if (!email) {
// // //     emailError.textContent = "Email is required";
// // //     isValid = false;
// // //   }

// // //   if (!password) {
// // //     passwordError.textContent = "Password is required";
// // //     isValid = false;
// // //   }

// // // //   if (isValid) {
// // // //     axios
// // // //       .post("http://localhost:8080/login", {
// // // //         email: email,
// // // //         password: password,
// // // //       })
// // // //       .then((response) => {
// // // //         console.log("Logged in successfully");
// // // //         // Redirect to dashboard or another page after successful login
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error("There was an error logging in!", error);
// // // //       });
// // // //   }

// // //   return isValid;
// // // }



// // document.addEventListener("DOMContentLoaded", function() {
// //     const loginForm = document.getElementById("loginForm");

// //     loginForm.addEventListener("submit", function(event) {
// //         event.preventDefault();
// //         console.log("Form submitted");

// //         let isValid = true;

// //         const email = document.getElementById("Email").value;
// //         const password = document.getElementById("password").value;

// //         console.log("Email:", email);
// //         console.log("Password:", password);

// //         const emailError = document.getElementById("EmailError");
// //         const passwordError = document.getElementById("passwordError");

// //         emailError.textContent = "";
// //         passwordError.textContent = "";

// //         if (!email) {
// //             emailError.textContent = "Email is required";
// //             isValid = false;
// //         }

// //         if (!password) {
// //             passwordError.textContent = "Password is required";
// //             isValid = false;
// //         }

// //         if (isValid) {
// //             console.log("Form is valid");
// //             // Add your Axios request here
// //         } else {
// //             console.log("Form is not valid");
// //         }
// //     });
// // });


// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("loginForm");

//     loginForm.addEventListener("submit", function(event) {
//         event.preventDefault();
//         console.log("Form submitted");

//         let isValid = true;

//         const email = document.getElementById("Email").value;
//         const password = document.getElementById("password").value;

//         console.log("Email:", email);
//         console.log("Password:", password);

//         const emailError = document.getElementById("EmailError");
//         const passwordError = document.getElementById("passwordError");

//         emailError.textContent = "";
//         passwordError.textContent = "";

//         if (!email) {
//             emailError.textContent = "Email is required";
//             isValid = false;
//         }

//         if (!password) {
//             passwordError.textContent = "Password is required";
//             isValid = false;
//         }

//         if (isValid) {
//             console.log("Form is valid");

//             axios.post('/login', {
//                 email: email,
//                 password: password
//             })
//             .then(function (response) {
//                 console.log("Response:", response);
//                 // Handle successful login here, e.g., redirect to another page
//             })
//             .catch(function (error) {
//                 console.log("Error:", error);
//                 // Handle login error here, e.g., display an error message
//                 if (error.response) {
//                     // Server responded with a status other than 200 range
//                     console.log("Server error:", error.response.data);
//                 } else if (error.request) {
//                     // Request was made but no response received
//                     console.log("No response received:", error.request);
//                 } else {
//                     // Something happened in setting up the request
//                     console.log("Axios error:", error.message);
//                 }
//             });
//         } else {
//             console.log("Form is not valid");
//         }
//     });
// });


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

            // axios.post('/login', {
            //     email: email,
            //     password: password
            // })
            // .then(function (response) {
            //     console.log("Response:", response);
            //     if (response.status === 200) {
            //         // Handle successful login
            //         window.location.href = '/dashboard'; // Redirect to dashboard or another page
            //     } else {
            //         // Handle unexpected status codes
            //         console.log("Unexpected response status:", response.status);
            //     }
            // })
            // .catch(function (error) {
            //     console.log("Error:", error);
            //     if (error.response) {
            //         // Server responded with a status other than 200 range
            //         console.log("Server error:", error.response.data);
            //     } else if (error.request) {
            //         // Request was made but no response received
            //         console.log("No response received:", error.request);
            //     } else {
            //         // Something happened in setting up the request
            //         console.log("Axios error:", error.message);
            //     }
            // });
        } else {
            console.log("Form is not valid");
        }
    });
});
