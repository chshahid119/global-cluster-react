import PropTypes from 'prop-types'
import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { FaTicket } from 'react-icons/fa6'
import { GrMenu } from 'react-icons/gr'

function SupportCenterTicket({
  title,
  number,
  SupportTicketDetail,
  setSupportTicketDetail,
}) {
  return (
    <article className="flex justify-between items-center rounded-md w-1/3 bg-gray-50 p-10">
      <div className="p-2">
        <p>{title}</p>
        <p className="font-semibold text-4xl">{number}</p>
      </div>
      {title === 'Total Tickets' && (
        <FaTicket className="text-5xl text-gray-400" />
      )}
      {title === 'In Progress' && (
        <CiClock2 className="text-5xl text-gray-400" />
      )}
      {title === 'Critical' && <CiClock2 className="text-5xl text-gray-400" />}
      {title === 'New Ticket' && <GrMenu className="text-5xl text-gray-400" />}
    </article>
  )
}

SupportCenterTicket.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  SupportTicketDetail: PropTypes.bool,
  setSupportTicketDetail: PropTypes.func,
}

export default SupportCenterTicket
