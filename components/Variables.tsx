import React from 'react';
import Storages from './Storages';

const Variables = () => {
  return (
    <div className='-mt-20 gap-5 flex mx-6 xl:mx-0 flex-col justify-center items-center xl:flex-row xl:justify-evenly'>
        <div className='bg-gray-200 xl:shadow-lg flex items-center w-full xl:w-[30vw] h-[30vh] rounded-lg px-4 '>
          <Storages 
            label='RAM'
            description='Resource for Creating New Project and Servers'
            remainingStorage='4GB'
            storage='4GB'
          />
        </div>
        <div className='bg-gray-200 xl:shadow-lg flex items-center w-full xl:w-[30vw] h-[30vh] rounded-lg px-4 '>
          <Storages 
            label='CPU'
            description='Resource for Creating New Project and Servers'
            remainingStorage='1 core'
            storage='1 core'
          />
        </div>
        <div className='bg-gray-200 xl:shadow-lg flex items-center w-full xl:w-[30vw] h-[30vh] rounded-lg px-4'>
          <Storages 
            label='Disc'
            description='Resource for Creating New Project and Servers'
            remainingStorage='10GB'
            storage='10GB'
          />
        </div>
    </div>
  );
}

export default Variables;
