const loginForm = document.getElementById("login-form");
const dashboard = document.getElementById("dashboard");

// Function to handle successful login
function handleLoginSuccess(userData) {
  loginForm.classList.add("d-none"); // Hide login form
  dashboard.classList.remove("d-none"); // Show dashboard

  // Fetch policy data from your backend API using userData (e.g., token)
  fetch("/api/policies", {
    headers: {
      Authorization: `Bearer ${userData.token}`, // Replace with appropriate authorization header
    },
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("total-policies").textContent =
        data.totalPolicies;
      document.getElementById("claimed-policies").textContent =
        data.claimedPolicies;
      document.getElementById("active-count").textContent =
        data.statusCounts.active;
      document.getElementById("pending-count").textContent =
        data.statusCounts.pending;
      document.getElementById("inactive-count").textContent =
        data.statusCounts.inactive;
    })
    .catch((error) => {
      console.error("Error fetching policy data:", error);
      // Handle error appropriately, e.g., display an error message to the user
    });
}

// Simulate login form submission (replace with actual form handling logic)
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulate authentication (replace with actual authentication logic)
  if (username === "user" && password === "password") {
    handleLoginSuccess({ token: "your_auth_token" }); // Replace with actual token generation
  } else {
    // Handle invalid login (e.g., display an error message)
    console.error("Invalid login credentials");
  }
});

// Include Font Awesome icons for status and help icons (https://fontawesome.com/)
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/your_fontawesome_kit_id.js"; // Replace with your kit ID
document.head.appendChild(script);
