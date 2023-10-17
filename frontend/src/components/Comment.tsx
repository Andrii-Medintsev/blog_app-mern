import { MdDelete } from 'react-icons/md';
import { CommentType } from '../types/Comment';
import axios from 'axios';
import { URL } from '../pages/url';
import { useContext } from 'react';
import { ContextType, UserContext } from '../context/UserContext';

type Props = {
  comment: CommentType;
};

const Comment: React.FC<Props> = ({ comment }) => {
  const { user } = useContext(UserContext) as ContextType;
  const date = new Date(comment.updatedAt).toLocaleDateString();
  const time = new Date(comment.updatedAt).toLocaleTimeString().slice(0, -3);

  const handleCommentDelete = async () => {
    try {
      await axios.delete(URL + '/api/comments/' + comment._id, { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-2 bg-gray-50 rounded-lg mt-2'>
      <div className='flex items-center justify-between p-1'>
        <h3 className='font-semibold text-gray-600'>{`@${comment.author}`}</h3>
        <div className='flex justify-center items-center space-x-4 text-gray-500 text-sm'>
          <p className=''>{date}</p>
          <p className=''>{time}</p>
          {user?._id === comment.userId && (
            <div className='flex justify-center items-center space-x-2'>
              <p onClick={handleCommentDelete} className='cursor-pointer hover:scale-125'>
                <MdDelete />
              </p>
            </div>
          )}
        </div>
      </div>
      <p className='px-4 mt-2'>{comment.comment}</p>
    </div>
  );
};

export default Comment;
