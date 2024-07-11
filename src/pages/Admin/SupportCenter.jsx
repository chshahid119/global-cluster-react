import React, { useEffect, useState } from 'react'
import SupportCenterTicket from '../../components/SupportCenterTicket'
import TicketDetail from '../../components/TicketDetail'
import BusinessDashboardHeader from '../../components/ui/Header'
import PageDataHeader from '../../components/ui/PageDataHeader'
import { fetchPayoutsData } from '../../services/api'
import Pagination from './../../components/Pagination'
import TableData from './../../components/ui/TableData'

const dummySupportCenterData = [
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
  {
    subject: '[Ticket#27579434] Modification of Downlines',
    submittedBy: 'Akinola John',
    status: 'Status',
    priority: 'Medium',
    lastReply: '2 weeks ago',
    action: 'view',
  },
]

function SupportCenter() {
  const [currentPage, setCurrentPage] = useState(1)
  const [supportCenterData, setPayoutData] = useState([])
  const [SupportTicketDetail, setSupportTicketDetail] = useState(false)
  const [detail, setDetail] = useState({})

  useEffect(
    () =>
      async function () {
        const data = await fetchPayoutsData()
        setPayoutData(data)
        console.log(data)
      },
    [],
  )

  const itemsPerPage = 7

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const curentPayoutData = dummySupportCenterData.slice(startIndex, endIndex)

  function handleDetail(item) {
    setDetail(item)
    setSupportTicketDetail(true)
  }

  return (
    <div className="bg-gray-50 h-full">
      <BusinessDashboardHeader />
      {SupportTicketDetail === false && (
        <main className="mx-10 my-10 pt-20  flex flex-col gap-6  rounded-md bg-white">
          <div className="px-10 flex flex-col gap-3">
            <PageDataHeader name="Support Center" />
            <p className="text-gray-400 text-xl">
              ! Note this is an add-on module
            </p>
          </div>

          <section className=" rounded-xl justify-between m-16 flex gap-8">
            <SupportCenterTicket
              title="Total Tickets"
              number={0}
            />
            <SupportCenterTicket
              title="In Progress"
              number={0}
            />
            <SupportCenterTicket
              title="Critical"
              number={0}
            />
            <SupportCenterTicket
              title="New Ticket"
              number={0}
            />
          </section>
          <section className="p-10 space-y-7">
            <TableData
              type="supportCenter"
              tableHeadNames={[
                'Subject',
                'Submitted by',
                'Status',
                'Priority',
                'Last Reply',
                'Action',
              ]}
              handleDetail={handleDetail}
              data={curentPayoutData}
              SupportTicketDetail={SupportTicketDetail}
              setSupportTicketDetail={setSupportTicketDetail}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(
                dummySupportCenterData.length / itemsPerPage,
              )}
              onPageChange={handlePageChange}
            />
          </section>
        </main>
      )}

      {SupportTicketDetail === true && (
        <TicketDetail
          data={detail}
          setSupportTicketDetail={setSupportTicketDetail}
        />
      )}
    </div>
  )
}

export default SupportCenter
