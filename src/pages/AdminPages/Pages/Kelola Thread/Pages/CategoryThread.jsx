import React from 'react'
import Sidebar from '../../../Components/Sidebar'
import Report from "../../../Components/Report"
import DeleteThread from "../../../Components/DeleteThread"
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function CategoryThread() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);


  return (
    <div id='thread-category' className="bg-primary-black h-screen w-screen overflow-hidden">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div id='category-content'>
            <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 max-h-[85vh] overflow-auto no-scrollbar w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
              <div className='p-5'>
                <DeleteThread page="thread"/>
                <Report/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
