import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts/post/:id' element={<PostDetails />} />
        <Route path='/write' element={<CreatePost />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
