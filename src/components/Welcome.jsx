import PropTypes from 'prop-types'
import React from 'react'
import ShowPayment from './ShowPayment'
import ShowUsers from './ShowUsers'

function Welcome({ welcomeNote, purpose, data }) {
  return (
    <div className="m-4 ">
      <div className="bg-primary  rounded-2xl text-white pb-24 py-10 px-10 space-y-4">
        <h2 className="font-semibold">Welcome {welcomeNote}</h2>
        <p className="text-xl">{purpose}</p>
      </div>
      <div className="bg-white rounded-2xl text-gray-500 border mx-14 py-10 px-8 -translate-y-16 flex justify-around divide-x">
        <ShowPayment
          title="Total Payments"
          amount={28.53}
        />
        <ShowPayment
          title="Total Withdrawl"
          amount={28.53}
        />
        <ShowPayment
          title="Pending Withdrawl"
          amount={2.43}
        />
        <ShowUsers
          title="Total Users"
          numbers={118}
        />
        <ShowUsers
          title="Active Users"
          numbers={118}
        />
        <ShowUsers
          title="Inactive Users"
          numbers={118}
        />
      </div>
    </div>
  )
}

Welcome.propTypes = {
  welcomeNote: PropTypes.string,
  purpose: PropTypes.string,
  data: PropTypes.object,
}

export default Welcome
