import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ModalContext } from './../../App';

import ActionNotification from '../../components/ActionNotification';
import AddProduct from '../../components/AddProduct';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Pagination from '../../components/Pagination';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import ProductsTicket from '../../components/ui/ProductTickets';
import TableData from '../../components/ui/TableData';

import { addProduct, fetchProducts } from '../../services/api';

const initialProductsData = [
  // Your initial products data
];

function Products() {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [showAction, setShowAction] = useState(false);

  const fetchedProductsData = useLoaderData();
  const [productsData, setProductsData] = useState(
    fetchedProductsData.length ? fetchedProductsData : initialProductsData,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  async function addNewProduct(newProduct) {
    try {
      const addedProduct = await addProduct(newProduct);
      setProductsData([...productsData, addedProduct]);
      setShowModal(false);
      showTemporaryNotification();
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  }

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

      const updatedProducts = await fetchProducts();
      setProductsData(updatedProducts);
    } catch (error) {
      console.error('Failed to delete product:', error.message);
    }
  }

  async function handleShowProductDetails(productId) {
    // console.log(productId)

    const apiUrl = `http://127.0.0.1:8000/api/products/${productId}/`;
    console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const productData = await response.json();

      return productData;
    } catch (error) {
      console.error('Failed to fetch that product:', error.message);
    }
  }

  function showTemporaryNotification() {
    setShowAction(true);
    setTimeout(() => {
      setShowAction(false);
    }, 2000);
  }

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = productsData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-8 bg-gray-50">
      <BusinessDashboardHeader />
      <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <div className="py-20 px-20 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <PageDataHeader name="Products" to="products" />
            <Button
              onClick={() => setShowModal(!showModal)}
              btnText="Add New Product"
            />
          </div>

          {showModal && (
            <Modal>
              <AddProduct
                addNewProduct={addNewProduct}
                CloseModalWindow={setShowModal}
                currentStatus={showModal}
              />
            </Modal>
          )}

          {showAction && (
            <Modal>
              <ActionNotification message="Product Added Successfully" />
            </Modal>
          )}

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
                onDelete={index =>
                  handleDelete(productsData[startIndex + index].id)
                }
                handleShowProductDetails={handleShowProductDetails}
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
