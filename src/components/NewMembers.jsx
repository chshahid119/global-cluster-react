import PropTypes from 'prop-types'
import React from 'react'
import UserImg from './../assets/images/userImg.png'
import RowData from './../components/RowData'

function NewMembers({ newMembers }) {
  return (
    <div className="flex flex-col gap-8">
      {newMembers.map((member, index) => (
        <RowData
          key={index}
          memberName={member.memberName}
          userName={member.userName}
          img={UserImg}
        >
          <p className="px-6 rounded-lg font-bold mb-4 bg-green-100 text-green-500">
            {member.date}
          </p>
        </RowData>
      ))}
    </div>
  )
}

NewMembers.propTypes = {
  newMembers: PropTypes.object,
}

export default NewMembers
