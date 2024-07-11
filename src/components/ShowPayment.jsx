import PropTypes from 'prop-types'
import React from 'react'
import PaymentIcon from './../assets/images/paymentIcon.png'

function ShowPayment({ title, amount }) {
  return (
    <div className="flex justify-between  flex-1 p-8 items-center">
      <div>
        <p className="text-xl">{title}</p>
        <h2 className="font-semibold text-3xl">N {amount}K</h2>
      </div>
      <div className="p-2 flex items-center justify-between bg-purple-50 rounded-full w-16 h-16">
        <img
          className="w-full h-full"
          src={PaymentIcon}
          alt="paymnet icon"
        />
      </div>
    </div>
  )
}

ShowPayment.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
}

export default ShowPayment
