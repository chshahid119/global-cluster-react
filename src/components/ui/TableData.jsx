import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { IoEyeOutline } from 'react-icons/io5';

import ProductImg from './../../assets/images/productImg.png';
import ConfirmDeletion from '../ConfirmDeletion';
import Modal from "../Modal";
import ShowProductDetail from '../ShowProductDetail';

function TableData({ data = [], tableHeadNames = [], type = 'default', onDelete, handleShowProductDetails }) {
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [deleteIndex, setDeleteIndex] = useState(null);

  function DecreaseDescription(description) {
    if (!description) return '';
    return description.length > 50 ? description.slice(0, 40) + '...' : description;
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
    console.log("Delete is cancelled");
    setConfirmDeletion(false);
    setDeleteIndex(null);
  }

  async function handleShowProducts(item) {
    const data = await handleShowProductDetails(item.id);
    setProductDetail(data);
    setShowProductDetail(true);
  }

  return (
    <div className="overflow-hidden rounded-t-xl rounded-l-xl rounded-r-xl border-t border-l border-r"> {/* Wrapper div for overflow handling */}
      <table className="w-full text-xl">
        <thead className="rounded-t-xl">
          <tr className="bg-[#f9f9fc] rounded-t-xl">
            {tableHeadNames.map((item, index) => (
              <th className={`${index === 0 ? 'flex gap-3' : 'text-left'} p-6`} key={index}>
                {index === 0 && <input type="checkbox" id="products" name="products" />}
                <p>{item}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {type === 'supportTicket'
            ? data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="flex gap-3 items-center p-6">
                    <input type="checkbox" id="products" name="products" />
                    <p>{item.refId}</p>
                  </td>
                  <td className="p-6">{item.date}</td>
                  <td className="p-6">{item.lastUpdated}</td>
                  <td className="p-6">{DecreaseDescription(item.subject)}</td>
                  <td className="p-6">{item.status}</td>
                  <td className="p-6 font-semibold">
                    <p className={`px-4 py-1 rounded-xl w-fit text-center ${
                      item.priority === 'High' ? 'bg-red-100 text-red-500' : ''
                    } ${
                      item.priority === 'Medium' ? 'bg-blue-100 text-blue-500' : ''
                    } ${
                      item.priority === 'Low' ? 'bg-green-100 text-green-800' : null
                    }`}>
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
                      <img className="w-10" src={ProductImg} alt="product images for show off" />
                    </div>
                    <p>{item.name}</p>
                  </td>
                  <td className="p-6">{DecreaseDescription(item.description)}</td>
                  <td className="p-6">{item.shares}</td>
                  <td className="p-6">{item.traffic}</td>
                  <td className="p-6">
                    <p className={`${
                      item.status === 'Active' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'
                    } flex justify-center px-2 rounded-lg w-fit ${
                      item.status === 'Pending' ? 'bg-blue-100 text-blue-500' : ''
                    }`}>
                      {item.status}
                    </p>
                  </td>
                  <td className="flex gap-4">
                    <IoEyeOutline style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => handleShowProducts(item)} />
                    <GrEdit style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                    <RiDeleteBin6Line style={{ fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => handleDelete(index)} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {confirmDeletion && (
        <Modal>
          <ConfirmDeletion
            notificationMsg='Are you sure? You want to Delete'
            setConfirmDeletion={setConfirmDeletion}
            handleConfirmDelete={handleConfirmDelete}
            deleteIndex={deleteIndex}
            handleCancelDelete={handleCancelDelete}
          />
        </Modal>
      )}

      {showProductDetail && (
        <Modal>
          <ShowProductDetail productDetail={productDetail} setShowProductDetail={setShowProductDetail} />
        </Modal>
      )}
    </div>
  );
}

TableData.propTypes = {
  data: PropTypes.array.isRequired,
  tableHeadNames: PropTypes.array.isRequired,
  type: PropTypes.string,
  onDelete: PropTypes.func,
  handleShowProductDetails: PropTypes.func,
};

export default TableData;
