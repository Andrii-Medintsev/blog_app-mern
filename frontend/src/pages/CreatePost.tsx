import { useContext, useState } from 'react';
import { ContextType, UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from './url';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { user } = useContext(UserContext) as ContextType;
  const navigate = useNavigate();

  const handlePostCreation = async (e: React.FormEvent) => {
    e.preventDefault();

    const post = {
      title,
      desc,
      username: user?.username,
      userId: user?._id,
    };

    try {
      const res = await axios.post(URL + '/api/posts/create', post, { withCredentials: true });
      navigate('/posts/post/' + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grow'>
      <div className='w-full flex flex-col justify-center px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold text-xl md:text-2xl'>Create a post</h1>
        <form className='flex flex-col space-y-4 md:space-y-4 mt-4'>
          <input
            type='text'
            placeholder='Enter post title'
            className='w-full px-4 py-2 outline-none border rounded-md'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name='postBody'
            rows={5}
            placeholder={`What's on your mind?`}
            className='px-4 py-2 resize-none outline-none border rounded-md'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className='flex items-center space-x-4 mt-8'>
            <button
              onClick={handlePostCreation}
              className='text-white font-semibold bg-black px-4 py-2 hover:shadow-lg rounded-md'
            >
              Create
            </button>
            <Link to='/'>
              <button
                type='reset'
                className='px-4 py-2 rounded-md border hover:shadow-md'
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
