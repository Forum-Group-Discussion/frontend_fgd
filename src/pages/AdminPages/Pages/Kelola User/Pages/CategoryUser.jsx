import React from 'react'
import { useState } from 'react'
import Joko from "../../../../../assets/img/Admin/JOK.png"
import Sidebar from '../../../Components/Sidebar'
import Report from  '../../../Components/Report'
import Thread from '../../../../UserPages/Account/components/Thread'
import { useEffect } from 'react'
import Sucess from "../../../../../assets/img/Admin/success.png"
import AOS from "aos";
import Swal from 'sweetalert2'


export default function CategoryUser() {
    const [choose, setChoose] = useState("thread")
    const [suspen, setSuspen] = useState(true)

    useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);

  

    const handleAction = e => {
        setChoose(e.target.value)
    }

    const handleSuspen = () => {
      setSuspen(!suspen)
    }

  return (
    <div className="bg-primary-black h-content w-screen">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div>
            <div className="menu-content bg-primary-grey text-white p-6 h-content">
              <div className="rounded-md border-gray-500/10 border-2 py-4">
                <div className="xl:px-20 md:px-10 lg:px-15 p-8 flex place-items-center justify-between">
                  <div className="gird flex place-items-center">
                    <div className="flex place-items-center">
                      <img src={Joko} alt="Icon-game" className="rounded-full 2xl:w-[100px] xl:w-[70px] lg:w-[80%] md:w-[70%]"/>
                    </div>
                    <div className="xl:ml-8 md:ml-5 ">
                      <div className="font-bold text-xl mb-2">Berry burrie</div>
                      <div className="text-white/50">
                        2000 Following <span className='text-white'>|</span> 100k Followers
                      </div>
                    </div>
                  </div>
                  <div className='grid justify-items-center'>
                    <div className='mb-5'>active since 2022</div>
                    {/*  */}
                    {suspen ? <button className='rounded-full bg-secondary-orange hover:bg-secondary-orange/80 px-8 p-2' onClick={handleSuspen}>Suspen</button> : <img src={Sucess}/>}
                  </div>
                </div>
              </div>

            { suspen ?  <section id="account" className="py-2">
            <div className="max-w-[1240px] mx-auto">    
                <div id="acc-button" className="my-5 mx-auto md:text-xl font-medium max-w-[500px]">
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
        :
        <div className='flex justify-center h-[450px]'>
          <div className='py-9'>Temporarily deactivated account for 30 days</div>
        </div>
             }

            </div>
          </div>
        </div>
      </div>
  )
}
