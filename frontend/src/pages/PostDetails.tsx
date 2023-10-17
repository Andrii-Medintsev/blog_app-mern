import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Comment from '../components/Comment';
import axios from 'axios';
import { URL } from './url';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { ContextType, UserContext } from '../context/UserContext';
import Loader from '../components/Loader';

const PostDetails = () => {
  const [post, setPost] = useState<Post | null>(null);
  const postId = useParams().id;
  const { user } = useContext(UserContext) as ContextType;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(URL + '/api/posts/' + postId);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.delete(URL + '/api/posts/' + postId, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  let date;
  let time;

  if (post) {
    date = new Date(post.updatedAt).toLocaleDateString();
    time = new Date(post.updatedAt).toLocaleTimeString().slice(0, -3);
  }

  return (
    <>
      {isLoading ? (
      <div className='flex grow justify-center items-center'>
        <Loader />
      </div>
      ) : (
        <div className='grow px-8 md:px-[200px] mt-8'>
          <div className='flex justify-between items-center space-x-2'>
            <h1 className='text-2xl font-bold text-black'>{post?.title}</h1>
            {user?._id === post?.userId && (
              <div className='flex justify-center items-center space-x-2'>
                <p className='cursor-pointer hover:scale-110' onClick={() => navigate('/edit/' + postId)}>
                  <BiEdit />
                </p>
                <p className='cursor-pointer hover:scale-110' onClick={handleDeletePost}>
                  <MdDelete />
                </p>
              </div>)
            }
          </div>
          <div className='flex justify-between items-center mt-2 md:mt-4'>
            <p>{`@${post?.username}`}</p>
            <div className='flex space-x-2'>
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
          <p className='text-sm md:text-lg text-justify mt-8'>{post?.desc}</p>

          {/* comments */}
          <div className='flex flex-col mt-6'>
            <h3 className='font-bold'>Comments:</h3>
            {/* comment */}
            <Comment />
            <Comment />

            {/* Write comment */}
            <div className='flex flex-col mt-4 md:flex-row w-full rounded-md md:border'>
              <input
                type='text'
                placeholder='Write a comment'
                className='md:w-[80%] border md:border-none px-4 py-2 mt-4 md:mt-0 outline-0 rounded-md'
              />

              <button className='bg-black text-white text-xs px-4 py-2 md:w-[20%] mt-4 md:mt-0 rounded-md md:rounded-e-md md:rounded-s-none'>
                Add Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
