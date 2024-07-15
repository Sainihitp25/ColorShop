document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");
  const selectedColorsContainer = document.querySelector(".selected-colors");
  const cartEmptyMessage = document.querySelector(".cart-empty");
  const checkoutButton = document.querySelector(".checkout-button");
  const userNameElement = document.getElementById("user-name");

  // Check if user is authenticated (token exists in localStorage)
  const token = localStorage.getItem("token");
  if (!token) {
    // Redirect user to login page if token is not present
    window.location.href = "/login.html"; // Adjust the URL as per your setup
    return;
  }

  // Fetch userId from localStorage
  const userName = localStorage.getItem("userName");
  if (userNameElement) {
    userNameElement.textContent = userName;
  }

  const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));

  if (selectedColors) {
    for (var i = 0; i < 3; i++) {
      let backgroundColor = false;
      colors.forEach(color => {
        if (color.dataset.colorName === selectedColors[i]) {
          backgroundColor = color.style.backgroundColor;
        }
      });
      const selectedColorDiv = document.createElement("div");
      selectedColorDiv.className = "selected-color";
      selectedColorDiv.dataset.colorName = selectedColors[i].colorName;
      selectedColorDiv.style.backgroundColor = backgroundColor;

      const colorName = document.createElement("span");
      colorName.textContent = selectedColors[i]
      selectedColorDiv.appendChild(colorName);

      if (backgroundColor === "rgb(255, 255, 255)") {
        selectedColorDiv.style.color = "#000";
      } else {
        selectedColorDiv.style.color = "#fff";
      }

      selectedColorsContainer.appendChild(selectedColorDiv);

      selectedColorDiv.addEventListener("click", function () {
        selectedColorsContainer.removeChild(selectedColorDiv);
      });
      updateCheckoutButton();
    }
  }



  // Color selection logic
  colors.forEach((color) => {
    color.addEventListener("click", function () {
      if (!color.classList.contains("selected")) {
        if (selectedColorsContainer.children.length <= 3) {
          color.classList.add("selected");
          addToCart(color);
          updateCartEmptyMessage();
          updateCheckoutButton();
        } else {
          // alert("You can select up to 3 colors only.");
          Swal.fire({
            icon: 'error',
            title: 'Select at max 3 colors',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        }
      } else {
        color.classList.remove("selected");
        removeFromCart(color);
        updateCartEmptyMessage();
        updateCheckoutButton();
      }
    });
  });

  function addToCart(color) {
    const selectedColorDiv = document.createElement("div");
    selectedColorDiv.className = "selected-color";
    selectedColorDiv.dataset.colorName = color.dataset.colorName;
    selectedColorDiv.style.backgroundColor = color.style.backgroundColor;

    if (color.style.backgroundColor === "rgb(255, 255, 255)") {
      selectedColorDiv.style.color = "#000";
    } else {
      selectedColorDiv.style.color = "#fff";
    }


    const colorName = document.createElement("span");
    colorName.textContent = color.dataset.colorName;
    selectedColorDiv.appendChild(colorName);

    selectedColorDiv.addEventListener("click", function () {
      color.classList.remove("selected");
      removeFromCart(color.dataset.colorName);
      updateCartEmptyMessage();
      updateCheckoutButton();
    });

    selectedColorsContainer.appendChild(selectedColorDiv);
  }

  function removeFromCart(colorName) {
    // console.log(colorName);
    const selectedColorDiv = document.querySelector(
      `.selected-color[data-color-name="${colorName}"]`
    );
    console.log(selectedColorDiv);
    if (selectedColorDiv) {
      selectedColorsContainer.removeChild(selectedColorDiv);
    }
  }

  function updateCartEmptyMessage() {
    if (selectedColorsContainer.children.length === 0) {
      cartEmptyMessage.style.display = "block";
    } else {
      cartEmptyMessage.style.display = "none";
    }
  }

  function updateCheckoutButton() {
    if (selectedColorsContainer.children.length > 0) {
      checkoutButton.style.display = "block";
      checkoutButton.disabled = false;
    } else {
      checkoutButton.style.display = "none";
      checkoutButton.disabled = true;
    }
  }

  checkoutButton.addEventListener("click", () => {
    const selectedColors = [];
    selectedColorsContainer
      .querySelectorAll(".selected-color")
      .forEach((color) => {
        selectedColors.push(color.dataset.colorName);
      });
    localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
    window.location.href = "checkout.html";
  });
});
