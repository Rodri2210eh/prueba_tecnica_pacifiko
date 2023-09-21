/* Task 1: Product Search
Write a function or algorithm to search for a product by name in a list of products. Each product
is represented by a dictionary with 'product_id', 'product_name', and 'price'. */

// List of products for testing
const products = [
    { product_id: 1, product_name: 'Product A', price: 10.99 },
    { product_id: 2, product_name: 'Product B', price: 15.99 },
    { product_id: 3, product_name: 'Product C', price: 119.99 },
    { product_id: 4, product_name: 'Product D', price: 19.909 },
    { product_id: 5, product_name: 'Product F', price: 109.99 },
    { product_id: 6, product_name: 'Product G', price: 190.99 },
    { product_id: 7, product_name: 'Product H', price: 129.99 },
    { product_id: 8, product_name: 'Product I', price: 193.99 },
    { product_id: 9, product_name: 'Product J', price: 192.99 },
    { product_id: 10, product_name: 'Product K', price: 195.99 },
    { product_id: 11, product_name: 'Product L', price: 519.99 },
  ];
  
  // Function to search for a product by name
  function searchProductByNameExact(productList, searchQuery) {

    // Convert the search query to lowercase for case-insensitive search
    const query = searchQuery.toLowerCase();
  
    // Use Array.find to find the first matching product
    const matchingProduct = productList.find(product =>
      product.product_name.toLowerCase() === query
    );
  
    return matchingProduct || null; // Return null if no match is found
  }
  
  // Testing
  const searchResult = searchProductByNameExact(products, 'Product H');
  console.log('Search Result:', searchResult);
  