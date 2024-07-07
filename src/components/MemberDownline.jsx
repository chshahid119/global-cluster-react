import React from 'react';
import Filter from './../components/ui/Filter';
import TicketCard from './../components/ui/TicketCard';
import UserDataTale from './../components/UserDataTable';

const dummyMemberDownlineData = [
  {
    member: 'REF00111',
    name: 'Silas Dahun',
    userName: 'silasdahun',
    placement: 'INF00111',
    referee: 'REF00111',
    level: 1,
  },
  {
    member: 'REF00111',
    name: 'Silas Dahun',
    userName: 'silasdahun',
    placement: 'INF00111',
    referee: 'REF00111',
    level: 2,
  },
  {
    member: 'REF00111',
    name: 'Silas Dahun',
    userName: 'silasdahun',
    placement: 'INF00111',
    referee: 'REF00111',
    level: 3,
  },
  {
    member: 'REF00111',
    name: 'Silas Dahun',
    userName: 'silasdahun',
    placement: 'INF00111',
    referee: 'REF00111',
    level: 1,
  },
  {
    member: 'REF00111',
    name: 'Silas Dahun',
    userName: 'silasdahun',
    placement: 'INF00111',
    referee: 'REF00111',
    level: 2,
  },
];

function MemberDownline() {
  return (
    <div className="px-6 py-10 flex flex-col gap-8">
      <section className="bg-gray-50 rounded-lg flex gap-6">
        <TicketCard name="Total Downline Members" numbers={520} />
        <TicketCard name="Total Levels" numbers={4} />
        <TicketCard name="Paired" numbers={4} />
        <TicketCard name="Unpaired" numbers={16} />
      </section>
      <section className="flex flex-col gap-6">
        <Filter />
        <div className="flex flex-col gap-10">
          <UserDataTale
            type="downlineUser"
            data={dummyMemberDownlineData}
            tableHeadNames={[
              'Member',
              'Username',
              'Placement',
              'Referee',
              'Level',
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default MemberDownline;
