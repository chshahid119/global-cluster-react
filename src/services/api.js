export const BASE_URL = 'http://127.0.0.1:8000/api';

export async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products/`, {
      method: 'GET', // Specify the request method
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productsData = await response.json();

    return productsData;
  } catch (error) {
    console.error('Error fetching products:', error.message);

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

    return response.json();
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
};

export async function fetchSupportTickets() {
  try {
    const response = await fetch(`${BASE_URL}/support-tickets/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const supportTicketData = await response.json();

    return supportTicketData;
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return [];
  }
}

export async function addTicket(newTicket) {
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

    return response.json();
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
}

export async function fetchWalletData() {
  try {
    const response = await fetch(`${BASE_URL}/wallets/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const walletData = await response.json();

    return walletData;
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return [];
  }
}

export async function fetchPayoutsData() {
  try {
    const response = await fetch(`${BASE_URL}/payouts/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const payoutData = await response.json();

    return payoutData;
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return [];
  }
}

// http://127.0.0.1:8000/api/profile/
export async function fetchUsersData() {
  try {
    const response = await fetch(`${BASE_URL}/profile/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const usersData = await response.json();
    console.log(usersData);
    return usersData;
  } catch (error) {
    console.error('Error fetching products:', error.message);

    return [];
  }
}

// http://127.0.0.1:8000/api/profile/
async function SendProfileData(data) {
  console.log(data);

  try {
    const response = await fetch(`${BASE_URL}/profile/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error adding product: ${error.message}`);
  }
}
