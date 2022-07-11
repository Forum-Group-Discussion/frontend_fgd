import React from 'react'
import Joko from "../../../assets/img/Admin/JOK.png"

const data = [
  {
      id: 1,
      name: "beery burryyy",
      profpic: "https://i.pinimg.com/736x/9c/a2/5a/9ca25a9fe7aaaa1c7cb65e472c6820a8.jpg",
      reportText: "This thread contains inappropriate and pornographic elements",
      time: "2 minutes ago"
  },
  {
      id: 2,
      name: "darkAngel",
      profpic: "https://divedigital.id/wp-content/uploads/2021/11/74.jpg",
      reportText: "This account is indicated to violate....",
      time: "2 minutes ago"
  },
  {
      id: 3,
      name: "flim zero",
      profpic: "https://i.pinimg.com/736x/a0/a1/75/a0a175df85e1abceada797d39310fee2.jpg",
      reportText: "This thread contains inappropriate and pornographic elements",
      time: "2 minutes ago"
  },
]

export default function Report() {
  return (
    <div id='report'>
      {data?.map(item=>(
        <div key={item.id} className="rounded-md border-gray-500/10 border-2 mb-5">
          <div id='details' className="xl:px-20 md:px-10 lg:px-15 md:py-8 py-4 px-2 flex justify-between">
            <div id='reporter' className="flex place-items-center">
                <img src={item.profpic} alt="Icon-game" className="rounded-full aspect-square w-8 sm:w-12 md:w-16 lg:w-20"/>
              <div className="xl:ml-8 sm:ml-5 ml-2 max-w-[70%]">
                <div className="font-bold text-sm sm:text-base mb-2 truncate">{item.name}</div>
              </div>
            </div>
            <div id='time'>
              <div className="text-white/50 text-xs sm:text-base">{item.time}</div>
            </div>
          </div>
          <div className="border-t-2 border-gray-500/10"> 
            <div id='report-content' className="m-4 text-sm sm:text-base">
              {item.reportText}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
