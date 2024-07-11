<<<<<<< HEAD
// // // // // // main.js

// // // // document.addEventListener('DOMContentLoaded', () => {
// // // //     const colors = document.querySelectorAll('.color');
// // // //     const selectedColorsContainer = document.querySelector('.selected-colors');
// // // //     const cartEmptyMessage = document.querySelector('.cart-empty');
// // // //     const checkoutButton = document.querySelector('.checkout-button');

// // // //     colors.forEach(color => {
// // // //         color.addEventListener('click', () => {
// // // //             if (selectedColorsContainer.children.length <= 3) {
// // // //                 if (!color.classList.contains('disabled')) {
// // // //                     const selectedColor = document.createElement('div');
// // // //                     selectedColor.classList.add('selected-color');
// // // //                     selectedColor.style.backgroundColor = color.style.backgroundColor;
// // // //                     selectedColor.textContent = color.dataset.color;
// // // //                     selectedColor.addEventListener('click', () => {
// // // //                         selectedColorsContainer.removeChild(selectedColor);
// // // //                         color.classList.remove('disabled');
// // // //                         if (selectedColorsContainer.children.length === 0) {
// // // //                             cartEmptyMessage.style.display = 'block';
// // // //                             checkoutButton.style.display = 'none'; // Hide the checkout button when no colors are selected
// // // //                         }
// // // //                         checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // // //                     });
// // // //                     selectedColorsContainer.appendChild(selectedColor);
// // // //                     cartEmptyMessage.style.display = 'none';
// // // //                     color.classList.add('disabled');
// // // //                     checkoutButton.style.display = 'block'; // Show the checkout button when a color is selected
// // // //                     checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // // //                 }
// // // //             } else {
// // // //                 alert('You can select a maximum of 3 colors.');
// // // //             }
// // // //         });
// // // //     });

// // // //     checkoutButton.addEventListener('click', () => {
// // // //         const selectedColors = [];
// // // //         selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
// // // //             selectedColors.push(color.style.backgroundColor);
// // // //         });
// // // //         localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
// // // //         window.location.href = 'checkout.html';
// // // //     });
// // // // });

// // // document.addEventListener('DOMContentLoaded', () => {
// // //     const colors = document.querySelectorAll('.color');
// // //     const selectedColorsContainer = document.querySelector('.selected-colors');
// // //     const cartEmptyMessage = document.querySelector('.cart-empty');
// // //     const checkoutButton = document.querySelector('.checkout-button');

// // //     colors.forEach(color => {
// // //       color.addEventListener('click', () => {
// // //         if (selectedColorsContainer.children.length <= 3) {
// // //           if (!color.classList.contains('disabled')) {
// // //             const selectedColor = document.createElement('div');
// // //             selectedColor.classList.add('selected-color');
// // //             selectedColor.style.backgroundColor = color.style.backgroundColor;
// // //             selectedColor.textContent = color.textContent.trim();
// // //             selectedColor.addEventListener('click', () => {
// // //               selectedColorsContainer.removeChild(selectedColor);
// // //               color.classList.remove('disabled');
// // //               if (selectedColorsContainer.children.length === 0) {
// // //                 cartEmptyMessage.style.display = 'block';
// // //                 checkoutButton.style.display = 'none';
// // //               }
// // //               checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // //             });
// // //             selectedColorsContainer.appendChild(selectedColor);
// // //             cartEmptyMessage.style.display = 'none';
// // //             color.classList.add('disabled');
// // //             checkoutButton.style.display = 'block';
// // //             checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // //           }
// // //         } else {
// // //           alert('You can select a maximum of 3 colors.');
// // //         }
// // //       });
// // //     });

// // //     checkoutButton.addEventListener('click', () => {
// // //       const selectedColors = [];
// // //       selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
// // //         selectedColors.push(color.style.backgroundColor);
// // //       });
// // //       localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
// // //       window.location.href = 'checkout.html';
// // //     });
// // //   });

// // // document.addEventListener('DOMContentLoaded', () => {
// // //     const colors = document.querySelectorAll('.color');
// // //     const selectedColorsContainer = document.querySelector('.selected-colors');
// // //     const cartEmptyMessage = document.querySelector('.cart-empty');
// // //     const checkoutButton = document.querySelector('.checkout-button');

// // //     colors.forEach(color => {
// // //         color.addEventListener('click', () => {
// // //             if (selectedColorsContainer.children.length <= 3) {
// // //                 if (!color.classList.contains('disabled')) {
// // //                     const selectedColor = document.createElement('div');
// // //                     selectedColor.classList.add('selected-color');
// // //                     selectedColor.style.backgroundColor = color.style.backgroundColor;

// // //                     const colorName = document.createElement('span');
// // //                     colorName.textContent = color.dataset.colorName;
// // //                     selectedColor.appendChild(colorName);

// // //                     selectedColor.addEventListener('click', () => {
// // //                         selectedColorsContainer.removeChild(selectedColor);
// // //                         color.classList.remove('disabled');
// // //                         if (selectedColorsContainer.children.length === 0) {
// // //                             cartEmptyMessage.style.display = 'block';
// // //                             checkoutButton.style.display = 'none';
// // //                         }
// // //                         checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // //                     });

// // //                     selectedColorsContainer.appendChild(selectedColor);
// // //                     cartEmptyMessage.style.display = 'none';
// // //                     color.classList.add('disabled');
// // //                     checkoutButton.style.display = 'block';
// // //                     checkoutButton.disabled = selectedColorsContainer.children.length === 0;
// // //                 }
// // //             } else {
// // //                 alert('You can select a maximum of 3 colors.');
// // //             }
// // //         });
// // //     });

// // //     checkoutButton.addEventListener('click', () => {
// // //         const selectedColors = [];
// // //         selectedColorsContainer.querySelectorAll('.selected-color').forEach(color => {
// // //             selectedColors.push(color.style.backgroundColor);
// // //         });
// // //         localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
// // //         window.location.href = 'checkout.html';
// // //     });
// // // });

// // document.addEventListener("DOMContentLoaded", () => {
// //   const colors = document.querySelectorAll(".color");
// //   const selectedColorsContainer = document.querySelector(".selected-colors");
// //   const cartEmptyMessage = document.querySelector(".cart-empty");
// //   const checkoutButton = document.querySelector(".checkout-button");

// //   colors.forEach((color) => {
// //     color.addEventListener("click", () => {
// //       if (selectedColorsContainer.children.length <= 3) {
// //         if (!color.classList.contains("disabled")) {
// //           const selectedColor = document.createElement("div");
// //           selectedColor.classList.add("selected-color");
// //           selectedColor.style.backgroundColor = color.style.backgroundColor;

// //           const colorName = document.createElement("span");
// //           colorName.textContent = color.dataset.colorName;
// //           selectedColor.appendChild(colorName);

// //           selectedColor.addEventListener("click", () => {
// //             selectedColorsContainer.removeChild(selectedColor);
// //             color.classList.remove("disabled");
// //             if (selectedColorsContainer.children.length === 0) {
// //               cartEmptyMessage.style.display = "block";
// //               checkoutButton.style.display = "none";
// //             }
// //             checkoutButton.disabled =
// //               selectedColorsContainer.children.length === 0;
// //           });

// //           selectedColorsContainer.appendChild(selectedColor);
// //           cartEmptyMessage.style.display = "none";
// //           color.classList.add("disabled");
// //           checkoutButton.style.display = "block";
// //           checkoutButton.disabled =
// //             selectedColorsContainer.children.length === 0;
// //         }
// //       } else {
// //         alert("You can select a maximum of 3 colors.");
// //       }
// //     });
// //   });

// //   checkoutButton.addEventListener("click", () => {
// //     const selectedColors = [];
// //     selectedColorsContainer
// //       .querySelectorAll(".selected-color")
// //       .forEach((color) => {
// //         selectedColors.push(color.style.backgroundColor);
// //       });
// //     localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
// //     window.location.href = "checkout.html";
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//     const colors = document.querySelectorAll(".color");
//     const selectedColorsContainer = document.querySelector(".selected-colors");
//     const cartEmptyMessage = document.querySelector(".cart-empty");
//     const checkoutButton = document.querySelector(".checkout-button");

//     colors.forEach((color) => {
//         color.addEventListener("click", function () {
//             if (!color.classList.contains("selected")) {
//                 if (selectedColorsContainer.children.length < 3) {
//                     color.classList.add("selected");
//                     addToCart(color);
//                     updateCartEmptyMessage();
//                     updateCheckoutButton();
//                 } else {
//                     alert("You can select up to 3 colors only.");
//                 }
//             } else {
//                 color.classList.remove("selected");
//                 removeFromCart(color);
//                 updateCartEmptyMessage();
//                 updateCheckoutButton();
=======
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
>>>>>>> 85bc0041193eeb3b0bab7c275d4c7fd6d94db3b0
//             }
//         });
//     });

<<<<<<< HEAD
//     function addToCart(color) {
//         const selectedColorDiv = document.createElement("div");
//         selectedColorDiv.className = "selected-color";
//         selectedColorDiv.dataset.colorName = color.dataset.colorName;
//         selectedColorDiv.style.backgroundColor = color.style.backgroundColor;
//         selectedColorDiv.textContent = color.textContent;
//         selectedColorDiv.addEventListener("click", function () {
//             color.classList.remove("selected");
//             removeFromCart(color);
//             updateCartEmptyMessage();
//             updateCheckoutButton();
//         });
//         selectedColorsContainer.appendChild(selectedColorDiv);
//     }

//     function removeFromCart(color) {
//         const colorName = color.dataset.colorName;
//         const selectedColorDiv = document.querySelector(
//             `.selected-color[data-color-name="${colorName}"]`
//         );
//         selectedColorsContainer.removeChild(selectedColorDiv);
//     }

//     function updateCartEmptyMessage() {
//         if (selectedColorsContainer.children.length === 0) {
//             cartEmptyMessage.style.display = "block";
//         } else {
//             cartEmptyMessage.style.display = "none";
//         }
//     }

//     function updateCheckoutButton() {
//         if (selectedColorsContainer.children.length > 0) {
//             checkoutButton.style.display = "block";
//         } else {
//             checkoutButton.style.display = "none";
//         }
//     }

//     // Custom scrollbar functionality
//     const colorsContainer = document.querySelector(".colors-container");
//     const scrollbar = document.querySelector(".scrollbar");
//     const scrollbarThumb = document.querySelector(".scrollbar-thumb");

//     const updateScrollbar = () => {
//         const containerHeight = colorsContainer.clientHeight;
//         const contentHeight = colorsContainer.scrollHeight;
//         const scrollbarHeight = (containerHeight / contentHeight) * containerHeight;
//         scrollbarThumb.style.height = `${scrollbarHeight}px`;
//     };

//     const onScrollbarThumbDrag = (e) => {
//         e.preventDefault();
//         document.addEventListener("mousemove", onScrollbarThumbMove);
//         document.addEventListener("mouseup", onScrollbarThumbDrop);
//     };

//     const onScrollbarThumbMove = (e) => {
//         const containerHeight = colorsContainer.clientHeight;
//         const contentHeight = colorsContainer.scrollHeight;
//         const scrollRatio = contentHeight / containerHeight;
//         const topPosition = Math.min(containerHeight - scrollbarThumb.clientHeight, Math.max(0, e.clientY - colorsContainer.getBoundingClientRect().top));
//         scrollbarThumb.style.top = `${topPosition}px`;
//         colorsContainer.scrollTop = topPosition * scrollRatio;
//     };

//     const onScrollbarThumbDrop = () => {
//         document.removeEventListener("mousemove", onScrollbarThumbMove);
//         document.removeEventListener("mouseup", onScrollbarThumbDrop);
//     };

//     scrollbarThumb.addEventListener("mousedown", onScrollbarThumbDrag);

//     colorsContainer.addEventListener("scroll", () => {
//         const containerHeight = colorsContainer.clientHeight;
//         const contentHeight = colorsContainer.scrollHeight;
//         const scrollRatio = containerHeight / contentHeight;
//         const scrollbarThumbTop = colorsContainer.scrollTop * scrollRatio;
//         scrollbarThumb.style.top = `${scrollbarThumbTop}px`;
//     });

//     updateScrollbar();
//     window.addEventListener("resize", updateScrollbar);
// });

document.addEventListener("DOMContentLoaded", function () {
=======
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
>>>>>>> 85bc0041193eeb3b0bab7c275d4c7fd6d94db3b0
  const colors = document.querySelectorAll(".color");
  const selectedColorsContainer = document.querySelector(".selected-colors");
  const cartEmptyMessage = document.querySelector(".cart-empty");
  const checkoutButton = document.querySelector(".checkout-button");

  colors.forEach((color) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 85bc0041193eeb3b0bab7c275d4c7fd6d94db3b0
      }
    });
  });

<<<<<<< HEAD
  // function addToCart(color) {
  //     const selectedColorDiv = document.createElement("div");
  //     selectedColorDiv.className = "selected-color";
  //     selectedColorDiv.dataset.colorName = color.dataset.colorName;
  //     selectedColorDiv.style.backgroundColor = color.style.backgroundColor;
  //     selectedColorDiv.textContent = color.textContent;
  //     selectedColorDiv.addEventListener("click", function () {
  //         color.classList.remove("selected");
  //         removeFromCart(color);
  //         updateCartEmptyMessage();
  //         updateCheckoutButton();
  //     });
  //     selectedColorsContainer.appendChild(selectedColorDiv);
  // }

  function addToCart(color) {
    const selectedColorDiv = document.createElement("div");
    selectedColorDiv.className = "selected-color";
    selectedColorDiv.dataset.colorName = color.dataset.colorName;
    selectedColorDiv.style.backgroundColor = color.style.backgroundColor;
    selectedColorDiv.textContent = color.textContent;
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
    selectedColorsContainer.removeChild(selectedColorDiv);
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
    } else {
      checkoutButton.style.display = "none";
    }
  }

  // Custom scrollbar functionality
  const colorsContainer = document.querySelector(".colors-container");
  const scrollbar = document.querySelector(".scrollbar");
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");

  const updateScrollbar = () => {
    const containerHeight = colorsContainer.clientHeight;
    const contentHeight = colorsContainer.scrollHeight;
    const scrollbarHeight = (containerHeight / contentHeight) * containerHeight;
    scrollbarThumb.style.height = `${scrollbarHeight}px`;
  };

  const onScrollbarThumbDrag = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", onScrollbarThumbMove);
    document.addEventListener("mouseup", onScrollbarThumbDrop);
  };

  // const onScrollbarThumbMove = (e) => {
  //   const containerHeight = colorsContainer.clientHeight;
  //   const contentHeight = colorsContainer.scrollHeight;
  //   const scrollRatio = contentHeight / containerHeight;
  //   const topPosition = Math.min(
  //     containerHeight - scrollbarThumb.clientHeight,
  //     Math.max(0, e.clientY - colorsContainer.getBoundingClientRect().top)
  //   );
  //   scrollbarThumb.style.top = `${topPosition}px`;
  //   colorsContainer.scrollTop = topPosition * scrollRatio;
  // };

  // const onScrollbarThumbDrop = () => {
  //   document.removeEventListener("mousemove", onScrollbarThumbMove);
  //   document.removeEventListener("mouseup", onScrollbarThumbDrop);
  // };

  // scrollbarThumb.addEventListener("mousedown", onScrollbarThumbDrag);

  // colorsContainer.addEventListener("scroll", () => {
  //   const containerHeight = colorsContainer.clientHeight;
  //   const contentHeight = colorsContainer.scrollHeight;
  //   const scrollRatio = containerHeight / contentHeight;
  //   const scrollbarThumbTop = colorsContainer.scrollTop * scrollRatio;
  //   scrollbarThumb.style.top = `${scrollbarThumbTop}px`;
  // });

  updateScrollbar();
  window.addEventListener("resize", updateScrollbar);
=======
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
>>>>>>> 85bc0041193eeb3b0bab7c275d4c7fd6d94db3b0
});
