import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import TicketCard from '../../components/ui/TicketCard';
import { fetchPayoutsData } from '../../services/api';
import { ModalContext } from './../../App';
import AddPayout from './../../components/AddPayout';
import Modal from './../../components/Modal';
import Pagination from './../../components/Pagination';
import TableData from './../../components/ui/TableData';

function Payout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [payoutData, setPayoutData] = useState([]);
  const { showModal, setShowModal } = useContext(ModalContext);

  useEffect(
    () =>
      async function () {
        const data = await fetchPayoutsData();
        setPayoutData(data);
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

  const curentPayoutData = payoutData.slice(startIndex, endIndex);

  const requestedPayouts = payoutData.reduce((acc, currPayout) => acc + 1, 0);
  const approvedPayouts = payoutData.reduce((acc, currPayout) => {
    return currPayout.status.toLowerCase() === 'approved' ? acc + 1 : acc;
  }, 0);
  const paidPayouts = payoutData.reduce((acc, currPayout) => {
    return currPayout.status.toLowerCase() === 'paid' ? acc + 1 : acc;
  }, 0);

  const pendingPayouts = payoutData.reduce((acc, currPayout) => {
    return currPayout.status.toLowerCase() === 'pending' ? acc + 1 : acc;
  }, 0);

  const rejectedPayouts = payoutData.reduce((acc, currPayout) => {
    return currPayout.status.toLowerCase() === 'declined' ||
      currPayout.status.toLowerCase() === 'rejected'
      ? acc + 1
      : acc;
  }, 0);

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 pt-20  flex flex-col gap-10  rounded-md bg-white">
        <section className="px-12 flex justify-between">
          <PageDataHeader name="Promote & Earn" to="Payout" />
          <Button
            btnText="Request Payout"
            onClick={() => setShowModal(!showModal)}
          />

          {showModal && (
            <Modal>
              <AddPayout
                CloseModalWindow={setShowModal}
                currentStatus={showModal}
              />
            </Modal>
          )}
        </section>
        <section className=" p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
          <TicketCard name="Requested Payouts" numbers={requestedPayouts} />
          <TicketCard name="Approved Payouts" numbers={approvedPayouts} />
          <TicketCard name="Paid Payouts" numbers={paidPayouts} />
          <TicketCard name="Pending Payouts" numbers={pendingPayouts} />
          <TicketCard name="Rejected Payouts" numbers={rejectedPayouts} />
        </section>
        <section className="p-10 space-y-4">
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

export default Payout;
