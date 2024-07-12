
document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");
  const selectedColorsContainer = document.querySelector(".selected-colors");
  const cartEmptyMessage = document.querySelector(".cart-empty");
  const checkoutButton = document.querySelector(".checkout-button");

  colors.forEach((color) => {
      color.addEventListener("click", function () {
          if (!color.classList.contains("selected")) {
              if (selectedColorsContainer.children.length <= 3) {
                  color.classList.add("selected");
                  addToCart(color);
                  updateCartEmptyMessage();
                  updateCheckoutButton();
              } else {
                  alert("You can select up to 3 colors only.");
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

      const colorName = document.createElement("span");
      colorName.textContent = color.dataset.colorName;
      selectedColorDiv.appendChild(colorName);

      selectedColorDiv.addEventListener("click", function () {
          color.classList.remove("selected");
          removeFromCart(color);
          updateCartEmptyMessage();
          updateCheckoutButton();
      });

      selectedColorsContainer.appendChild(selectedColorDiv);
  }

  function removeFromCart(color) {
      const colorName = color.dataset.colorName;
      const selectedColorDiv = document.querySelector(
          `.selected-color[data-color-name="${colorName}"]`
      );
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
