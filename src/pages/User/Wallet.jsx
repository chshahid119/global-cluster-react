import React, { useEffect, useState } from 'react';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import TicketCard from '../../components/ui/TicketCard';
import WalletCard from '../../components/WalletCard';
import { fetchWalletData } from '../../services/api';
import Pagination from './../../components/Pagination';
import TableData from './../../components/ui/TableData';

function Wallet() {
  const [currentPage, setCurrentPage] = useState(1);
  const [walletData, setWalletData] = useState([]);

  useEffect(
    () =>
      async function () {
        const data = await fetchWalletData();
        setWalletData(data);
        console.log(data);
      },
    [],
  );
  const itemsPerPage = 7;

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUser = walletData.slice(startIndex, endIndex);

  const totalBalance = walletData.reduce((acc, currTransaction) => {
    return acc + +currTransaction.amount;
  }, 0);

  const successfullTransactions = walletData.reduce((acc, currTransaction) => {
    return currTransaction.status === 'successful' ||
      currTransaction.status.toLowerCase() === 'successfull'
      ? acc + 1
      : acc + 0;
  }, 0);

  const pendingTransactions = walletData.reduce((acc, currTransaction) => {
    return currTransaction.status.toLowerCase() === 'pending'
      ? acc + 1
      : acc + 0;
  }, 0);

  const declinedTransactions = walletData.reduce((acc, currTransaction) => {
    return currTransaction.status.toLowerCase() === 'declined'
      ? acc + 1
      : acc + 0;
  }, 0);

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 p-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <div className="flex items-center justify-between ">
          <WalletCard totalBalance={totalBalance} />

          <section className="flex-1 p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
            <TicketCard
              name="Successfull Transactions"
              numbers={successfullTransactions}
            />
            <TicketCard
              name="Pending Transactions"
              numbers={pendingTransactions}
            />
            <TicketCard
              name="Declined Transactions"
              numbers={declinedTransactions}
            />
          </section>
        </div>

        <section className="p-10  space-y-8">
          <div className="p-8 flex flex-col gap-10">
            <Filter />
          </div>

          <TableData
            type="wallet"
            tableHeadNames={[
              'Reference Id',
              'Date',
              'Description',
              'Amount',
              'Status',
              'Action',
            ]}
            data={currentUser}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(walletData.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
    </div>
  );
}

export default Wallet;
