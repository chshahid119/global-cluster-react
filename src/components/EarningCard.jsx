import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdArrowUpward } from "react-icons/md";



function EarningCard() {
  return (
    <div className='flex h-fit flex-1 flex-col gap-4 bg-primary-light  justify-between rounded-xl px-10 py-8 text-white'>
    <div className='bg-red-500 p-4 rounded-full w-fit'>
      <CgNotes  className='text-3xl '/>
    </div>

<p className='font-semibold text-4xl'>$1,000,00.0</p>
<p className='font-semibold'>Total Earnings</p>
<div className='flex gap-4 items-center text-green-500 text-xl'><MdArrowUpward/> <p>6.7% Increase</p></div>

    </div>
  )
}

export default EarningCard