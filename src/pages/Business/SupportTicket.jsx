import React from 'react';
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
  return (
    <div>
      {' '}
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md">
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
              type="supportTicket"
              data={ticketsData}
              tableHeadNames={[
                'Reference Id',
                'Date',
                'Last Updated',
                'Subject',
                'Status',
                'Priority',
              ]}
            />
            <Pagination />
          </div>
        </section>
      </main>
    </div>
  );
}

export default SupportTicket;
