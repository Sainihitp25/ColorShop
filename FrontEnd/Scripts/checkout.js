document.addEventListener("DOMContentLoaded", () => {
  const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
  const selectedColorsContainer = document.querySelector(".selected-colors");

  if (selectedColors && selectedColors.length > 0) {
    selectedColors.forEach((color) => {
      const colorBox = document.createElement("div");
      colorBox.classList.add("selected-color");
      colorBox.style.backgroundColor = color;

      const colorName = document.createElement("span");
      colorName.textContent = color;
      colorBox.appendChild(colorName);

      selectedColorsContainer.appendChild(colorBox);
    });
  } else {
    const noColorsMessage = document.createElement("div");
    noColorsMessage.textContent = "No colors selected";
    selectedColorsContainer.appendChild(noColorsMessage);
  }
});
