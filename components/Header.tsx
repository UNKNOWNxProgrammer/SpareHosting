import React from "react";
import Image from "next/image";
import Button from "./Button";
import MobileNav from "./MobileNav";
import Greeting from "./Greeting";

const Header = () => {
  return (
    <div className="bg-blue-600 flex flex-col gap-10 h-[30vh] xl:h-[35vh] lg:px-10 pt-6 px-5">
      <div className="flex justify-between">
        <div className="gap-8 hidden xl:flex">
          <div className="flex gap-4">
            <img src="/logo.svg" alt="LOGO" width={60} />
            <div className="items-center flex justify-center">
              <span className="text-[#fff] font-bold text-[2.3em] cursor-default">
                Spare Hosting
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Button label="Overview" />
            <Button label="Economy" />
            <Button label="Store" />
            <Button label="Premium" />
          </div>
        </div>
        <div className="flex sm:hidden md:flex xl:hidden">
          <MobileNav />
        </div>
        <div className="flex items-center justify-center">Clerk</div>
      </div>

      {/* <div className="hidden lg:flex">
        <Greeting />
      </div> */}
    </div>
  );
};

export default Header;
