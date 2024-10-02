import Image from 'next/image'
import React from 'react'
import icon from '@/Assets/mainIcon.png'
import { Download, Search } from 'lucide-react'

const Main = () => {
  return (
    <div>
        <div className=' flex flex-col items-center justify-center p-[10%] mb-4'>
            <Image src={icon} alt='icon' className='w-36'/>
            <h1 className='text-orange-50 text-3xl'>DuckDuckGo</h1>
            <div className="pt-10 relative">
                <input type='text' className='w-[480px] h-9 bg-[#333333] rounded-md p-4 outline-none' />
                <Search size={14} className='absolute right-3 transform -translate-y-6 text-zinc-400' />
            </div>
            <p className='font-thin text-sm pt-5 text-white/75'>Privacy, simplified.❤️<span className='hover:underline'><a href="#">Help Spread DuckDuckGo!</a></span></p>
            <button className='flex flex-grow bg-blue-500/0 border border-white/20 text-white p-2 rounded-md mt-5 text-xs font-bold'><Download size={17} className='mr-2'/> Download DuckDuckGo for Windows</button>
        </div>
    </div>
  )
}

export default Main