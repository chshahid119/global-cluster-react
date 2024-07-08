import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { IoCloudUploadOutline } from 'react-icons/io5';

function AddTicket({ addNewTicket, CloseModalWindow, currentStatus }) {
  const [priority, setPriority] = useState('');
  const [subject, setSubject] = useState('');
  const [need, setNeed] = useState('');
  const [description, setDescription] = useState('');
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        CloseModalWindow(!currentStatus);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [CloseModalWindow, currentStatus]);

  const handleDragEnter = e => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    // Handle the dropped file here (e.g., upload or display preview)
  };

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle file selection here
  };

  const AddAndCloseModal = () => {
    const ticket = {
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      subject,
      status: 'open',
      priority,
      user: 1,
      need,
      description,
      file: selectedFile,
    };

    addNewTicket(ticket);
    CloseModalWindow(!currentStatus);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-gray-500">
      <div
        className={`w-[60rem] font-thin flex flex-col gap-2 bg-white border rounded-xl `}
        ref={modalRef}
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
                  onChange={e => setSubject(e.target.value)}
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
                  onChange={e => setSubject(e.target.value)}
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
              onChange={e => setNeed(e.target.value)}
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
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <p className="">Priority Level</p>
            <div className="flex gap-6 p-4">
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'High' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('High')}
              >
                High
              </p>
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'Medium' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('Medium')}
              >
                Medium
              </p>
              <p
                className={`border px-8 py-2 rounded-full cursor-pointer ${
                  priority === 'Low' ? 'bg-primary-light text-white' : null
                }`}
                onClick={() => setPriority('Low')}
              >
                Low
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col border-dashed border-2  rounded-lg h-[10rem] w-full items-center justify-center ${
              dragging ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <input
              type="file"
              id="fileInput"
              name="productImage"
              accept="image/*"
              className="hidden"
              onChange={handleFileInputChange}
            />
            {selectedFile ? (
              <p className="text-gray-400">{selectedFile.name}</p>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center">
                <IoCloudUploadOutline style={{ fontSize: '5rem' }} />
                <p className={`text-gray-400 ${dragging ? 'hidden' : ''}`}>
                  Drag and Drop files here
                </p>
              </div>
            )}
            {dragging && (
              <p className="text-blue-500">Release to drop the file</p>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <p
              onClick={() => CloseModalWindow(!currentStatus)}
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
