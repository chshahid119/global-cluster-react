import React, { useState, useContext } from 'react';

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
  const [productsData, setProductsData] = useState(initialProductsData);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // Number of items per page

  function addNewProduct(newProduct) {
    // Logic to add new product to productsData array
    const updatedProduct={
      ...newProduct,
      shares: 10,
      status: 'Active',
      traffic: 3000,
      action: 'Delete'
    }
    setProductsData([...productsData, updatedProduct]);
    setShowModal(false); // Close modal after adding new product
  }

   const onDelete = (index) => {
    const updatedProducts = [...productsData];
    updatedProducts.splice(index, 1); // Remove the item at index
    setProductsData(updatedProducts);
  };


  // Calculate total pages based on productsData length and items per page
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Function to handle page change￼

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index for slicing productsData array based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice productsData to show only items for the current page
  const currentProducts = productsData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-8">
      <BusinessDashboardHeader />
      <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
        <div className="py-20 px-20 flex flex-col gap-10">
          <div className='flex justify-between items-center'>
            <PageDataHeader
              name="Products"
              to="products"
            />
            <Button onClick={() => setShowModal(!showModal)} btnText='Add New Product' />
          </div>

          {showModal && (
            <Modal> <AddProduct addNewProduct={addNewProduct} CloseModalWindow={setShowModal} currentStatus={showModal} /></Modal>
          )}

          <ProductsTicket />

          <div className="flex flex-col gap-6 ">
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
        onDelete={onDelete} // Pass onDelete function
      />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;


  



  