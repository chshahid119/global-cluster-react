import PropTypes from 'prop-types'
import { FaRegTrashAlt } from 'react-icons/fa'
import AuthorImg from './../assets/images/profileImg.jpeg'

const PostCard = ({ author, username, date, time, content }) => {
  return (
    <div className="flex border rounded-lg shadow-sm overflow-hidden text-gray-500">
      <div className="w-1/4  bg-gray-100 flex p-7 flex-col items-center">
        <img
          src={AuthorImg}
          alt={author.name}
          className="w-20 h-20 rounded-full mb-2"
        />
        <h3 className="font-semibold text-lg">{author.name}</h3>
        <p className="text-gray-600">@{username}</p>
        <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded flex items-center">
          <FaRegTrashAlt className="mr-2" /> Delete
        </button>
      </div>
      <div className="w-3/4 px-8 py-10">
        <p className="text-sm text-gray-600 mb-2">
          Posted on {date} @ {time}
        </p>
        <p className="">{content}</p>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  author: PropTypes.string,
  username: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.string,
}

export default PostCard
