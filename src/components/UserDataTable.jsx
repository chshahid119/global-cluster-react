import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import UserImg from './../assets/images/userProfile.png';

import Modal from './Modal';
import ShowDetailComp from './ShowDetailComp';

function UserDataTable({ data = [], tableHeadNames, type = 'default' }) {
  console.log(data);
  const [showDetail, setShowDetail] = useState(false);
  const [userData, setUserData] = useState();

  async function handleShowProducts(user) {
    console.log(user);
    // const userData = await getProfile(user.id);
    // console.log(userData);
    setUserData(user);
    setShowDetail(!showDetail);
  }

  return (
    <div className="overflow-hidden rounded-t-xl rounded-l-xl rounded-r-xl border-t border-l border-r">
      {' '}
      {/* Wrapper div for overflow handling */}
      <table className="w-full text-xl">
        <thead className="rounded-t-xl">
          <tr className="bg-[#f9f9fc] rounded-t-xl">
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
        <tbody className="bg-white">
          {type === 'downlineUser' &&
            data.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="flex gap-3 items-center p-6">
                  <img
                    src={UserImg}
                    className="p-4 w-[5rem]"
                    alt="userImg for Downline members table"
                  />

                  <div className="flex flex-col gap-2">
                    <p>{user.member}</p>
                    <p>{user.name}</p>
                  </div>
                </td>
                <td className="p-6">{user.userName}</td>
                <td className="p-6">{user.placement}</td>
                <td className="p-6">{user.referee}</td>
                <td className="p-6">{user.level}</td>
              </tr>
            ))}
          {type === 'default' &&
            data.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="flex gap-3 items-center p-6">
                  <input type="checkbox" id="products" name="products" />
                  <div className="p-2 bg-orange-200">
                    <img
                      className="w-10"
                      src={UserImg}
                      alt="product images for show off"
                    />
                  </div>
                  <p>{user.user}</p>
                </td>
                <td className="p-6">{user.type}</td>
                <td className="p-6">{user.email}</td>
                <td className="p-6">{user.date}</td>
                <td className="p-6">
                  <p
                    className={`${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-500'
                        : ''
                    } flex justify-center px-2 rounded-lg w-fit ${
                      user.status === 'Pending'
                        ? 'bg-orange-100 text-orange-500'
                        : ''
                    } ${
                      user.status === 'Decline'
                        ? 'bg-red-100 text-red-500'
                        : null
                    }  ${
                      user.status === 'Approve'
                        ? 'bg-green-100 text-green-500'
                        : null
                    }`}
                  >
                    {user?.status.charAt(0).toUpperCase() +
                      user?.status.slice(1)}
                  </p>
                </td>
                <td className="flex gap-4">
                  <IoEyeOutline
                    style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                    onClick={() => handleShowProducts(user)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showDetail && (
        <Modal>
          <ShowDetailComp
            detail={userData}
            setShowDetail={setShowDetail}
            type="user"
          />
        </Modal>
      )}
    </div>
  );
}

UserDataTable.propTypes = {
  data: PropTypes.array,
  tableHeadNames: PropTypes.array,
  type: PropTypes.string,
};

export default UserDataTable;
