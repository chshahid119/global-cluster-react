import React from 'react';
import ProductTicket from '../ProductTicket';

function ProductTickets() {
  return (
    <section className="flex gap-8">
      <ProductTicket purpose="Total Tickets" numbers={512} />
      <ProductTicket purpose="Total Tickets" numbers={512} />
      <ProductTicket purpose="Total Tickets" numbers={512} />
      <ProductTicket purpose="Total Tickets" numbers={512} />
    </section>
  );
}

export default ProductTickets;
