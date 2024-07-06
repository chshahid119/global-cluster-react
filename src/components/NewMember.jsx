import React from 'react'
import PropTypes from 'prop-types'
import RowData from './RowData'

function NewMember({memberName,userName,date,img}) {
  return (
    <div className=''>
        <RowData memberName={memberName} userName={userName} img={img} >
           <p className='px-6 py-1 bg-green-100 text-green-600 rounded-2xl mb-4'>20 May 2024</p>
        </RowData>
    </div>
  )
}


NewMember.propTypes={
    memberName: PropTypes.string,
    userName: PropTypes.string,
    date: PropTypes.string,
    img: PropTypes.string
}
export default NewMember