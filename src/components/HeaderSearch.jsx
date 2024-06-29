import React from 'react'
import { FaSearch } from 'react-icons/fa';


function HeaderSearch() {
  return (

    
    
      <div className="flex items-center gap-6 w-[50rem] bg-[#f9fafb]  py-5 px-10">
          <div className="">
            <FaSearch style={{ color: '#0369a1', fontSize: '1.5rem' }} />
          </div>
          <input
            type="text"
            className="bg-[#f9fafb] outline-none  rounded-xl "
            placeholder="Search Here...."
          />
        </div>

  )
}

export default HeaderSearch
