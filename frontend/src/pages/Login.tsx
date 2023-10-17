import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from './url';
import { ContextType, UserContext } from '../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const { setUser } = useContext(UserContext) as ContextType;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + '/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      console.log('login successfull');
      navigate('/');
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <div className='w-full grow flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] min-w-[300px]'>
        <h1 className='text-2xl font-bold text-left'>Log in to your account</h1>

        <input
          type='email'
          className='w-full px-4 py-2 border border-black outline-0 rounded-md'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          className='w-full px-4 py-2 border border-black outline-0 rounded-md'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className='w-full px-4 py-2 text-lg font-bold text-white bg-black rounded-lg hover:shadow-lg hover:bg-gray-800'
          onClick={handleLogin}
        >
          Log in
        </button>

        {isError && (
          <h3 className='text-red-500 text-sm'>Something went wrong</h3>
        )}

        <div className='flex space-x-3'>
          <p>New here?</p>
          <p className='text-gray-500 hover:text-black'>
            <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
