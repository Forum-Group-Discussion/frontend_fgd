import Sidebar from "../../../Components/Sidebar";
import { Link } from "react-router-dom";
import Joko from "../../../../../assets/img/Admin/JOK.png"
import Report from "../../../../../assets/img/Admin/Vector.png"

export default function Category() {
    return (
      <>
        <div className="bg-primary-black h-screen w-screen">
          <div className="container mx-auto xl:px-20 lg:px-15">
            <Sidebar />
            <div>
              <div className="menu-content bg-primary-grey text-white p-6 h-content">
                <div className="pb-8 font-bold">Games</div>
  
                <Link to="/KelolaUser/Category/User">
                <div className="rounded-md border-gray-500/10 border-2 mb-5">
                  <div className="xl:px-20 md:px-10 lg:px-15 p-8 flex justify-between">
                    <div className="flex place-items-center">
                        <img src={Joko} alt="Icon-game" className="rounded-full xl:w-[70px] lg:w-[80%] md:w-[70%]"/>
                      <div className="xl:ml-8 md:ml-5">
                        <div className="font-bold text-base mb-2">Jokowi</div>
                        <div >
                          <span className="text-secondary-orange text-xl font-semibold">776</span> report
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-white/50">20 Minute</div>
                    </div>
                  </div>
                </div>
                </Link>
  
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  