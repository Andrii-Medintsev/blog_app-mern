import { useContext } from 'react';
import { ContextType, UserContext } from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext) as ContextType;
  return (
    <div className='grow px-8 md:px-[200px] mt-8'>
      {/* <div className='flex flex-col w-full md:w-[70%]'>Your posts</div> */}

      <div className='flex flex-col space-y-4 w-full max-w-xl mx-auto'>
        <h1 className='text-xl font-bold md-4'>Profile</h1>
        <input
          type='text'
          placeholder='Enter your new name'
          className='outline-none px-4 py-2 border rounded-md'
          value={user?.username}
        />
        <input
          type='email'
          placeholder='Enter your new email'
          className='outline-none px-4 py-2 border rounded-md'
          value={user?.email}
        />
        <input
          type='password'
          placeholder='Enter your new password'
          className='outline-none px-4 py-2 border rounded-md'
        />
        <div className='flex items-center space-x-4 mt-8'>
          <button className='text-white font-semibold bg-black px-4 py-2 hover:shadow-lg rounded-md'>
            Update
          </button>
          <button className='px-4 py-2 rounded-md border hover:shadow-md'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
