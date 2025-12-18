import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* SEARCH BAR */}
        <div className='hidden md:flex items-center gap-2  text-xs rounded-full ring-[1.5px] ring-gray-300 px-2  '>
            <Image src={`/search.png`} alt="Search" width={14} height={14}/>
            <input type="text" placeholder="search....." className='w-[200px] p-2 bg-transparent outline-none' />

        </div>
        

        {/* USER PROFILE */}
        <div className='flex items-center gap-6 w-full justify-end'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src={`/message.png`} alt="Notification" width={20} height={20}/>
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src={`/announcement.png`} alt="Notification" width={20} height={20}/>
                <div className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-4 font-medium'>Abu Huzaifa</span>
                <span className='text-[10px] leading-3 text-gray-500 text-right'>Admin</span>
            </div>
            <Image src={`/avatar.png`} alt="Avatar" width={30} height={30} className='rounded-full'/>
        </div>
        
    </div>
  )
}

export default Navbar