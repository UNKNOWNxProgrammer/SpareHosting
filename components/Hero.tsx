import React from 'react';

const Hero = () => {
  return (
    <div className='bg-gray-200 bg-opacity-80 m-6 md:mt-10 lg:mt-6 shadow-lg rounded-lg p-6 h-[80vh] border-gray-500 
    border-[1px] border-opacity-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      <div className='flex flex-col gap-2 p-3 max-h-[30vh] border-dashed border-gray-300 border-[3px] rounded-lg
       bg-gray-100 bg-opacity-50 items-center justify-center hover:cursor-pointer'>
        <div className='bg-gray-200 rounded-full p-5'>
         <img src="/add-meeting.svg" alt="" className='size-10'/>
        </div>
        <div className='text-gray-400 font-medium text-lg'>
          <span>Create New Project</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
