import Image from 'next/image';
import React from 'react';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'


export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
  <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image
                src="https://i.imgur.com/wvLiKam.png"
                layout='fill'
                className="object-contain"
            />
        </div>

        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                layout='fill'
                className="object-contain"
            />
        </div>
        {/* Middle  */}
        
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
          <SearchIcon className="h-5 text-gray-500"/>
          </div>
          <input type="text" placeholder="Search" className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md '/>
        </div>
         
         {/* Right  */}

         <div className="flex space-x-4 items-center">
         <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
         <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"/>
         <img src="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/269966508_1049051355877977_3952131903449599991_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=VbOoBmUsm9oAX-3ZT0G&_nc_ht=scontent.fdel27-5.fna&oh=00_AT_NqBGHmZzpMoSM10TopijoFRCVtL6h_b4SZZbK0xNTgg&oe=634A2C09"  alt="user-image" className="h-10 rounded-full cursor-pointer"/>
         </div>
    
    </div>

    </div>
    );
}
