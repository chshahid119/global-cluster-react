import React, { useState } from 'react';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import TicketCard from '../../components/ui/TicketCard';
import Pagination from './../../components/Pagination';
import TableData from './../../components/ui/TableData';

const payoutData = [
  {
    refId: 'REF001',
    date: '2024-07-01',
    amount: 100.0,
    paymentMethod: 'Credit Card',
    status: 'Paid',
  },
  {
    refId: 'REF002',
    date: '2024-07-02',
    amount: 75.5,
    paymentMethod: 'PayPal',
    status: 'Declined',
  },
  {
    refId: 'REF003',
    date: '2024-07-03',
    amount: 150.25,
    paymentMethod: 'Bank Transfer',
    status: 'Pending',
  },
  {
    refId: 'REF004',
    date: '2024-07-04',
    amount: 200.75,
    paymentMethod: 'Cash',
    status: 'Paid',
  },
];

function PermoteAndEarn() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const curentPayoutData = payoutData.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <section className="px-10 py-10">
          <PageDataHeader name="Promote & Earn" to="Payout" />
        </section>
        <section className=" p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
          <TicketCard name="Requested Payoute" numbers={520} />
          <TicketCard name="Approved Payout" numbers={230} />
          <TicketCard name="Paid Payout" numbers={20} />
          <TicketCard name="Rejected Payout" numbers={20} />
        </section>
        <section className="p-10 space-y-10">
          <div className="p-8 flex flex-col gap-10">
            <Filter />
          </div>

          <TableData
            type="payout"
            tableHeadNames={[
              'Reference Id',
              'Date',
              'Amount',
              'Payment Method',
              'Status',
              'Action',
            ]}
            data={curentPayoutData}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(payoutData.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
    </div>
  );
}

export default PermoteAndEarn;
