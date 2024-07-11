import PropTypes from 'prop-types'
import React from 'react'
import UserImg from './../assets/images/userImg.png'
import RowData from './../components/RowData'

function TopEarners({ earners }) {
  return (
    <div className="flex flex-col gap-8">
      {earners.map((earner, index) => (
        <RowData
          key={index}
          memberName={earner.memberName}
          userName={earner.userName}
          img={UserImg}
        >
          <p className="px-6 font-bold text-primary-dark mb-4">
            {earner.amount}
          </p>
        </RowData>
      ))}
    </div>
  )
}

TopEarners.propTypes = {
  earners: PropTypes.object,
}

export default TopEarners
