import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
       <img className='h-16 rounded-full border p-[2px]' src='https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/310529942_1234093307373780_5229665497444732448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HkrNtRCdFYYAX-7kec-&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDXJu3wKR4AiiDC5o_QwgjUL3fmg3M_zTpyZ56Jg0uCag&oe=636B7BB2' alt=''/>
    
    <div className='flex-1 ml-4'>
        <h2 className='font-bold' >codewithharun</h2>
        <h3 className='text-sm text-gray-400'>Welcome ro instagram</h3>
    </div>
    <button className='font-semibold text-blue-800 text-sm'>Sign out</button>
    </div>
  )
}
