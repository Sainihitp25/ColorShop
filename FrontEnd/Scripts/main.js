// // // // main.js

// // document.addEventListener('DOMContentLoaded', () => {
// //     const colors = document.querySelectorAll('.color');
// //     const selectedColorsContainer = document.querySelector('.selected-colors');
// //     const cartEmptyMessage = document.querySelector('.cart-empty');
// //     const checkoutButton = document.querySelector('.checkout-button');

// //     colors.forEach(color => {
// //         color.addEventListener('click', () => {
// //             if (selectedColorsContainer.children.length <= 3) {
// //                 if (!color.classList.contains('disabled')) {
// //                     const selectedColor = document.createElement('div');
// //                     selectedColor.classList.add('selected-color');
// //                     selectedColor.style.backgroundColor = color.style.backgroundColor;
// //                     selectedColor.textContent = color.dataset.color;
// //                     selectedColor.addEventListener('click', () => {
// //                         selectedColorsContainer.removeChild(selectedColor);
// //                         color.classList.remove('disabled');
// //                         if (selectedColorsContainer.children.length === 0) {
// //                             cartEmptyMessage.style.display = 'block';
// //                             checkoutButton.style.display = 'none'; // Hide the checkout button when no colors are selected
// //                         }
// //                         checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// //                     });
// //                     selectedColorsContainer.appendChild(selectedColor);
// //                     cartEmptyMessage.style.display = 'none';
// //                     color.classList.add('disabled');
// //                     checkoutButton.style.display = 'block'; // Show the checkout button when a color is selected
// //                     checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// //                 }
// //             } else {
// //                 alert('You can select a maximum of 3 colors.');
// //             }
// //         });
// //     });

// //     checkoutButton.addEventListener('click', () => {
// //         const selectedColors = [];
// //         selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
// //             selectedColors.push(color.style.backgroundColor);
// //         });
// //         localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
// //         window.location.href = 'checkout.html';
// //     });
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const colors = document.querySelectorAll('.color');
//     const selectedColorsContainer = document.querySelector('.selected-colors');
//     const cartEmptyMessage = document.querySelector('.cart-empty');
//     const checkoutButton = document.querySelector('.checkout-button');

//     colors.forEach(color => {
//       color.addEventListener('click', () => {
//         if (selectedColorsContainer.children.length <= 3) {
//           if (!color.classList.contains('disabled')) {
//             const selectedColor = document.createElement('div');
//             selectedColor.classList.add('selected-color');
//             selectedColor.style.backgroundColor = color.style.backgroundColor;
//             selectedColor.textContent = color.textContent.trim();
//             selectedColor.addEventListener('click', () => {
//               selectedColorsContainer.removeChild(selectedColor);
//               color.classList.remove('disabled');
//               if (selectedColorsContainer.children.length === 0) {
//                 cartEmptyMessage.style.display = 'block';
//                 checkoutButton.style.display = 'none';
//               }
//               checkoutButton.disabled = selectedColorsContainer.children.length === 0;
//             });
//             selectedColorsContainer.appendChild(selectedColor);
//             cartEmptyMessage.style.display = 'none';
//             color.classList.add('disabled');
//             checkoutButton.style.display = 'block';
//             checkoutButton.disabled = selectedColorsContainer.children.length === 0;
//           }
//         } else {
//           alert('You can select a maximum of 3 colors.');
//         }
//       });
//     });

//     checkoutButton.addEventListener('click', () => {
//       const selectedColors = [];
//       selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
//         selectedColors.push(color.style.backgroundColor);
//       });
//       localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
//       window.location.href = 'checkout.html';
//     });
//   });

// document.addEventListener('DOMContentLoaded', () => {
//     const colors = document.querySelectorAll('.color');
//     const selectedColorsContainer = document.querySelector('.selected-colors');
//     const cartEmptyMessage = document.querySelector('.cart-empty');
//     const checkoutButton = document.querySelector('.checkout-button');

//     colors.forEach(color => {
//         color.addEventListener('click', () => {
//             if (selectedColorsContainer.children.length <= 3) {
//                 if (!color.classList.contains('disabled')) {
//                     const selectedColor = document.createElement('div');
//                     selectedColor.classList.add('selected-color');
//                     selectedColor.style.backgroundColor = color.style.backgroundColor;

//                     const colorName = document.createElement('span');
//                     colorName.textContent = color.dataset.colorName;
//                     selectedColor.appendChild(colorName);

//                     selectedColor.addEventListener('click', () => {
//                         selectedColorsContainer.removeChild(selectedColor);
//                         color.classList.remove('disabled');
//                         if (selectedColorsContainer.children.length === 0) {
//                             cartEmptyMessage.style.display = 'block';
//                             checkoutButton.style.display = 'none';
//                         }
//                         checkoutButton.disabled = selectedColorsContainer.children.length === 0;
//                     });

//                     selectedColorsContainer.appendChild(selectedColor);
//                     cartEmptyMessage.style.display = 'none';
//                     color.classList.add('disabled');
//                     checkoutButton.style.display = 'block';
//                     checkoutButton.disabled = selectedColorsContainer.children.length === 0;
//                 }
//             } else {
//                 alert('You can select a maximum of 3 colors.');
//             }
//         });
//     });

//     checkoutButton.addEventListener('click', () => {
//         const selectedColors = [];
//         selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
//             selectedColors.push(color.style.backgroundColor);
//         });
//         localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
//         window.location.href = 'checkout.html';
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");
  const selectedColorsContainer = document.querySelector(".selected-colors");
  const cartEmptyMessage = document.querySelector(".cart-empty");
  const checkoutButton = document.querySelector(".checkout-button");

  colors.forEach((color) => {
    color.addEventListener("click", () => {
      if (selectedColorsContainer.children.length <= 3) {
        if (!color.classList.contains("disabled")) {
          const selectedColor = document.createElement("div");
          selectedColor.classList.add("selected-color");
          selectedColor.style.backgroundColor = color.style.backgroundColor;

          const colorName = document.createElement("span");
          colorName.textContent = color.dataset.colorName;
          selectedColor.appendChild(colorName);

          selectedColor.addEventListener("click", () => {
            selectedColorsContainer.removeChild(selectedColor);
            color.classList.remove("disabled");
            if (selectedColorsContainer.children.length === 0) {
              cartEmptyMessage.style.display = "block";
              checkoutButton.style.display = "none";
            }
            checkoutButton.disabled =
              selectedColorsContainer.children.length === 0;
          });

          selectedColorsContainer.appendChild(selectedColor);
          cartEmptyMessage.style.display = "none";
          color.classList.add("disabled");
          checkoutButton.style.display = "block";
          checkoutButton.disabled =
            selectedColorsContainer.children.length === 0;
        }
      } else {
        alert("You can select a maximum of 3 colors.");
      }
    });
  });

  checkoutButton.addEventListener("click", () => {
    const selectedColors = [];
    selectedColorsContainer
      .querySelectorAll(".selected-color")
      .forEach((color) => {
        selectedColors.push(color.style.backgroundColor);
      });
    localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
    window.location.href = "checkout.html";
  });
});
