document.addEventListener("DOMContentLoaded", () => {
  const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
  const selectedColorsContainer = document.querySelector(".selected-colors");
  const userNameElement = document.getElementById("user-name");

  const token = localStorage.getItem("token");
  if (!token) {
    // Redirect user to login page if token is not present
    window.location.href = "/login.html"; // Adjust the URL as per your setup
    return;
  }

  const userName = localStorage.getItem("userName");
  if (userNameElement) {
    userNameElement.textContent = userName;
  }

  const colorMap = {
    "Lime Green": "#cddc39",
    "Blue Gray": "#607d8b",
    "Blue Violet": "#8a2be2",
    "Cornflower Blue": "#6495ed",
    "Dark Green": "#006400",
    "Dark Red": "#8b0000",

  }

  if (selectedColors && selectedColors.length > 0) {
    selectedColors.forEach((color) => {
      const colorBox = document.createElement("div");
      colorBox.classList.add("selected-color");
      colorBox.style.backgroundColor = color;
      colorBox.style.backgroundColor = colorMap[color];
      colorBox.textContent = color;

      if(color === "Cornflower Blue"){
        colorBox.style.textAlign = "center"
      }

      if(color === "White"){
        colorBox.style.color = "#000";
      }else{
        colorBox.style.color = "#fff"; 
      }
    
      selectedColorsContainer.appendChild(colorBox);
    });

  
    document.querySelectorAll(".purchase").forEach((btn) => {
      btn.style.display = "inline-block";
    });
  } else {
    const noColorsMessage = document.createElement("div");
    noColorsMessage.textContent = "No colors selected";
    selectedColorsContainer.appendChild(noColorsMessage);

    console.log(noColorsMessage);
    console.log(selectedColorsContainer)
  }
});

async function completePurchase() {
  const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
  const userId = localStorage.getItem("userId");

  // window.location.href = "/confirmation.html";  use this if backend is not connected

  try {
    const response = await axios.post(
      `http://localhost:9092/color-selection/colors-string/${userId}`,
      selectedColors, // Sending the array directly
      {
        headers: {
          'Content-Type': 'application/json' // Ensure the header is set for JSON
        }
      }
    );

    console.log("Response:", response);

    if (response.status === 200) {
      window.location.href = "/confirmation.html";
    } else {
      // Handle unexpected status codes
      console.log("Unexpected response status:", response.status);
    }
  } catch (error) {
    console.log("Error:", error);
    if (error.response) {
      // Server responded with a status other than 200 range
      console.log("Server error:", error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.log("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.log("Axios error:", error.message);
    }
  }
}
