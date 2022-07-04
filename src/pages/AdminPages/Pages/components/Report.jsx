import React from 'react'
import Joko from "../../../../assets/img/Admin/JOK.png"

export default function Report() {
  return (
    <div className="rounded-md border-gray-500/10 border-2 mb-5">
    <div className="p-5 flex justify-between">
      <div className="gird flex place-items-center">
        <div className="flex place-items-center">
          <img src={Joko} alt="Icon-game" className="rounded-full xl:w-[70px] lg:w-[80%] md:w-[70%]"/>
        </div>
        <div className="xl:ml-8 md:ml-5">
          <div className="text-base mb-2">Ultramen</div>
        </div>
      </div>
      <div>
        <div className="text-white/50 text-xs">20 Days Ago</div>
      </div>
    </div>
    <div className='px-5'>
    <div className='border-t border-white/20 py-5'>AFK</div>
    </div>
  </div>
  )
}
