import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdIosShare } from 'react-icons/md';
import productImg from './../assets/images/productImg.png';
import ShareLinksScreen from './ShareLinksScreen';

const PromoteAndEarnRowTable = ({ products }) => {
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="container mx-auto px-10 py-7">
      <table className="w-full text-gray-500">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-6 font-normal">Product</th>
            <th className="pb-6 font-normal">Company Name</th>
            <th className="pb-6 font-normal">Description</th>
            <th className="pb-6 font-normal">Date</th>
            <th className="pb-6 font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="py-6">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded mr-4">
                    <img
                      src={productImg}
                      alt="Product"
                      className="w-12 h-12 bg-orange-2000"
                    />
                  </div>
                  <span>{product.name}</span>
                </div>
              </td>
              <td className="py-6">{product.company}</td>
              <td className="py-6">{product.description}</td>
              <td className="py-6">{product.date}</td>
              <td className="py-6">
                <div className="flex items-center gap-4 cursor-pointer">
                  <span className="mr-3">Share</span>
                  <MdIosShare className="text-5xl" />
                  {/* <FaExternalLinkAlt /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showShare && <ShareLinksScreen setShowShare={setShowShare} />}
    </div>
  );
};

PromoteAndEarnRowTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PromoteAndEarnRowTable;
