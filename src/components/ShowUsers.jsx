import PropTypes from 'prop-types'
import React from 'react'
import { HiUsers } from 'react-icons/hi2'

function ShowUsers({ title, numbers }) {
  return (
    <div className="flex justify-between  flex-1 p-8 items-center">
      <div>
        <p className="text-xl">{title}</p>
        <h2 className="font-semibold text-3xl">{numbers}</h2>
      </div>
      <div className="p-2 flex items-center justify-center bg-purple-50 rounded-full w-16 h-16">
        <HiUsers className="text-4xl" />
      </div>
    </div>
  )
}

ShowUsers.propTypes = {
  title: PropTypes.string,
  numbers: PropTypes.number,
}

export default ShowUsers
