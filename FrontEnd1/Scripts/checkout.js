document.addEventListener("DOMContentLoaded", () => {
    const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
    const selectedColorsContainer = document.querySelector(".selected-colors");

    if (selectedColors && selectedColors.length > 0) {
        selectedColors.forEach((color) => {
            const colorBox = document.createElement("div");
            colorBox.classList.add("selected-color");
            colorBox.style.backgroundColor = color;
            colorBox.textContent = color; // Set text content directly to color name

            selectedColorsContainer.appendChild(colorBox);
        });
    } else {
        const noColorsMessage = document.createElement("div");
        noColorsMessage.textContent = "No colors selected";
        selectedColorsContainer.appendChild(noColorsMessage);
    }
});
