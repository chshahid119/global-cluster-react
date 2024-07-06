import React from 'react';
import PropTypes from 'prop-types'
// import MemberImg from './../assets/images/userImg.png'

function RowData({memberName,userName,children,img}) {
  return (
    <div className='flex justify-between items-center border-b px-8 py-4'>
        <div className='flex gap-2 items-center justify-center'>
            <img className='w-[5rem]' src={img} alt="user profile img" />
            <div className='flex flex-col gap-1 items-center justify-center'>
                <p className='font-semibold'>{memberName}</p>
                <p className='text-gray-400'>{userName}</p>
            </div>

        </div>
    {children}
    </div>  
  )
}



RowData.propTypes={
    memberName: PropTypes.string,
    userName: PropTypes.string,
    children: PropTypes.node,
    img: PropTypes.string
}

export default RowData