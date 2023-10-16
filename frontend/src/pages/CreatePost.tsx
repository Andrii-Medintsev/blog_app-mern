const CreatePost = () => {
  return (
    <div className='grow'>
      <div className='w-full flex flex-col justify-center px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold text-xl md:text-2xl'>Create a post</h1>
        <form action='/' className='flex flex-col space-y-4 md:space-y-4 mt-4'>
          <input
            type='text'
            placeholder='Enter post title'
            className='w-full px-4 py-2 outline-none border rounded-md'
          />
          <textarea
            name='postBody'
            rows={5}
            placeholder={`What's on your mind?`}
            className='px-4 py-2 resize-none outline-none border rounded-md'
          ></textarea>
          <div className='flex items-center space-x-4 mt-8'>
            <button type='submit' className='text-white font-semibold bg-black px-4 py-2 hover:shadow-lg rounded-md'>
              Create
            </button>
            <button type='reset' className='px-4 py-2 rounded-md border hover:shadow-md'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
