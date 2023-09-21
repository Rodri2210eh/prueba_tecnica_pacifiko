/* Task 3: Discount Calculation
Write a function or algorithm to calculate the total price of items in a shopping cart after applying
discounts. Each product in the cart has a 'price' and a 'discount_percentage' field. */

// List of cart items with 'price' and 'discount_percentage'
const cart = [
    { product_id: 1, price: 10.99, discount_percentage: 10 }, // 10% discount
    { product_id: 2, price: 15.99, discount_percentage: 20 }, // 20% discount
    { product_id: 3, price: 19.99, discount_percentage: 0 }, // No discount
  ];
  
  // Function to calculate the total price of items in the cart after discounts
  function calculateDiscountedCartTotal(cartItems) {
    let total = 0;
  
    for (const cartItem of cartItems) {
      const { price, discount_percentage } = cartItem;
  
      // Calculate the discounted price
      const discountedPrice = price * (1 - discount_percentage / 100);
  
      // Add the discounted price to the total
      total += discountedPrice;
    }
  
    return total;
  }
  
  // Testing
  const cartTotalAfterDiscounts = calculateDiscountedCartTotal(cart);
  console.log('Cart Total After Discounts:', cartTotalAfterDiscounts.toFixed(2));  // Display the total with 2 decimal places
  