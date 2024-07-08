import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import { IoEyeOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

import ConfirmDeletion from '../ConfirmDeletion';
import Modal from '../Modal';
import ShowDetailComp from '../ShowDetailComp';
import ProductImg from './../../assets/images/productImg.png';

function TableData({
  data = [],
  tableHeadNames = [],
  type = 'default',
  onDelete,
  handleShowProductDetails,
}) {
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [deleteIndex, setDeleteIndex] = useState(null);

  function DecreaseDescription(description) {
    if (!description) return '';
    return description.length > 50
      ? `${description.slice(0, 40)}...`
      : description;
  }

  function handleDelete(index) {
    setDeleteIndex(index);
    setConfirmDeletion(true);
  }

  function handleConfirmDelete() {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      setConfirmDeletion(false);
      setDeleteIndex(null);
    }
  }

  function handleCancelDelete() {
    console.log('Delete is cancelled');
    setConfirmDeletion(false);
    setDeleteIndex(null);
  }

  async function handleShowProducts(item) {
    const data = await handleShowProductDetails(item.id);
    setProductDetail(data);
    setShowProductDetail(true);
  }

  const convertStandardDate = strDate => {
    if (!strDate) return '';
    const date = new Date(strDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="overflow-hidden rounded-t-xl rounded-l-xl rounded-r-xl border-t border-l border-r">
      <table className="w-full text-xl">
        <thead className="rounded-t-xl bg-[#f9f9fc]">
          <tr>
            {tableHeadNames.map((item, index) => (
              <th
                key={index}
                className={`p-6 ${index === 0 ? 'flex gap-3' : 'text-left'}`}
              >
                {index === 0 && (
                  <input type="checkbox" id="products" name="products" />
                )}
                <p>{item}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {type === 'payout' &&
            data.map((item, index) => (
              <tr key={index} className="border-t my-2">
                <td className="p-6 flex gap-3 items-center">
                  <input type="checkbox" id="products" name="products" />
                  <p>{item.refId}</p>
                </td>
                <td className="p-6">{item.date}</td>
                <td className="p-6">{item.amount}</td>
                <td className="p-6">{item.paymentMethod}</td>

                <td className="p-6">
                  <p
                    className={`px-4 py-1 rounded-xl w-fit text-center ${
                      item.status === 'Paid'
                        ? 'bg-green-100 text-green-500'
                        : null
                    } ${
                      item.status === 'Declined'
                        ? 'bg-red-100 text-red-500'
                        : null
                    }  ${
                      item.status === 'Pending'
                        ? 'bg-orange-100 text-orange-500'
                        : null
                    } `}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(item)}
                  />
                </td>
              </tr>
            ))}
          {type === 'wallet' &&
            data.map((item, index) => (
              <tr key={index} className="border-t my-2">
                <td className="p-6 flex gap-3 items-center">
                  <input type="checkbox" id="products" name="products" />
                  <p>{item.refId}</p>
                </td>
                <td className="p-6">{item.date}</td>
                <td className="p-6">{DecreaseDescription(item.description)}</td>
                <td className="p-6">{item.amount}</td>

                <td className="p-6">
                  <p
                    className={`px-4 py-1 rounded-xl w-fit text-center ${
                      item.status === 'Successfull'
                        ? 'bg-green-100 text-green-500'
                        : null
                    } ${
                      item.status === 'Declined'
                        ? 'bg-red-100 text-red-500'
                        : null
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(item)}
                  />
                </td>
              </tr>
            ))}
          {type === 'supportTicket' &&
            data.map((item, index) => (
              <tr key={index} className="border-t my-2">
                <td className="p-6 flex gap-3 items-center">
                  <input type="checkbox" id="products" name="products" />
                  <p>{item.id}</p>
                </td>
                <td className="p-6">{convertStandardDate(item.created_at)}</td>
                <td className="p-6">{convertStandardDate(item.updated_at)}</td>
                <td className="p-6">{item.subject}</td>
                <td className="p-6">{item.status}</td>

                <td className="p-6">
                  <p
                    className={`px-4 py-1 rounded-xl w-fit text-center ${
                      item.priority === 'High' || item.priority === 'high'
                        ? 'bg-red-100 text-red-500'
                        : item.priority === 'Medium' ||
                          item.priority === 'medium'
                        ? 'bg-blue-100 text-blue-500'
                        : item.priority === 'low' || item.priority === 'Low'
                        ? 'bg-green-100 text-green-800'
                        : ''
                    }`}
                  >
                    {item.priority}
                  </p>
                </td>
              </tr>
            ))}

          {type === 'dashboard' &&
            data.map((item, index) => (
              <tr key={index} className="border-t my-2">
                <td className="p-6 flex gap-3 items-center">
                  <input type="checkbox" id="products" name="products" />
                  <div className="p-2 bg-orange-200">
                    <img
                      src={ProductImg}
                      alt="product images for show off"
                      className="w-10"
                    />
                  </div>
                  <p>{item.name}</p>
                </td>
                <td className="p-6">{DecreaseDescription(item.description)}</td>
                <td className="p-6">{item.shares}</td>
                <td className="p-6">{item.traffic}</td>
                <td className="p-6">
                  <p
                    className={`px-4 py-1 rounded-lg w-fit text-center ${
                      item.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : item.status === 'Pending'
                        ? 'bg-blue-100 text-blue-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline
                    style={{ fontSize: '1.7rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(item)}
                  />
                </td>
              </tr>
            ))}

          {type === 'default' &&
            data.map((item, index) => (
              <tr key={index} className="border-t my-2">
                <td className="p-6 flex gap-3 items-center">
                  <input type="checkbox" id="products" name="products" />
                  <div className="p-2 bg-orange-200">
                    <img
                      src={ProductImg}
                      alt="product images for show off"
                      className="w-10"
                    />
                  </div>
                  <p>{item.name}</p>
                </td>
                <td className="p-6">{DecreaseDescription(item.description)}</td>
                <td className="p-6">{item.shares}</td>
                <td className="p-6">{item.traffic}</td>
                <td className="p-6">
                  <p
                    className={`px-4 py-1 rounded-lg w-fit text-center ${
                      item.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : item.status === 'Pending'
                        ? 'bg-blue-100 text-blue-500'
                        : 'bg-red-100 text-red-500'
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(item)}
                  />
                  <GrEdit
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(item)}
                  />
                  <RiDeleteBin6Line
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {confirmDeletion && (
        <Modal>
          <ConfirmDeletion
            notificationMsg="Are you sure you want to delete?"
            setConfirmDeletion={setConfirmDeletion}
            handleConfirmDelete={handleConfirmDelete}
            deleteIndex={deleteIndex}
            handleCancelDelete={handleCancelDelete}
          />
        </Modal>
      )}
      {showProductDetail && (
        <Modal>
          <ShowDetailComp
            detail={productDetail}
            setShowDetail={setShowProductDetail}
          />
        </Modal>
      )}
    </div>
  );
}

TableData.propTypes = {
  data: PropTypes.array,
  tableHeadNames: PropTypes.array,
  type: PropTypes.string,
  onDelete: PropTypes.func,
  handleShowProductDetails: PropTypes.func,
};

export default TableData;
