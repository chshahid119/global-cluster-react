import React from 'react';

import ProductImg from './../../assets/images/productImg.png';

const products = [
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
    status: 'Active',
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
    status: 'Decline',
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
function ProductTable() {
  function DecreaseDescription(description) {
    return description.length > 50
      ? description.slice(0, 30) + '...'
      : description;
  }

  return (
    <table className="rounded-md border text-xl">
      <thead className="">
        <tr className="  bg-gray-100">
          <th className="flex  gap-3">
            <input type="checkbox" />
            <p>Product Name</p>
          </th>

          <th className="text-left">Description</th>
          <th className="text-left">No of Shares</th>
          <th className="text-left">Traffic</th>

          <th className="text-left">Status</th>
          <th className="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(item => (
          <tr key={item.name} className="border-b">
            <td className="flex gap-3 items-center">
              <input type="checkbox" />
              <div className="p-2 bg-orange-200">
                <img
                  className="w-10"
                  src={ProductImg}
                  alt="product images for show off"
                />
              </div>
              <p>{item.name}</p>
            </td>
            <td>{DecreaseDescription(item.description)}</td>
            <td>{item.shares}</td>
            <td>{item.traffic}</td>

            <td>
              <p
                className={`${
                  item.status === 'Active'
                    ? 'bg-green-100 text-green-500'
                    : 'bg-red-100 text-red-500'
                } flex justify-center px-2 rounded-lg w-fit  `}
              >
                {item.status}
              </p>
            </td>
            <td>{item.action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
