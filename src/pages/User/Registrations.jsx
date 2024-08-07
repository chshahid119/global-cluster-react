import React, { useState } from 'react';
import UserDataTable from '../../components/UserDataTable';
import Header from './../../components/ui/Header';

const userData = [
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Pending',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Virginia',
  },
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Approve',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Los Angles',
  },
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Approve',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Virginia',
  },
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Approve',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Virginia',
  },
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Decline',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Virginia',
  },
  {
    user: 'Samuel',
    type: 'Individual',
    lastUpdated: 'January 20, 2024',
    email: 'Silasdahun@gmail.com',
    date: 'January 24,2024',
    status: 'Decline',
    phone: '0807331612',
    address: 'Mobhi Road, Ajah Logos',
    state: 'Virginia',
  },
];

function Registrations() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersDat, setUsersData] = useState([]);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, userData.length);
  const paginatedData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="bg-white m-20 p-10 rounded-lg">
        <h2 className="text-4xl font-semibold">Registrations</h2>
        <div className="p-20">
          <UserDataTable
            type="default"
            data={paginatedData}
            tableHeadNames={[
              'User',
              'Type',
              'Email',
              'Date',
              'Status',
              'Action',
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default Registrations;
