import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from './url';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL+'/api/auth/register', { username, email, password });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setIsError(false);
      navigate('/login');

    } catch (error) {
      setIsError(true)
      console.log(error);
    }
  };

  return (
    <div className='w-full flex grow justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] min-w-[300px]'>
        <h1 className='text-2xl font-bold text-left'>Create an account</h1>

        <input
          type='text'
          className='w-full px-4 py-2 border border-black outline-0 rounded-md'
          placeholder='Enter your name'
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
          onClick={handleRegister}
        >
          Register
        </button>
        {isError && <h3 className='text-red-500 text-sm'>Something went wrong</h3>}

        <div className='flex space-x-3'>
          <p>Already have an account?</p>
          <p className='text-gray-500 hover:text-black'>
            <Link to='/login'>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
