import "../Pages.css";
import { Link } from "react-router-dom";
import Game from "../../../../assets/img/Admin/iconGame.png";
import Report from "../../../../assets/img/Admin/Vector.png";
import FoodTravel from "../../../../assets/img/Admin/Food&Travel.png";
import Education from "../../../../assets/img/Admin/Education.png";
import Health from "../../../../assets/img/Admin/Health.png";
import Technology from "../../../../assets/img/Admin/Technology.png";
import Sidebar from "../../Components/Sidebar";

export default function KelolaUser() {

  return (
    <>
      <div className="bg-primary-black h-content w-screen">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div>
            <div className="menu-content bg-primary-grey text-white p-6 h-content">
              <div className="pb-8 font-bold">List of account reports</div>

              <Link to="/KelolaUser/category">
              <div className="rounded-md border-gray-500/10 border-2 mb-5">
                <div className="xl:px-20 md:px-10 lg:px-15 p-8 flex place-items-center justify-between">
                  <div className="flex place-items-center">
                    <img src={Game} alt="Icon-game" className="xl:w-[70px] lg:w-[80%] md:w-[70%]"/>
                    <div className="xl:ml-8 md:ml-5">
                      <div className="font-bold text-base mb-2">Games</div>
                      <div className="">
                        <span className="text-secondary-orange text-xl font-semibold">776</span> report
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Report} alt="Icon-Report" className="xl:w-[80%] lg:w-[70%] md:w-[60%]"/>
                  </div>
                </div>
              </div>
              </Link>

              <Link to="/KelolaUser/Category">
              <div className="rounded-md border-gray-500/10 border-2 mb-5">
                <div className="xl:px-20 px-20 md:px-10 p-8 flex place-items-center justify-between">
                  <div className="flex place-items-center">
                    <img src={Health} alt="Icon-Health" className="xl:w-[70px] lg:w-[80%] md:w-[70%]" />
                    <div className="ml-8 ">
                      <div className="font-bold text-base mb-2">Health</div>
                      <div>
                        <span className="text-secondary-orange text-xl font-semibold">776</span> report
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Report} alt="Icon-Report" className="xl:w-[80%] lg:w-[70%] md:w-[60%]" />
                  </div>
                </div>
              </div>
              </Link>

              <Link to="/KelolaUser/Category">
              <div className="rounded-md border-gray-500/10 border-2 mb-5">
                <div className="xl:px-20 px-20 md:px-10 p-8 flex place-items-center justify-between">
                  <div className="flex place-items-center">
                      <img src={Education} alt="Icon-Education" className="xl:w-[70px] lg:w-[80%] md:w-[70%]" />
                    <div className="ml-8">
                      <div className="font-bold text-base mb-2">Education</div>
                      <div>
                        <span className="text-secondary-orange text-xl font-semibold">776</span> report
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Report} alt="Icon-Report" className="xl:w-[80%] lg:w-[70%] md:w-[60%]" />
                  </div>
                </div>
              </div></Link>

              <Link to="/KelolaUser/Category">
              <div className="rounded-md border-gray-500/10 border-2 mb-5">
                <div className="xl:px-20 px-20 p-8 md:px-10  flex place-items-center justify-between">
                  <div className="flex place-items-center">
                      <img src={FoodTravel} alt="Icon-FoodTravel" className="xl:w-[70px] lg:w-[80%] md:w-[70%]"/>
                    <div className="ml-8">
                      <div className="font-bold text-base mb-2">Food & Travel</div>
                      <div>
                        <span className="text-secondary-orange text-xl font-semibold">776</span> report
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Report} alt="Icon-Report" className="xl:w-[80%] lg:w-[70%] md:w-[60%]" />
                  </div>
                </div>
              </div></Link>

              <Link to="/KelolaUser/Category">
              <div className="rounded-md border-gray-500/10 border-2 mb-5">
                <div className="xl:px-20 px-20 md:px-10  p-8 flex place-items-center justify-between">
                  <div className="flex place-items-center">
                      <img src={Technology} alt="Icon-technology" className=" xl:w-[80px] lg:w-[80%] md:w-[75%]" />
                    <div className="xl:ml-7 md:ml-2">
                      <div className="font-bold text-base mb-2">Technology</div>
                      <div>
                        <span className="text-secondary-orange text-xl font-semibold">776</span> report
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Report} alt="Icon-Report" className="xl:w-[80%] lg:w-[70%] md:w-[60%]" />
                  </div>
                </div>
              </div></Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
