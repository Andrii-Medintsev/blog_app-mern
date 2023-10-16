import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const Comment = () => {
  return (
    <div className='p-2 bg-gray-50 rounded-lg mt-2'>
    <div className='flex items-center justify-between p-1'>
      <h3 className='font-semibold text-gray-600'>@andrii</h3>
      <div className='flex justify-center items-center space-x-4 text-gray-500 text-sm'>
        <p className=''>16/10/2023</p>
        <p className='' >12:05</p>
        <div className='flex justify-center items-center space-x-2'>
          <p><BiEdit /></p>
          <p><MdDelete /></p>
        </div>
      </div>
    </div>
    <p className='px-4 mt-2'>Nice information!!!</p>
  </div>
  )
}

export default Comment;