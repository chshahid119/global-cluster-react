import PropTypes from 'prop-types'
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import PostCard from './../components/PostCard'
import FileUpload from './FileUpload'

const post = {
  author: {
    name: 'Sergio Souza',
    avatar: '/path/to/avatar.jpg',
  },
  username: 'sergio.souza',
  date: 'Monday, 09th October 2023',
  time: '07:24',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non nulla a massa consequat ornare. Aliquam id lacus eget lacus ultrices varius ut ac libero. Morbi facilisis ante quis massa vulputate, nec tempor eros aliquam. Mauris id turpis ullamcorper, accumsan tortor et, facilisis nisl. Sed tristique placerat mauris, vel aliquam enim.',
}

function TicketDetail({ data, setSupportTicketDetail }) {
  return (
    <section className="m-20 bg-white p-10  rounded-xl">
      <p className="p-4">Reply Ticket</p>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-4">
            <p className="text-center bg-green-100 text-green-500 border border-green-400 rounded-full w-fit px-6 flex items-center justify-center">
              Open
            </p>
            <p>{data.subject.split(' ')[0]}</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div
            className="flex gap-3 text-white font-semibold rounded-full px-6 py-4 bg-red-500 w-fit items-center select-none cursor-pointer"
            onClick={() => setSupportTicketDetail(false)}
          >
            <IoMdCloseCircle className="text-2xl" />
            <p>Close Ticket</p>
          </div>
        </div>
        <div className=" w-full">
          <textarea
            className="w-full border outline-none rounded-xl p-6"
            name="ticket"
            id="ticket"
            rows="6"
          ></textarea>
        </div>

        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <p className="font-semibold">Attachments:</p>
            <p className="text-red-600">
              Max 5 files can be uploaded. Maximum Upload Size is 256MB
            </p>
          </div>
          <FileUpload />
          <p className="text-gray-500 text-xl p-2">
            Allowed File Extensions .jpeg, .jpg, .png, .pdf, .doc, .docx
          </p>
        </div>

        <PostCard {...post} />
      </div>
    </section>
  )
}

TicketDetail.propTypes = {
  data: PropTypes.object,
  setSupportTicketDetail: PropTypes.func,
}

export default TicketDetail
