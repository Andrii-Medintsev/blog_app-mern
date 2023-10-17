import { Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import EditPost from './pages/EditPost';

const NoPage = () => (
  <div className='flex flex-col grow items-center pt-8'>
    <h1 className='text-2xl md:text-3xl mb-4'>No such page</h1>
    <p className='text-xl text-gray-600 hover:underline underline-offset-4'>
      <Link to='/'>
        Go home
      </Link>
    </p>
  </div>
)

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
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
