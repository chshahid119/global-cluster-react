import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { IoEyeOutline } from 'react-icons/io5';

import ProductImg from './../../assets/images/productImg.png';

function TableData({ data = [], tableHeadNames = [], type = 'default' }) {
  // Safeguard in DecreaseDescription to handle undefined descriptions
  function DecreaseDescription(description) {
    if (!description) return ''; // Return an empty string or handle undefined case
    return description.length > 50
      ? description.slice(0, 40) + '...'
      : description;
  }

  return (
    <table className="border-t border-r border-l w-full text-xl">
      <thead className="">
        <tr className="bg-[#f9f9fc] rounded-t-3xl">
          {tableHeadNames.map((item, index) => (
            <th
              className={`${index === 0 ? 'flex gap-3' : 'text-left'} p-6`}
              key={index}
            >
              {index === 0 && (
                <input type="checkbox" id="products" name="products" />
              )}
              <p>{item}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {type === 'supportTicket'
          ? data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="flex gap-3 items-center p-6">
                  <input type="checkbox" id="products" name="products" />
                  <p>{item.refId}</p>
                </td>
                <td className="p-6">{item.date}</td>
                <td className="p-6"> {item.lastUpdated}</td>

                <td className="p-6">{DecreaseDescription(item.subject)}</td>
                <td className="p-6">{item.status}</td>
                <td className="p-6 font-semibold">
                  <p
                    className={`px-4 py-1 rounded-xl w-fit  text-center  ${
                      item.priority === 'High' ? 'bg-red-100 text-red-500' : ''
                    }  ${
                      item.priority === 'Medium'
                        ? 'bg-blue-100 text-blue-500'
                        : ''
                    } ${
                      item.priority === 'Low'
                        ? 'bg-green-100 text-green-800'
                        : null
                    }`}
                  >
                    {item.priority}
                  </p>
                </td>
              </tr>
            ))
          : data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="flex gap-3 items-center p-6">
                  <input type="checkbox" id="products" name="products" />
                  <div className="p-2 bg-orange-200">
                    <img
                      className="w-10"
                      src={ProductImg}
                      alt="product images for show off"
                    />
                  </div>
                  <p>{item.name}</p>
                </td>
                <td className="p-6">{DecreaseDescription(item.description)}</td>
                <td className="p-6">{item.shares}</td>
                <td className="p-6"> {item.traffic}</td>

                <td className="p-6">
                  <p
                    className={`${
                      item.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : 'bg-red-100 text-red-500'
                    } flex justify-center px-2 rounded-lg w-fit ${
                      item.status === 'Pending'
                        ? 'bg-blue-100 text-blue-500'
                        : ''
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline style={{ fontSize: '1.5rem' }} />
                  <GrEdit style={{ fontSize: '1.5rem' }} />
                  <RiDeleteBin6Line style={{ fontSize: '1.5rem' }} />
                </td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

TableData.propTypes = {
  data: PropTypes.array.isRequired,
  tableHeadNames: PropTypes.array.isRequired,
  type: PropTypes.string,
};

export default TableData;
