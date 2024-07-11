import PropTypes from 'prop-types'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { MdDisabledVisible } from 'react-icons/md'

const LevelTable = ({ levels }) => {
  return (
    <div className="container mx-auto p-4 space-y-10">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <select className="border p-2 mr-2 outline-none rounded-md bg-white px-4 py-3">
            <option>Active</option>
            <option>Declined</option>
            <option>Az</option>
          </select>
          <button className="bg-primary text-white px-6 py-3 rounded-md">
            Search
          </button>
        </div>
        <button className="bg-primary text-white px-8 py-2 rounded flex  justify-between items-center">
          <span className="mr-2">+</span> <p>Add New</p>
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead className="rounded-lg bg-primary">
          <tr className=" text-white">
            <th className="py-10 px-6 text-left">Icon</th>
            <th className="py-10  text-left">Level</th>
            <th className="py-10 text-left">Name</th>
            <th className="py-10 text-left">Total Recruits</th>
            <th className="py-10 text-left">Bonus</th>
            <th className="py-10 text-left">Status</th>
            <th className="py-10 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level, index) => (
            <tr
              key={index}
              className="border-b mb-44" // Add margin here
            >
              <td className="py-10 px-6">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400" />
                  <div className="ml-1 w-4 h-4 bg-yellow-400"></div>
                  <div className="ml-1 w-4 h-4 bg-yellow-400"></div>
                </div>
              </td>
              <td className="py-10">{level.level}</td>
              <td className="py-10">{level.name}</td>
              <td className="py-10">{level.totalRecruits}</td>
              <td className="py-10">${level.bonus.toFixed(2)}</td>
              <td className="py-10">
                <span className="bg-green-100 text-green-800 px-4 py-3 rounded-full text-xl">
                  Enabled
                </span>
              </td>
              <td className="py-10 flex gap-3">
                <div className="bg-blue-100 border border-blue-500 rounded-lg px-4 flex gap-3 justify-between items-center text-blue-500">
                  <CiEdit />
                  <p className=" mr-2 ">Edit</p>
                </div>
                <div className="bg-orange-100 border border-orange-500 px-4 rounded-lg flex gap-3 justify-between items-center text-orange-500">
                  <MdDisabledVisible />
                  <p className=" mr-2 ">Disable</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Define the prop-types
LevelTable.propTypes = {
  levels: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      totalRecruits: PropTypes.number.isRequired,
      bonus: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default LevelTable
