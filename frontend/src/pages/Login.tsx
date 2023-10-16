import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-full grow flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] min-w-[300px]'>
        <h1 className='text-2xl font-bold text-left'>Log in to your account</h1>
        <input
          type='email'
          className='w-full px-4 py-2 border border-black outline-0 rounded-md'
          placeholder='Enter your email'
        />
        <input
          type='password'
          className='w-full px-4 py-2 border border-black outline-0 rounded-md'
          placeholder='Enter your password'
        />
        <button className='w-full px-4 py-2 text-lg font-bold text-white bg-black rounded-lg hover:shadow-lg hover:bg-gray-800'>
          Log in
        </button>
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
