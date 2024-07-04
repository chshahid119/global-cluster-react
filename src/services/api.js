const BASE_URL = 'http://127.0.0.1:8000/api/products/';


// api/api.js
export async function fetchProducts() {
  try {
    const response = await fetch(BASE_URL, {
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




// api/api.js
export const addProduct = async (newProduct) => {
  // Define default values for missing fields
  const defaultProduct = {
    name: 'Default Name',
    photo: 'default.jpg',
    status: 'Pending',
    description: 'No description provided',
    shares: 0,
    traffic: 0,
    phoneNumber: '',
    link: '',
    ...newProduct, // Merge newProduct with defaultProduct, newProduct fields will override defaults
  };

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultProduct),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return response.json(); // Assuming backend returns the created product data
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};




