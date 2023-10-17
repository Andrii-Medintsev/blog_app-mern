import axios from 'axios'
import HomePosts from '../components/HomePosts'
import { URL } from './url'
import { useEffect, useState } from 'react'
import { Post } from '../types/Post'
import Loader from '../components/Loader'

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);


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
      setIsLoading(false)
    }
  }

  return (
    <div className='grow px-6 md:px-[200px] mt-8'>
      {isLoading ? (
        <div className='h-full flex justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <>
          {posts.map(post => (
            <HomePosts key={post._id} post={post} />
          ))}
        </>
      )}
    </div>
  )
}

export default Home