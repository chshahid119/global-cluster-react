import React from 'react';
import ProductPageHeader from '../../components/ui/ProductPageHeader';
import BusinessDashboardHeader from '../../components/ui/Header';
import Filter from '../../components/ui/Filter';
import ProductsTicket from '../../components/ui/ProductTickets';
import ProductTable from '../../components/ui/ProductTable';

function Products() {
  return (
    <div className="flex flex-col gap-8">
      <BusinessDashboardHeader />
      <main className="m-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
        <div className="py-20 px-20 flex flex-col gap-10">
          <ProductPageHeader />
          <ProductsTicket />

          <div className="flex flex-col gap-6">
            <Filter />
            <ProductTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Products;
