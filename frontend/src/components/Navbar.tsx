import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextType, UserContext } from '../context/UserContext';
import axios from 'axios';
import { URL } from '../pages/url';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext) as ContextType;

  const handleLogout = async () => {
    try {
      await axios.get(
        URL + '/api/auth/logout',
        {withCredentials: true},
      );

      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4 text-white bg-black'>
      <h1 className='text-xl font-extrabold hover:underline underline-offset-8'>
        <NavLink
          to='/'
          style={({ isActive }) => {
            return {
              // fontWeight: isActive ? 'bold' : '',
              textDecoration: isActive ? 'underline' : 'none',
            };
          }}
        >
          Blog
        </NavLink>
      </h1>
      <div className='flex items-center justify-center space-x-2 md:space-x-4'>
        {user ? (
          <>
            <h3 className=' hover:underline underline-offset-8'>
              <NavLink
                to='/write'
                style={({ isActive }) => {
                  return {
                    // fontWeight: isActive ? 'bold' : '',
                    textDecoration: isActive ? 'underline' : 'none',
                  };
                }}
              >
                Write post
              </NavLink>
            </h3>
            <h3 className=' hover:underline underline-offset-8'>
              <NavLink
                to='/profile/12'
                style={({ isActive }) => {
                  return {
                    // fontWeight: isActive ? 'bold' : '',
                    textDecoration: isActive ? 'underline' : 'none',
                  };
                }}
              >
                Profile
              </NavLink>
            </h3>
            <h3 className=' hover:underline underline-offset-8' onClick={handleLogout}>
              <NavLink to='/'>
                Logout
              </NavLink>
            </h3>
          </>
        ) : (
          <>
            <h3 className='hover:underline underline-offset-8'>
              <NavLink
                to='/login'
                style={({ isActive }) => {
                  return {
                    // fontWeight: isActive ? 'bold' : '',
                    textDecoration: isActive ? 'underline' : 'none',
                  };
                }}
              >
                Login
              </NavLink>
            </h3>
            <h3 className='hover:underline underline-offset-8'>
              <NavLink
                to='/register'
                style={({ isActive }) => {
                  return {
                    // fontWeight: isActive ? 'bold' : '',
                    textDecoration: isActive ? 'underline' : 'none',
                  };
                }}
              >
                Register
              </NavLink>
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
