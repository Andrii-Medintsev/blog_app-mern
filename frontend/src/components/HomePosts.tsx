import { Post } from '../types/Post';

type Props = {
  post: Post;
};

const HomePosts: React.FC<Props> = ({ post }) => {
  const date = new Date(post.updatedAt).toLocaleDateString();
  const time = new Date(post.updatedAt).toLocaleTimeString().slice(0, -3);

  return (
    <div className='w-full flex space-x-4 hover:bg-gray-100 hover:shadow-lg p-4 md:p-8 rounded-md cursor-pointer'>
      <div className='flex w-full flex-col'>
        <h1 className='text-xl font-bold mb-2 md:mb-4 md:text-2xl'>
          {post.title}
        </h1>
        <div className=' flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <p>{`@${post.username}`}</p>
          <div className='flex space-x-2'>
            <p>{date}</p>
            <p>{time}</p>
          </div>
        </div>
        <p className='text-sm md:text-lg text-justify'>
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
