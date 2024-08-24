import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx';

  
const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger><RxHamburgerMenu className='size-8 text-[#fff]'/></SheetTrigger>
        <SheetContent>
          <div>
            <ul>
                <li className='h-14 px-6 w-full hover:bg-[#97979734] text-[1em] items-center flex cursor-pointer'>
                    Overview
                </li>
                <li className='h-14 px-6 w-full hover:bg-[#97979734] text-[1em] items-center flex cursor-pointer'>
                    Economy
                </li>
                <li className='h-14 px-6 w-full hover:bg-[#97979734] text-[1em] items-center flex cursor-pointer'>
                    Store
                </li>
                <li className='h-14 px-6 w-full hover:bg-[#97979734] text-[1em] items-center flex cursor-pointer'>
                    Premium
                </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>


    </div>
  );
}

export default MobileNav;
