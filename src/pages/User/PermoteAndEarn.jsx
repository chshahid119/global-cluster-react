import React from 'react';
import PromoteAndEarnRowTable from '../../components/PromoteAndEarnRowTable';
import Filter from '../../components/ui/Filter';
import BusinessDashboardHeader from '../../components/ui/Header';
import PageDataHeader from '../../components/ui/PageDataHeader';
import TicketCard from '../../components/ui/TicketCard';

const products = [
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  {
    name: 'Lorem ipsum',
    company: 'Global Cluster',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.....',
    date: '1 Jan 2024',
  },
  // Add more product objects as needed
];

function PermoteAndEarn() {
  return (
    <div className="bg-gray-50">
      <BusinessDashboardHeader />
      <main className="mx-10 my-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md bg-white">
        <section className="px-10 py-10">
          <PageDataHeader name="Promote & Earn" />
        </section>
        <section className=" p-10  bg-gray-50  rounded-xl m-20 flex gap-8">
          <TicketCard name="No of Links Shared" numbers={520} />
          <TicketCard name="Bonus Earned" numbers={4} />
        </section>
        <section className="p-10 ">
          <div className="p-8 flex flex-col gap-10">
            <Filter />
          </div>
          <div>
            <PromoteAndEarnRowTable products={products} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default PermoteAndEarn;
