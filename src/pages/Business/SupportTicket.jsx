import React,{useState} from 'react';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import SupportTicketCard from '../../components/ui/SupportTicketCard';
import Filter from '../../components/ui/Filter';
import TableData from '../../components/ui/TableData';
import Pagination from '../../components/Pagination';

const ticketsData = [
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'High',
  },
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    refId: 'ASB234444809',
    date: 'January 24, 2024',
    lastUpdated: 'January 20, 2024',
    subject:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident eaque consequuntur voluptatum at porro laborum rem doloremque corrupti optio aperiam magnam voluptate dignissimos molestias nisi aliquam quidem perspiciatis tempora, dolores eveniet labore! Temporibus dolorum officiis accusamus quaerat! Expedita quos aliquid eveniet laboriosam culpa tempore eum quis, aspernatur ex laborum!',
    status: 'In Progress',
    priority: 'Medium',
  },
];

function SupportTicket() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Calculate total pages based on data length and items per page
  const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, ticketsData.length);

  // Slice the data array based on currentPage and itemsPerPage
  const paginatedData = ticketsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='bg-gray-50'>
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <section className="px-10 py-10">
          <PageDataHeader
            name="Support Ticket"
            to="Support Ticket"
            btnText="Submit a ticket"
          />
        </section>
        <section className=" p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
          <SupportTicketCard name="Total Complaints" numbers={250} />
          <SupportTicketCard name="Total Complaints" numbers={250} />
          <SupportTicketCard name="Total Complaints" numbers={250} />
        </section>
        <section className="p-10 ">
          <div className="p-8 flex flex-col gap-10">
            <Filter />
            <TableData
              type="default"
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
 