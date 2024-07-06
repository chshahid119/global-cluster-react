import React from 'react'
import {PropTypes} from "prop-types"

function Modal({children}) {
  return (
    <div className=' h-screen fixed w-screen top-0 left-0 border-2 bg-gray-400 bg-opacity-70 overflow-hidden ' >
             {children}
            </div>
  )
}

Modal.propTypes={
    children: PropTypes.node
}

export default Modal