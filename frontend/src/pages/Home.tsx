import { useContext, useEffect, useState } from 'react';
import { ContextType, UserContext } from '../context/UserContext';
import axios from 'axios';
import HomePosts from '../components/HomePosts';
import { URL } from './url';
import { Post } from '../types/Post';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext) as ContextType;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(URL + '/api/posts/');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='grow px-6 md:px-[200px] mt-8'>
      {isLoading ? (
        <div className='h-full flex justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <>
          {posts.map((post) => (
            <Link to={user ? `/posts/post/${post._id}` : '/login'} key={post._id}>
              <HomePosts post={post} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
