import React from 'react';
import { BsCpu } from 'react-icons/bs';

interface StoragesProps {
    label: string;
    description?: string;
    storage?: string;
    remainingStorage?: string;
}

    const Storages = ({label, description, storage, remainingStorage }: StoragesProps) => {
  return (
    <div className='flex flex-col items-start gap-5 w-full'>
        <div className='flex flex-row gap-4 w-full justify-between'>
        <div className='flex flex-col'>
           <div className='text-xl font-bold text-[#2E2A47]'>
             {label}
           </div>

           <div className='text-base text-[#636568]'>
             {description}
           </div>
        </div>
        <div className='bg-blue-500 h-fit bg-opacity-10 rounded-lg flex items-center p-4'>
          <BsCpu className='size-8 text-[#2d87ee]'/>
        </div>
        </div>

        <div className='w-full gap-2 flex flex-col'>
           <div className='bg-[#8b8a8a] h-[12px] w-full rounded-xl'>
             
           </div>

           <div className='flex flex-row gap-2 font-semibold text-base text-[#2E2A47]'>
            {/* <span className='text-base text-[#f57676]'>Remaining</span> */}
            {/* <div className='flex gap-1'> */}
             {remainingStorage}
              <span>/</span>
             {storage}
            {/* </div> */}
           </div>
        </div>

    </div>
  );
}

export default Storages;
