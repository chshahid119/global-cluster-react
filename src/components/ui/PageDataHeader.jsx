import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import BreadCrumbs from '../BreadCrumbs';

//  name = 'Products';
//  to = 'products';
//  btnContent = 'Add New Product';
function PageDataHeader({ name, to, btnText }) {
  return (
    <section className=" flex justify-between items-center ">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{name}</h1>
        <BreadCrumbs to="Products" />
      </div>
      <div>
        <Button btnText={btnText} />
      </div>
    </section>
  );
}

PageDataHeader.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  btnText: PropTypes.string,
};

export default PageDataHeader;
