export const BASE_URL = 'http://192.168.100.151:8000/api';

// 192.168.100.151:8000/
// http://192.168.100.151:8000/api/support-tickets/
// http://192.168.100.214:8000/api/products/

// api/api.js
export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products/`, {
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
    // console.log(productsData);
    return productsData;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    // Return an empty array or a default value in case of error
    return [];
  }
}

// api/api.js
export const addProduct = async newProduct => {
  const defaultProduct = {
    name: 'Default Name',
    status: 'Pending',
    description: 'No description provided',
    shares: 12,
    traffic: 200,
    phone_no: '',
    link: '',
    ...newProduct,
    photo: null,
  };

  // console.log(defaultProduct);

  try {
    const response = await fetch(`${BASE_URL}/products/`, {
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

export async function fetchSupportTickets() {
  try {
    const response = await fetch(`${BASE_URL}/support-tickets/`, {
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

    const supportTicketData = await response.json();
    // console.log(productsData);
    return supportTicketData;
  } catch (error) {
    console.error('Error fetching products:', error.message);
    // Return an empty array or a default value in case of error
    return [];
  }
}

export async function addTicket(newTicket) {
  // console.log(newTicket);
  // const defaultProduct = {
  //   created_at: '2024-07-08T17:21:05.311571Z',
  //   updated_at: '2024-07-08T17:21:05.311571Z',
  //   subject: 'shahid is my name',
  //   status: 'Open',
  //   priority: 'low',
  //   user: 2,
  // };

  console.log(newTicket);

  try {
    const response = await fetch(`${BASE_URL}/support-tickets/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json(); // Assuming backend returns the created product data
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
}
