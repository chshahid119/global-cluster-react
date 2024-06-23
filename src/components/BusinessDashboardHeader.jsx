import React from 'react';
import { LuBellRing } from 'react-icons/lu';
import ProfileImg from './../assets/images/profileImg.jpeg';
import { BiChevronDown } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import USAFlag from './../assets/images/usa.png';

function BusinessDashboardHeader() {
  return (
    <div>
      <div className="flex items-center justify-between shadow-sm px-4 py-6">
        <div className="flex items-center gap-20 justify-around  bg-[#f9fafb]  py-4 px-20">
          <div className="">
            <FaSearch style={{ color: '#0369a1', fontSize: '1.5rem' }} />
          </div>
          <input
            type="text"
            className="bg-[#f9fafb] outline-none  rounded-xl "
            placeholder="Search Here...."
          />
        </div>
        <div className="flex gap-8 items-center justify-between">
          <div className="flex gap-4 bg-[#f9fafb] py-4 px-6 rounded-md">
            <img className="w-10" src={USAFlag} alt="usa flag" />
            <select
              className="outline-none bg-[#f9fafb]"
              name="language"
              id="language"
            >
              <option value="EngUS">Eng (US)</option>
              <option value="EngUK">Eng (UK)</option>
              <option value="EngAUS">Eng (AUS)</option>
              <option value="Punjabi">Punjabi</option>
            </select>
          </div>
          <div className="p-4  bg-[#fffaf1]">
            <LuBellRing style={{ color: '#ffa412', fontSize: '1.8rem' }} />
          </div>
          <div className="flex items-center justify-center gap-8">
            <img
              className=" w-10 h-18 rounded-lg"
              src={ProfileImg}
              alt="Profile Img of Business Account"
            />
            <div className="flex flex-col">
              <p className="flex items-center gap-4 justify-between text-2xl">
                Silas Oladipo <BiChevronDown />
              </p>
              <p className="text-lg text-gray-500">@silasadahum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDashboardHeader;
