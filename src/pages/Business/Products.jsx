import React from 'react';
import PageDataHeader from '../../components/ui/PageDataHeader';
import BusinessDashboardHeader from '../../components/ui/Header';
import Filter from '../../components/ui/Filter';
import ProductsTicket from '../../components/ui/ProductTickets';
import TableData from '../../components/ui/TableData';
import Pagination from '../../components/Pagination';

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
  return (
    <div className="flex flex-col gap-8">
      <BusinessDashboardHeader />
      <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
        <div className="py-20 px-20 flex flex-col gap-10">
          <PageDataHeader
            name="Products"
            to="products"
            btnText="Add New Product"
          />
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
