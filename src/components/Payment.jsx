import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Payment({ regForm, setRegForm }) {
  const [paymentTab, setPaymentTab] = useState('card');
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-primary-light">
      <div className="bg-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex">
        <div>
          <h3>PAY WITH</h3>
          <div>Mobile Money</div>
          <div>Card</div>
        </div>
        <div className="flex flex-col">
          <div>Global Cluster</div>
          <p>+234585979349523@gmail.com</p>
          <p>
            Pay <span>USD 350</span>
          </p>
        </div>
        {paymentTab === 'mobileMoney' && (
          <>
            <div>
              <p>
                Enter your mobile money number and provider to start the payment
              </p>
            </div>
            <div>
              <input type="text" />
              <select name="provider" id="provider">
                <option default>Choose Provider</option>
                <option value="MTN">MTN</option>
              </select>
              <p>Confirm</p>
            </div>
          </>
        )}

        {paymentTab === 'card' && <div>Mobile Money</div>}
        <div>
          An aditional E-levy fee of 1% may apply to tis payment.{' '}
          <span>Learn more</span>
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
