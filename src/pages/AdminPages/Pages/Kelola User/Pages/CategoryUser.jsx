import React from 'react'
import { useState } from 'react'
import Joko from "../../../../../assets/img/Admin/JOK.png"
import Sidebar from '../../../Components/Sidebar'
import Btnsuspen from '../../../Components/BtnSuspen'
import Report from  '../../../Components/Report'
import Thread from '../../../../UserPages/Account/components/Thread'
import { useEffect } from 'react'
import AOS from "aos";

export default function CategoryUser() {
  const [account, setAccount] = useState({name: "Hacked Account", profpic: "https://media.baamboozle.com/uploads/images/185613/1618204459_7530_url.jpeg", following: 1093392, followers: 9128, active: 2019})
  const [choose, setChoose] = useState("thread")
  const [statconv, setStatconv] = useState({following:0, followers:0})

  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);

  useEffect(() => {
    let ing = account.following;
    let ers = account.followers;

    if (account.following >= 1000) {
      ing = ing / 1000;
      ing = ing.toFixed(1);
    }
    if (account.followers >= 1000) {
      ers = ers / 1000;
      ers = ers.toFixed(1);
    }

    if (account.following >= 1000) {
      if (account.followers >= 1000) {
        setStatconv({following: ing+"k", followers: ers+"k"})
      } 
      else {
        setStatconv({following: ing+"k", followers: ers})
      }
    } 
    else {
      if (account.followers >= 1000) {
        setStatconv({following: ing, followers: ers+"k"})
      } 
      else {
        setStatconv({following: ing, followers: ers})
      }
    }
  }, [account]);

  const handleAction = e => {
      setChoose(e.target.value)
  }

  return (
    <div id='user' className="bg-primary-black h-screen w-screen overflow-hidden">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div id='user-content'>
            <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 max-h-[85vh] overflow-auto no-scrollbar w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
              <div className="rounded-md border-gray-500/10 border-2 py-4">
                <div className="xl:px-20 md:px-10 lg:px-15 p-8 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 justify-between">
                    <div id='user-profpic' className="flex items-center">
                      <img src={account.profpic} alt="Icon-game" className="rounded-full aspect-square w-28 sm:w-[90%] mx-auto"/>
                    </div>
                    <div id='user-details' className="ml-0 md:ml-5 xl:ml-8 sm:col-span-4 mt-10">
                      <div className='flex justify-between'>
                        <div id="user-username" className="font-bold text-sm sm: md:text-lg mb-2">{account.name}</div>
                        <div id='user-first-join' className='md:hidden mb-5 text-xs sm:text-sm'>Active since {account.active}</div>
                      </div>
                      <div id='user-stat' className="text-white/50 text-sm sm:text-base">
                        {statconv.following} Following <span className='text-white'>| </span> 
                        {statconv.followers} Followers
                      </div>
                    </div>
                  <div className='sm:col-span-5 md:col-span-2 mt-10 mx-auto md:mt-0'>
                    <div className='hidden md:block mb-5 text-xs sm:text-sm'>Active since {account.active}</div>
                    <Btnsuspen id="suspend-button"/>
                  </div>
                </div>
              </div>
              <section id="select-box" className="py-2">
                <div className="max-w-[1240px] mx-auto">    
                  <div id="select-button" className="my-5 mx-auto md:text-xl font-medium max-w-[500px]">
                    {choose === "thread"
                    ?
                      <div className="flex justify-around">
                          <button onClick={handleAction} value="thread" className="text-white">Thread</button>
                          <button onClick={handleAction} value="activity" className="text-white/30">Report</button>
                      </div>
                    :
                      <div className="flex justify-around">
                          <button onClick={handleAction} value="thread" className="text-white/30">Thread</button>
                          <button onClick={handleAction} value="activity" className="text-white">Report</button>
                      </div>
                    }
                  </div>
                  {choose === "thread" 
                    ? <Thread/>
                    : <Report/>
                  }
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
  )
}
