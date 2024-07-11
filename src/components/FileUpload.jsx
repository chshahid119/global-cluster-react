import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = event => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  return (
    <div className="flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-l-md py-4 px-6 outline-none"
          placeholder="Select your file!"
          value={selectedFile ? selectedFile.name : ''}
          readOnly
        />
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
      <button className="bg-primary-dark text-white px-6 py-4 rounded-r-md hover:bg-primary-light">
        Upload
      </button>
      <button className="bg-navy-800 text-white p-2 ml-1 rounded-md hover:bg-navy-900">
        <IoMdAdd className="text-xl" />
      </button>
    </div>
  )
}

export default FileUpload
