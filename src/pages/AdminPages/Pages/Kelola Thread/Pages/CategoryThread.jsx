import React from 'react'
import Sidebar from '../../../Components/Sidebar'
import Report from '../../components/Report'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Thread from '../../../../UserPages/Account/components/Thread'



export default function CategoryThread() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    
  return (
    <div className="bg-primary-black h-content w-screen">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div>
            <div className="menu-content bg-primary-grey text-white p-6 h-content">
          
               <div className='p-5'>
                <Thread/>
               <Report/>
               </div>
             
            </div>
          </div>
        </div>
      </div>
  )
}
