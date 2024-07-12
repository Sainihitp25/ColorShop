document.addEventListener(
  "DOMContentLoaded",
  () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect user to login page if token is not present
      window.location.href = "/login.html"; // Adjust the URL as per your setup
      return;
    }
  },
);

function logout() {
    // Clear session/local storage or any other authentication tokens
    localStorage.clear();
    // Redirect to login page
    window.location.href = "login.html";
  }
