import React from 'react';

import Button from '../Button';
import BreadCrumbs from '../BreadCrumbs';

function ProductPageHeader() {
  return (
    <section className=" flex justify-between items-center ">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Products</h1>
        <BreadCrumbs />
      </div>
      <div>
        <Button />
      </div>
    </section>
  );
}

export default ProductPageHeader;
