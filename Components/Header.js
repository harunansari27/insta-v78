import Image from 'next/image';
import React from 'react';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'


export default function Header() {
  return (
  
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
         <img src="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/302547608_1208764246573353_2342465497560905373_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GkQvg9fl7-kAX9lBrFT&_nc_ht=scontent.fdel27-5.fna&oh=00_AT8MyU-3-Nxg8YTL7jvTcTW4-NA6XHRpzWwLjllFKlWmiw&oe=63499F19"  alt="user-image" className="h-10 rounded-full cursor-pointer"/>
         </div>
    
    </div>
  );
}
