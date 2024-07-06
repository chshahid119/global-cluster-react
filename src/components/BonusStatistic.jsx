import React from 'react';
import PropTypes from "prop-types"
import { CgNotes } from "react-icons/cg";

function BonusStatistic({iconBgColor,purpose}) {
    
   
 return (
    <div className='flex h-fit flex-1 flex-col  gap-5 bg-[#e9f0f5]  rounded-xl px-10 py-8 text-gray-600'>
    <div className={`${iconBgColor==='green' ? 'bg-green-400' : ''} ${iconBgColor==='pink' ? 'bg-pink-400' : ''}
    ${iconBgColor==='orange' ? 'bg-orange-400' : ''} p-4 rounded-full w-fit`}>
      <CgNotes  className='text-3xl text-white'/>
    </div>

<div>
    <p className='font-semibold text-2xl'>$1,000,00.0</p>
<p className=''>{purpose}</p>
</div>


    </div>
  )
}

BonusStatistic.propTypes={
    iconBgColor: PropTypes.string,
    purpose: PropTypes.string
}

export default BonusStatistic