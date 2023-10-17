/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ContextType, UserContext } from '../context/UserContext';
import { URL } from './url';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const param = useParams().id;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, setUser } = useContext(UserContext) as ContextType;
  const navigate = useNavigate();
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [param]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(URL + '/api/users/' + user?._id, { withCredentials: true });

      setUsername(res.data.username)
      setEmail(res.data.email)
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileUpdate = async () => {
    setIsUpdated(false)
    try {
      const updatedInfo = {
        username,
        email,
      };

      await axios.put(URL + '/api/users/' + user?._id, updatedInfo, { withCredentials: true });
      setIsUpdated(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileDelete = async () => {
    try {
      await axios.delete(URL + '/api/users/' + user?._id, { withCredentials: true });
      await axios.get(
        URL + '/api/auth/logout',
        {withCredentials: true},
      );
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grow px-8 md:px-[200px] mt-8'>
      <div className='flex flex-col space-y-4 w-full max-w-xl mx-auto'>
        <h1 className='text-xl font-bold md-4'>Profile</h1>

        <input
          type='text'
          placeholder='Enter your new name'
          className='outline-none px-4 py-2 border rounded-md'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type='email'
          placeholder='Enter your new email'
          className='outline-none px-4 py-2 border rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className='flex items-center space-x-4 mt-8'>
          <button
            onClick={handleProfileUpdate}
            className='text-white font-semibold bg-black px-4 py-2 hover:shadow-lg rounded-md'
          >
            Update
          </button>
          <button
            className='px-4 py-2 rounded-md border hover:shadow-md'
            onClick={handleProfileDelete}
          >
            Delete
          </button>
        </div>
        {isUpdated && (
          <h3 className='text-green-500 text-sm'>Profile has been updated</h3>
        )}
      </div>
    </div>
  );
};

export default Profile;
