import React,{useState,useContext} from 'react';

import {ProductContext} from "./../../App"

import PageDataHeader from '../../components/ui/PageDataHeader';
import BusinessDashboardHeader from '../../components/ui/Header';
import Filter from '../../components/ui/Filter';
import ProductsTicket from '../../components/ui/ProductTickets';
import TableData from '../../components/ui/TableData';
import Pagination from '../../components/Pagination';
import Button from '../../components/Button';
import AddProduct from '../../components/AddProduct';

const productsData = [
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Pending',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident?',
    shares: 10,
    status: 'Declined',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? Atque, provident?',
    shares: 10,
    status: 'Declined',
    traffic: '1200',
    action: 'Edit',
  },
  {
    name: 'lorem Ipsum',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident? orem ipsum dolor sit, amet consectetur adipisicing elit. Atque, provident',
    shares: 10,
    status: 'Active',
    traffic: '1200',
    action: 'Edit',
  },
];

function Products() {
  
  const {showProduct,setShowProduct}=useContext(ProductContext);
  
    const [product,setProduct]=useState();

  function AddNewProduct(status){
    console.log("Product is added to the List");
  }


  return (
    <div className="flex flex-col gap-8  ">
      <BusinessDashboardHeader />
      <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
        <div className="py-20 px-20 flex flex-col gap-10">
          <div className='flex justify-between items-center'>
            <PageDataHeader
            name="Products"
            to="products"
          />
          <Button onClick={()=>setShowProduct(!showProduct)} btnText='Add New Product' />
          </div>
         <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
           {showProduct && <AddProduct addNewProduct={AddNewProduct} CloseModalWindow={setShowProduct} currentStatus={showProduct}/>}
         </div>
          <ProductsTicket />

          <div className="flex flex-col gap-6 ">
            <Filter />
            <div className="flex flex-col gap-10">
              <TableData
                data={productsData}
                tableHeadNames={[
                  'Product Name',
                  'Description',
                  'No of Shares',
                  'Traffic',
                  'Status',
                  'Action',
                ]}
              />
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;
