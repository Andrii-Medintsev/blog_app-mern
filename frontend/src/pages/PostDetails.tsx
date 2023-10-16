import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Comment from '../components/Comment';

const PostDetails = () => {
  return (
      <div className='grow px-8 md:px-[200px] mt-8'>
        <div className='flex justify-between items-center space-x-2'>
          <h1 className='text-2xl font-bold text-black'>
            10 Uses of Artificial Intelligence in Day to Day life
          </h1>
          <div className='flex justify-center items-center space-x-2'>
            <p><BiEdit /></p>
            <p><MdDelete /></p>
          </div>
        </div>
        <div className='flex justify-between items-center mt-2 md:mt-4'>
          <p>@AndriiMedintsev</p>
          <div className='flex space-x-2'>
            <p>16/10/2023</p>
            <p>12:05</p>
          </div>
        </div>
        <p className='text-sm md:text-lg text-justify mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos minima illo omnis dolorum ipsa natus? Repellat, aperiam, quaerat reprehenderit ipsa facilis alias sit earum dolorum aliquam consequuntur soluta perferendis est rem nulla iusto reiciendis, accusantium molestiae voluptas exercitationem neque iure? Laborum cupiditate alias, voluptate obcaecati iste dignissimos voluptas quisquam!
        </p>

        {/* comments */}
        <div className='flex flex-col mt-6'>
          <h3 className='font-bold'>Comments:</h3>
          {/* comment */}
          <Comment />
          <Comment />

          {/* Write comment */}
          <div className='flex flex-col mt-4 md:flex-row w-full rounded-md md:border'>
            <input type="text" placeholder='Write a comment' className='md:w-[80%] border md:border-none px-4 py-2 mt-4 md:mt-0 outline-0 rounded-md' />

            <button className='bg-black text-white text-xs px-4 py-2 md:w-[20%] mt-4 md:mt-0 rounded-md md:rounded-e-md md:rounded-s-none'>Add Comment</button>
          </div>
        </div>
      </div>
  );
};

export default PostDetails;
