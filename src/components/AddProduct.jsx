import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { ImCancelCircle } from "react-icons/im";
import { IoCloudUploadOutline } from "react-icons/io5";


    //  "id": 3,
    // "name": "test",
    // "photo": null,
    // "status": "test",
    // "description": "heloooo",
    // "shares": 10,
    // "traffic": 10,
    // "phone_no": "bdhv",
    // "link": "test"

function AddProduct({ addNewProduct, CloseModalWindow, currentStatus }) {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [productLinkType, setProductLinkType] = useState('whatsapp'); // Default link type

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside of modal content
        CloseModalWindow(!currentStatus);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [CloseModalWindow, currentStatus]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    console.log("File dropped:", file);
    setSelectedFile(file);
    // Handle the dropped file here (e.g., upload or display preview)
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // Handle file selection here
  };

  const handleProductLinkTypeChange = (e) => {
    setProductLinkType(e.target.id); // Assuming radio button ids match link types
  };

  const AddAndCloseModal = () => {
    const newProduct = {
      name: productName,
      description: description,
      photo: selectedFile,
      productLinkType: productLinkType
    };

    addNewProduct(newProduct);
  
    CloseModalWindow(!currentStatus);
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div ref={modalRef} className={`w-[50rem] font-thin flex flex-col gap-2 bg-white border rounded-xl ${dragging ? 'border-blue-500' : ''}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        <div className='flex justify-between items-center px-16 py-8 border-b'>
          <p className='font-thin'>Add New Product</p>
          <div className='cursor-pointer' onClick={() => CloseModalWindow(!currentStatus)}>
            <ImCancelCircle style={{ fontSize: '2rem' }} />
          </div>
        </div>
        <div className="px-14 py-8 flex flex-col gap-8">
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="productName" className="block">Product Name</label>
            <input type="text" id="name" name="name" className="border rounded-md outline-none p-2 w-full"
              value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div className="mb-4 flex flex-col gap-1">
            <label htmlFor="description" className="block">Description</label>
            <textarea className='border rounded-md p-2 outline-none' name="description" rows='5' cols='5' id="description"
              value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className='mb-4 flex flex-col gap-4 cursor-pointer'>
            <label htmlFor="productImage" className="block">Product Image</label>
            <div className={`flex flex-col border rounded-md h-[10rem] w-full items-center justify-center ${dragging ? 'bg-blue-100' : ''}`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('fileInput').click()}>
              <input type="file" id="fileInput" name="productImage" accept="image/*" className="hidden" onChange={handleFileInputChange} />
              {selectedFile ? (
                <p className="text-gray-400">{selectedFile.name}</p>
              ) : (
                <div className='flex flex-col gap-4 items-center justify-center'>
                  <IoCloudUploadOutline style={{ fontSize: '5rem' }} />
                  <p className={`text-gray-400 ${dragging ? 'hidden' : ''}`}>Drag and Drop files here</p>
                </div>
              )}
              {dragging && <p className="text-blue-500">Release to drop the file</p>}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <label htmlFor='productLink' className="block">Product Link</label>
            <div className='flex gap-4'>
              <label className='py-4 px-6 flex-1 font-thin flex gap-2 border-2 rounded-xl' htmlFor="whatsapp">
                <input type="radio" id="whatsapp" name="linkType" checked={productLinkType === 'whatsapp'} onChange={handleProductLinkTypeChange} />
                WhatsApp
              </label>
              <label className='py-4 px-6 flex-1 font-thin  flex gap-2 border-2 rounded-xl' htmlFor="website">
                <input type="radio" id="website" name="linkType" checked={productLinkType === 'website'} onChange={handleProductLinkTypeChange} />
                Website
              </label>
              <label className='py-4 px-6 flex-1 font-thin  flex gap-2 border-2 rounded-xl' htmlFor="phone">
                <input type="radio" id="phone" name="linkType" checked={productLinkType === 'phone'} onChange={handleProductLinkTypeChange} />
                Phone
              </label>
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <p onClick={() => CloseModalWindow(!currentStatus)} className='flex-1 flex items-center justify-center px-4 py-6 border rounded-xl border-primary-light hover:bg-primary-light hover:text-white cursor-pointer'>Cancel</p>
            <p onClick={AddAndCloseModal} className='flex-1 flex items-center justify-center px-4 py-6 bg-primary-light text-white rounded-xl cursor-pointer hover:bg-primary-dark'>Add</p>
          </div>
        </div>
      </div>
    </div>
  );
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
  CloseModalWindow: PropTypes.func,
  currentStatus: PropTypes.bool
};

export default AddProduct;
