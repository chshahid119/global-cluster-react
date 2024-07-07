import PropTypes from 'prop-types';
import React from 'react';
import BreadCrumbs from '../BreadCrumbs';

//  name = 'Products';
//  to = 'products';
//  btnContent = 'Add New Product';
function PageDataHeader({ name, to }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{name}</h1>
      {to && <BreadCrumbs to="Products" />}
    </div>
  );
}

PageDataHeader.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
};

export default PageDataHeader;
