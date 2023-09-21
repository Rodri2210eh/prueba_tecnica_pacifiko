/* Task 2: Cart Total
Write a function or algorithm to calculate the total price of items in a customer's shopping cart.
The cart is represented as a list of dictionaries, where each dictionary contains 'product_id' and
'quantity' fields. */


// List of cart items
const cart = [
    { product_id: 1, quantity: 2 },
    { product_id: 2, quantity: 1 },
    { product_id: 3, quantity: 3 },
  ];
  
// List of products
  const products = [
    { product_id: 1, product_name: 'Product A', price: 10.99 },
    { product_id: 2, product_name: 'Product B', price: 15.99 },
    { product_id: 3, product_name: 'Product C', price: 19.99 },
  ];
  
  // Function to calculate the total price of items in the cart
  function calculateCartTotal(cartItems, productList) {
    let total = 0;
  
    for (const cartItem of cartItems) {
      const product = productList.find(p => p.product_id === cartItem.product_id);
  
      if (product) {
        total += product.price * cartItem.quantity;
      }
    }
  
    return total;
  }
  
  // Testing
  const cartTotal = calculateCartTotal(cart, products);
  console.log('Cart Total:', cartTotal.toFixed(2)); // Display the total with 2 decimal places
  