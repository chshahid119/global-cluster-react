import React from 'react'
import { IoMdAdd } from "react-icons/io";


function Button() {
  return (
    <div className='bg-primary-dark text-white font-semibold w-fit px-4 py-4 rounded-md flex items-center justify-center gap-4'>
      <IoMdAdd />
    <p>Add new Product</p>
    </div>
  )
}

export default Button
