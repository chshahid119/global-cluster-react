import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';

function AddTicket({ addNewTicket, CloseModalWindow, currentStatus }) {
  const [priority, setPriority] = useState('');

  const AddAndCloseModal = () => {
    const ticket = {
      created_at: '2024-07-08T17:20:53.607447Z',
      updated_at: '2024-07-08T17:20:53.607447Z',
      subject: 'Add another support ticket',
      status: 'open',
      priority: 'low',
      user: 1,
    };

    // addNewProduct(newProduct);

    addNewTicket(ticket);
    CloseModalWindow(!currentStatus);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-gray-500">
      <div
        className={`w-[60rem] font-thin flex flex-col gap-2 bg-white border rounded-xl `}
      >
        <div className="flex justify-between items-center px-12 py-4 border-b">
          <p className="font-thin px-10">Submit a New Ticket</p>
          <div
            className="cursor-pointer"
            onClick={() => CloseModalWindow(!currentStatus)}
          >
            <ImCancelCircle style={{ fontSize: '2rem' }} />
          </div>
        </div>
        <div className="px-10 py-12 flex flex-col gap-6">
          <div className="mb-4 flex flex-col gap-2">
            <p>How can we assist you?</p>
            <div className="flex items-center p-8 justify-between">
              <div className="flex gap-5 items-center cursor-pointer">
                <input
                  type="radio"
                  id="needSupport"
                  name="assistType"
                  className="appearance-none border border-gray-300 rounded-full w-6 h-6
                   checked:bg-primary-light checked:border-transparent outline-offset-2  focus:ring-primary-light"
                  value="needSupport"
                />
                <label className="text-nowrap" htmlFor="needSupport">
                  Need Support
                </label>
              </div>
              <div className="flex gap-5 items-center cursor-pointer">
                <input
                  type="radio"
                  id="suggestion"
                  name="assistType"
                  className="appearance-none border border-gray-300 rounded-full w-6 h-6
                   checked:bg-primary-light checked:border-transparent outline-offset-2  focus:ring-primary-light"
                  value="suggestion"
                />
                <label className="text-nowrap" htmlFor="suggestion">
                  Have a Suggestion
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-1">
            <label htmlFor="need" className="block">
              What do you need support for?
            </label>
            <input
              type="text"
              name="need"
              id="need"
              className="outline-none border rounded-lg p-5"
            />
          </div>

          <div className="mb-4 flex flex-col gap-1">
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              className="border outline-none rounded-lg p-4"
              name="description"
              id="description"
              rows="5"
            ></textarea>
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <p className="">Priority Level</p>
            <div className="flex gap-6 p-4">
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'high' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('high')}
              >
                High
              </p>
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'medium' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('medium')}
              >
                Medium
              </p>
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'low' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('low')}
              >
                Low
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="productLink" className="block">
              Product Link
            </label>
            <div className="flex gap-4">
              <label
                className="py-4 px-6 flex-1 font-thin flex gap-2 border-2 rounded-xl"
                htmlFor="whatsapp"
              >
                <input type="radio" id="whatsapp" name="linkType" />
                WhatsApp
              </label>
              <label
                className="py-4 px-6 flex-1 font-thin  flex gap-2 border-2 rounded-xl"
                htmlFor="website"
              >
                <input type="radio" id="website" name="linkType" />
                Website
              </label>
              <label
                className="py-4 px-6 flex-1 font-thin  flex gap-2 border-2 rounded-xl"
                htmlFor="phone"
              >
                <input type="radio" id="phone" name="linkType" />
                Phone
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <p
              // onClick={() => CloseModalWindow(!currentStatus)}
              className="flex-1 flex items-center justify-center px-4 py-6 border rounded-xl border-primary-light hover:bg-primary-light hover:text-white cursor-pointer"
            >
              Cancel
            </p>
            <p
              onClick={AddAndCloseModal}
              className="flex-1 flex items-center justify-center px-4 py-6 bg-primary-light text-white rounded-xl cursor-pointer hover:bg-primary-dark"
            >
              Add
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

AddTicket.propTypes = {
  addNewTicket: PropTypes.func,
  CloseModalWindow: PropTypes.func,
  currentStatus: PropTypes.bool,
};

export default AddTicket;
