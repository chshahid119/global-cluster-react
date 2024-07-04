import React from 'react'
import {PropTypes} from "prop-types"

function ActionNotification({message}) {
  return (
    <div className='bg-white
    py-10 px-20 rounded-lg text-primary-dark absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>{message}</div>
  )
}

ActionNotification.propTypes={
    message: PropTypes.string
}

export default ActionNotification