// api/api.js
export async function fetchProducts() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/products/', {
      method: 'GET', // Specify the request method
      headers: {
        'Content-Type': 'application/json',
        // Include other headers if required, like authorization tokens
      },
      // Uncomment if needed
      // mode: 'cors', // Ensure CORS is handled correctly
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productsData = await response.json();
    console.log(productsData);
    return productsData;

  } catch (error) {
    console.error('Error fetching products:', error.message);
    // Return an empty array or a default value in case of error
    return [];
  }
}
