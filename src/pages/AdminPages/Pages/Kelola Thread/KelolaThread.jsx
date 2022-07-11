import "../Pages.css";
import { Link } from "react-router-dom";
import Game from "../../../../assets/img/Admin/iconGame.png";
import Report from "../../../../assets/img/Admin/Vector.png";
import FoodTravel from "../../../../assets/img/Admin/Food&Travel.png";
import Education from "../../../../assets/img/Admin/Education.png";
import Health from "../../../../assets/img/Admin/Health.png";
import Technology from "../../../../assets/img/Admin/Technology.png";
import Sidebar from "../../Components/Sidebar";

const data = [
  {
    id: 1,
    name: "Games",
    totalReport: 776,
    icon: Game,
  },
  {
    id: 2,
    name: "Health",
    totalReport: 1,
    icon: Health,
  },
  {
    id: 3,
    name: "Food & Travel",
    totalReport: 500,
    icon: FoodTravel,
  },
  {
    id: 4,
    name: "Technology",
    totalReport: 23,
    icon: Technology,
  },
  {
    id: 5,
    name: "Education",
    totalReport: 8870,
    icon: Education,
  },
];

export default function KelolaThread() {
  return (
    <>
      <div id="manage-thread" className="bg-primary-black h-screen w-screen overflow-hidden">
        <div className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div id="manage-thread-content">
            <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 h-content w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
              <div className="pb-3 sm:pb-6 ml-2 font-bold text-sm sm:text-base">List of thread reports</div>
              <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
                {data?.map((item) => (
                  <Link to={`/KelolaThread/category/${item.id}`} key={item.id}>
                    <div className="rounded-md border-gray-500/10 border-2 mb-5">
                      <div className="xl:px-20 md:px-10 lg:px-15 p-8 flex place-items-center justify-between">
                        <div className="flex place-items-center">
                          <img src={item.icon} alt="Icon" className="w-8 sm:w-12 md:w-16 lg:w-20" />
                          <div className="xl:ml-8 ml-5">
                            <div className="font-bold text-sm sm:text-base mb-2">{item.name}</div>
                            <div id="manage-thread-sum-report" className="text-xs sm:text-base md:text-lg">
                              <span className="text-secondary-orange text-md sm:text-xl font-semibold mr-2">
                                {item.totalReport >= 1000 ? (item.totalReport / 1000).toFixed(1) : item.totalReport}
                                {item.totalReport >= 1000 ? "k" : ""}
                              </span>
                              {item.totalReport > 1 ? "Reports" : "Report"}
                            </div>
                          </div>
                        </div>
                        <div>
                          <img src={Report} alt="Icon-Report" className="w-6 sm:w-8 md:w-12 lg:w-16" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
