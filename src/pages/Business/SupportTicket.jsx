import React, { useContext, useEffect, useState } from 'react';
import AddTicket from '../../components/AddTicket';
import Pagination from '../../components/Pagination';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import TableData from '../../components/ui/TableData';
import { addTicket, fetchSupportTickets } from '../../services/api';
import { ModalContext } from './../../App';
import ActionNotification from './../../components/ActionNotification';
import Button from './../../components/Button';
import Modal from './../../components/Modal';
import TicketCard from './../../components/ui/TicketCard';

function SupportTicket() {
  const { showModal, setShowModal } = useContext(ModalContext);
  const [showAction, setShowAction] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsData, setTicketsData] = useState([]);

  useEffect(
    () =>
      async function () {
        const data = await fetchSupportTickets();
        setTicketsData(data);
        // console.log(data);
      },
    [],
  );
  const itemsPerPage = 5; // Number of items per page

  // Calculate total pages based on data length and items per page
  const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, ticketsData.length);

  // Slice the data array based on currentPage and itemsPerPage
  const paginatedData = ticketsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  async function addNewTicket(newTicket) {
    try {
      const addedTicket = await addTicket(newTicket);
      setTicketsData([...ticketsData, addedTicket]);
      setShowModal(false);
      showTemporaryNotification();
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  }

  function showTemporaryNotification() {
    setShowAction(true);
    setTimeout(() => {
      setShowAction(false);
    }, 1500);
  }

  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="m-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <section className="px-20 py-20 flex justify-between items-center">
          <PageDataHeader
            name="Support Ticket"
            to="Support Ticket"
            btnText="Submit a ticket"
          />
          <Button
            onClick={() => setShowModal(!showModal)}
            btnText="Submit a ticket"
          />

          {showModal && (
            <Modal>
              <AddTicket
                CloseModalWindow={setShowModal}
                currentStatus={showModal}
                addNewTicket={addNewTicket}
              />
            </Modal>
          )}

          {showAction && (
            <Modal>
              <ActionNotification message="Ticket Added Successfully" />
            </Modal>
          )}
        </section>
        <section className=" p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
          <TicketCard name="Total Complaints" numbers={250} />
          <TicketCard name="Total Complaints" numbers={250} />
          <TicketCard name="Total Complaints" numbers={250} />
        </section>
        <section className="p-10 ">
          <div className="p-8 flex flex-col gap-10">
            <Filter />
            <TableData
              type="supportTicket"
              data={paginatedData}
              tableHeadNames={[
                'Reference Id',
                'Date',
                'Last Updated',
                'Subject',
                'Status',
                'Priority',
              ]}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default SupportTicket;
