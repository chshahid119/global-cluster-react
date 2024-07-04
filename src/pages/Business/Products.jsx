  import React, { useState, useContext } from 'react';
  import { useLoaderData } from 'react-router-dom';
  import { ModalContext } from "./../../App"

  import PageDataHeader from '../../components/ui/PageDataHeader';
  import BusinessDashboardHeader from '../../components/ui/Header';
  import Filter from '../../components/ui/Filter';
  import ProductsTicket from '../../components/ui/ProductTickets';
  import TableData from '../../components/ui/TableData';
  import Pagination from '../../components/Pagination';
  import Button from '../../components/Button';
  import AddProduct from '../../components/AddProduct';
  import Modal from '../../components/Modal';
  import ActionNotification from '../../components/ActionNotification';

  import { fetchProducts, addProduct } from '../../services/api'; // Assuming you have an API service for fetching and adding products

  const initialProductsData = [
    {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Pending',
      traffic: '1200',
      action: 'Edit',
    },
    {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
    {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Declined',
      traffic: '1200',
      action: 'Edit',
    },
    {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
    {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Declined',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'ActiveModal',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
      
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
      {
      name: 'lorem Ipsum',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
      shares: 10,
      status: 'Active',
      traffic: '1200',
      action: 'Edit',
    },
  ];

  function Products() {
    const { showModal, setShowModal } = useContext(ModalContext);
    const [showAction, setShowAction] = useState(false);
    const fetchedProductsData = useLoaderData();
    const [productsData, setProductsData] = useState(fetchedProductsData.length ? fetchedProductsData : initialProductsData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Products.js


// Function to add new product
async function addNewProduct(newProduct) {
  try {
    const addedProduct = await addProduct(newProduct); // Call addProduct API function
    setProductsData([...productsData, addedProduct]); // Update productsData state with new product
    setShowModal(false); // Close modal after adding new product
    showTemporaryNotification(); // Show notification
  } catch (error) {
    console.error('Error adding product:', error.message);
  }
}

    // Function to handle deletion of a product
    async function handleDelete(productId) {
      const deleteApiUrl = `http://127.0.0.1:8000/api/products/${productId}`;

      try {
        const response = await fetch(deleteApiUrl, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Fetch updated product list after deletion
        const updatedProducts = await fetchProducts(); // Assuming this function fetches all products from backend
        setProductsData(updatedProducts);

        showTemporaryNotification(); // Show notification
      } catch (error) {
        console.error('Failed to delete product:', error.message);
      }
    }

    // Function to show temporary notification
    function showTemporaryNotification() {
      setShowAction(true);
      setTimeout(() => {
        setShowAction(false);
      }, 2000); // Hide after 2 seconds
    }

    // Function to handle page change
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    // Calculate start and end index for slicing productsData array based on current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice productsData to show only items for the current page
    const currentProducts = productsData.slice(startIndex, endIndex);

    return (
      <div className="flex flex-col gap-8 bg-gray-50">
        <BusinessDashboardHeader />
        <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
          <div className="py-20 px-20 flex flex-col gap-10">
            <div className='flex justify-between items-center'>
              <PageDataHeader
                name="Products"
                to="products"
              />
              <Button onClick={() => setShowModal(!showModal)} btnText='Add New Product' />
            </div>

            {showModal && (
              <Modal><AddProduct addNewProduct={addNewProduct} CloseModalWindow={setShowModal} currentStatus={showModal} /></Modal>
            )}

            {showAction && <Modal><ActionNotification message="Product Deleted Successfully" /></Modal>}

            <ProductsTicket />

            <div className="flex flex-col gap-6">
              <Filter />
              <div className="flex flex-col gap-10">
                <TableData
                  data={currentProducts}
                  tableHeadNames={[
                    'Product Name',
                    'Description',
                    'No of Shares',
                    'Traffic',
                    'Status',
                    'Action',
                  ]}
                  onDelete={(index) => handleDelete(currentProducts[index].id)}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(productsData.length / itemsPerPage)}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  export async function loader() {
    const productsData = await fetchProducts(); // Assuming this function fetches all products from backend
    return productsData;
  }

  export default Products;
