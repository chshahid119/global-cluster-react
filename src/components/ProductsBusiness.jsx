import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
import BusinessProductImg from './../assets/images/productImg.png';

// Define table headers
const headers = [
  'ProductName',
  'Description',
  'No of Shares',
  'Traffic',
  'Priority',
  'Action',
];

// Define table data
const BusinessProductsData = [
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consecturote adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    noShares: '423',
    traffic: '1200',
    status: 'active',
    action: <IoEyeOutline />,
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consecturote adipiscing elit.',
    noShares: '423',
    traffic: '1200',
    status: 'active',
    action: <IoEyeOutline />,
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consecturote.',
    noShares: '423',
    traffic: '1200',
    status: 'decline',
    action: <IoEyeOutline />,
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consecturote adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    noShares: '423',
    traffic: '1200',
    status: 'active',
    action: <IoEyeOutline />,
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consecturote adipiscing elit.',
    noShares: '423',
    traffic: '1200',
    status: 'decline',
    action: <IoEyeOutline />,
  },
];

// Helper function to truncate text to the first 10 words
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

function ProductsBusiness() {
  // State to manage the selected checkboxes
  const [selectedRows, setSelectedRows] = useState(new Set());

  // Handler for header checkbox change
  const handleHeaderCheckboxChange = e => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const allRowIndexes = new Set(
        BusinessProductsData.map((_, index) => index),
      );
      setSelectedRows(allRowIndexes);
    } else {
      setSelectedRows(new Set());
    }
  };

  // Handler for individual row checkbox change
  const handleRowCheckboxChange = index => {
    const updatedSelectedRows = new Set(selectedRows);
    if (updatedSelectedRows.has(index)) {
      updatedSelectedRows.delete(index);
    } else {
      updatedSelectedRows.add(index);
    }
    setSelectedRows(updatedSelectedRows);
  };

  // Determine if all rows are selected
  const isAllSelected = selectedRows.size === BusinessProductsData.length;
  // Determine if some rows are selected
  const isIndeterminate =
    selectedRows.size > 0 && selectedRows.size < BusinessProductsData.length;

  return (
    <div className="px-6 py-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-xl bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <div className="flex gap-2 items-center text-gray-500 border px-3 py-2 rounded-md cursor-pointer">
          <p className="text-xl font-semibold">October</p>
          <BiChevronDown style={{ fontSize: '1.5rem' }} />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          {/* Table Head */}
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleHeaderCheckboxChange}
                  ref={input => {
                    if (input) input.indeterminate = isIndeterminate;
                  }}
                />
              </th>
              {headers.map(header => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-lg font-medium uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {BusinessProductsData.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(index)}
                    onChange={() => handleRowCheckboxChange(index)}
                  />
                </td>
                <td className="px-6 py-4 flex items-center">
                  <div className="bg-orange-100 p-2 rounded-md mr-3">
                    <img
                      className="w-8"
                      src={BusinessProductImg}
                      alt="product of business page"
                    />
                  </div>
                  <span>{product.name}</span>
                </td>
                <td className="px-6 py-4">
                  {truncateText(product.description, 10)}
                </td>
                <td className="px-6 py-4">{product.noShares}</td>
                <td className="px-6 py-4">{product.traffic}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 ${
                      product.status === 'decline'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800'
                    } rounded text-lg font-semibold`}
                  >
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-start">
                  <button className="text-gray-500 hover:text-gray-700">
                    <IoEyeOutline className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsBusiness;
