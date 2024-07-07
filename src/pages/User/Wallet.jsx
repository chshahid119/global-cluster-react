import React, { useState } from 'react';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import TicketCard from '../../components/ui/TicketCard';
import WalletCard from '../../components/WalletCard';
import Pagination from './../../components/Pagination';
import TableData from './../../components/ui/TableData';

const walletData = [
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Declined',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
  {
    refId: 'ASB2344448909',
    date: 'January 24,2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    amount: 'N3,000',
    status: 'Successfull',
  },
];

function Wallet() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentUser = walletData.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 p-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <div className="flex items-center justify-between ">
          <WalletCard />

          <section className="flex-1 p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
            <TicketCard name="No of Links Shared" numbers={520} />
            <TicketCard name="Bonus Earned" numbers={4} />
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
