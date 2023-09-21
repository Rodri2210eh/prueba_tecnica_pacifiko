/* Task 4: Top Selling Products
Write a function or algorithm to find the top N best-selling products based on the quantity sold.
Given a list of orders (each order containing 'product_id' and 'quantity'), return the list of top N
products. */

// List of orders with 'product_id' and 'quantity'
const orders = [
    { product_id: 1, quantity: 10 },
    { product_id: 2, quantity: 5 },
    { product_id: 3, quantity: 15 },
    { product_id: 4, quantity: 8 },
    { product_id: 5, quantity: 12 },
    { product_id: 6, quantity: 16 },
    { product_id: 7, quantity: 156},
    { product_id: 8, quantity: 1 },
    { product_id: 9, quantity: 30 },
    { product_id: 10, quantity: 22 },
    { product_id: 11, quantity: 120 },
    { product_id: 12, quantity: 2 },
  ];
  
  // Function to find the top N best-selling products
  function findTopSellingProducts(orderList, rank) {
    const productQuantities = new Map(); // Map to store product quantities
  
    // Calculate total quantity sold for each product
    for (const order of orderList) {
      const { product_id, quantity } = order;
  
      if (productQuantities.has(product_id)) {
        // If the product exists in the map, update its quantity
        productQuantities.set(product_id, productQuantities.get(product_id) + quantity);
      } else {
        // If the product is not in the map, add it with the quantity
        productQuantities.set(product_id, quantity);
      }
    }
  
    // Sort products by quantity sold in descending order
    const sortedProducts = [...productQuantities.entries()].sort((a, b) => b[1] - a[1]);
  
    // Select the top N products
    const topProducts = sortedProducts.slice(0, rank);
  
    return topProducts;
  }
  
  // Testing
  const topSellingProducts = findTopSellingProducts(orders, 10);
  console.log('Top Selling Products:', topSellingProducts);
  