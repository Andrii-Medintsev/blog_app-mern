// import photo from '../post-img.jpg';

function HomePosts() {
  return (
    <div className='w-full flex mt- space-x-4 hover:bg-gray-100 hover:shadow-lg p-4 md:p-8 rounded-md cursor-pointer'>
      {/* <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src={photo} alt="post_photo" className='w-full h-full object-cover'/>
      </div> */}

      <div className='flex flex-col'>
        <h1 className='text-xl font-bold mb-2 md:mb-4 md:text-2xl'>
          10 Uses of Artificial Intelligence in Day to Day life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <p>@AndriiMedintsev</p>
          <div className='flex space-x-2'>
            <p>16/10/2023</p>
            <p>12:05</p>
          </div>
        </div>
        <p className='text-sm md:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eos minima illo omnis dolorum ipsa natus? Repellat, aperiam, quaerat reprehenderit ipsa facilis alias sit earum dolorum aliquam consequuntur soluta perferendis est rem nulla iusto reiciendis, accusantium molestiae voluptas exercitationem neque iure? Laborum cupiditate alias, voluptate obcaecati iste dignissimos voluptas quisquam!</p>
      </div>
    </div>
  )
}

export default HomePosts