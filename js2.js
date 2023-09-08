/*// Get the button element by its id
const cartButton = document.getElementById('cart');

// Add click event listener to the button
cartButton.addEventListener('click', () => {
  // Change button color to red
  cartButton.style.backgroundColor = 'orange';

  // Update button text
  cartButton.textContent = 'Added';
});*/
// Get all buttons with the class "cart"
/*const cartButtons = document.querySelectorAll('.cart');

// Add click event listener to each button
cartButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // Change button color to red
    if(button.style.backgroundColor =='orange'){
        button.style.backgroundColor = '';

    // Update button text
         button.textContent = 'add to cart';
    }
    else{
        button.style.backgroundColor = 'orange';

        // Update button text
        button.textContent = 'Added';

    }
  });
});*/
/*document.addEventListener("DOMContentLoaded", function() {
  const cartButtons = document.querySelectorAll(".cart");
  const cartData = [];

  cartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const itemName = this.getAttribute("data-name");
      const itemPrice = parseInt(this.getAttribute("data-price"));

      // Check if the item is already in cartData
      const existingItemIndex = cartData.findIndex(item => item.name === itemName);

      if (existingItemIndex !== -1) {
        cartData[existingItemIndex].quantity++;
      } else {
        cartData.push({ name: itemName, price: itemPrice, quantity: 1 });
      }

      // Change button color to red
      button.style.backgroundColor = "orange";
      button.textContent="added";
    });
  });

  const cartboxButton = document.querySelector(".cartbox");
  if (cartboxButton) {
    cartboxButton.addEventListener("click", function() {
      localStorage.setItem("cartItems", JSON.stringify(cartData));
      window.location.href = "cart1.html";
    });
  }
});*/
// Add to cart button click event
const addToCartButtons = document.querySelectorAll(".cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        const itemName = this.getAttribute("data-name");
        const itemPrice = parseInt(this.getAttribute("data-price"));
        const itemImage = this.getAttribute("data-image");

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const existingItemIndex = cartItems.findIndex(item => item.name === itemName);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity++;
        } else {
            cartItems.push({
                name: itemName,
                price: itemPrice,
                quantity: 1,
                image: itemImage
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        button.style.backgroundColor = "orange";
        button.textContent="added";
        this.classList.add("added");
    });
});

// Cartbox button click event
const cartboxButton = document.querySelector(".cartbox");
cartboxButton.addEventListener("click", function() {
    window.location.href = "cart1.html";
});




