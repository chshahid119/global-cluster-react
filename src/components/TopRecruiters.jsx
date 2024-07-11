import PropTypes from 'prop-types'
import React from 'react'
import UserImg from './../assets/images/userImg.png'
import RowData from './../components/RowData'

function TopRecruiters({ recruiters }) {
  return (
    <div className="flex flex-col gap-8 py-8">
      {recruiters.map((recruiter, index) => (
        <RowData
          key={index}
          memberName={recruiter.memberName}
          userName={recruiter.userName}
          img={UserImg}
        >
          <p className="px-6 font-bold text-white rounded-lg bg-primary-light mb-4">
            {recruiter.recruits} Recruits
          </p>
        </RowData>
      ))}
    </div>
  )
}

TopRecruiters.propTypes = {
  recruiters: PropTypes.object,
}

export default TopRecruiters
