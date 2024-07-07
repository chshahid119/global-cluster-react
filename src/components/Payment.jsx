import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

function Payment({ regForm, setRegForm }) {
  const [paymentTab, setPaymentTab] = useState('mobileMoney');

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-primary-light flex items-center justify-center">
      <div
        className="fixed bg-white p-6 top-20 rounded-full  cursor-pointer"
        onClick={regForm => setRegForm(regForm - 1)}
      >
        <IoIosClose className="text-5xl" />
      </div>
      <div className="bg-white rounded-lg shadow-lg py-10 px-2 overflow-hidden flex w-[50rem]">
        <div className="w-1/3 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold mb-6">PAY WITH</h3>
          <div
            className={`flex items-center mb-4 cursor-pointer ${
              paymentTab === 'mobileMoney' ? 'text-green-500' : 'text-gray-600'
            }`}
            onClick={() => setPaymentTab('mobileMoney')}
          >
            <FaMobileAlt className="mr-2" />
            <span>Mobile Money</span>
            {paymentTab === 'mobileMoney' && (
              <span className="ml-auto text-green-500">•</span>
            )}
          </div>
          <div
            className={`flex items-center cursor-pointer ${
              paymentTab === 'cardMoney' ? 'text-green-500' : 'text-gray-600'
            }`}
            onClick={() => setPaymentTab('cardMoney')}
          >
            <FaCreditCard className="mr-2" />
            <span>Card</span>
            {paymentTab === 'cardMoney' && (
              <span className="ml-auto text-green-500">•</span>
            )}
          </div>
        </div>
        <div className="w-2/3 p-6">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-md mr-2">
                <RiMoneyDollarCircleLine size={24} />
              </div>
              <span className="font-semibold">Global Cluster</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">+23324123456@gmail.com</p>
              <p className="font-semibold">
                Pay <span className="text-blue-600">USD 350</span>
              </p>
            </div>
          </div>

          {paymentTab === 'mobileMoney' && (
            <>
              <p className="mb-4 text-gray-600">
                Enter your mobile money number and provider to start the payment
              </p>
              <div className="mb-4">
                <div className="flex mb-2">
                  <input
                    type="text"
                    placeholder="024 123 4567"
                    className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="bg-gray-100 p-2 border border-l-0 rounded-r-md">
                    🇬🇭
                  </div>
                </div>
                <select
                  name="provider"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option default>Choose Provider</option>
                  <option value="MTN">MTN</option>
                </select>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">
                Pay USD 350
              </button>
            </>
          )}

          {paymentTab === 'cardMoney' && (
            <>
              <p className="mb-4 text-gray-600">
                Enter your card details to pay
              </p>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="123"
                    className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200">
                Pay USD 1,400
              </button>
            </>
          )}

          <p className="mt-4 text-sm text-gray-500">
            An additional E-levy fee of 1% may apply to this payment.
            <span className="text-blue-600 cursor-pointer"> Learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Payment.propTypes = {
  regForm: PropTypes.number,
  setRegForm: PropTypes.func,
};

export default Payment;
