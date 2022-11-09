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
                src="https://i.imgur.com/HSm7kRO.jpg"
                layout='fill'
                className="object-contain"
            />
        </div>

        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
            <Image
                src="https://i.ibb.co/Z2WZ7dR/logo-jpg-2.jpg"
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
         <img src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/310529942_1234093307373780_5229665497444732448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HkrNtRCdFYYAX-7kec-&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDXJu3wKR4AiiDC5o_QwgjUL3fmg3M_zTpyZ56Jg0uCag&oe=636B7BB2"  alt="user-image" className="h-10 rounded-full cursor-pointer"/>


         </div>
    
    </div>

    </div>
    );
}
