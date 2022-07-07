import Sidebar from "../../../Components/Sidebar";
import { Link } from "react-router-dom";
import Joko from "../../../../../assets/img/Admin/JOK.png"
import Report from "../../../../../assets/img/Admin/Vector.png"

const data = [
  {
    id: 1,
    name: "HackedAccount",
    totalReport: 14074939,
    profpic: "https://media.baamboozle.com/uploads/images/185613/1618204459_7530_url.jpeg",
    firstReport: "2 minutes ago"
  },
  {
    id: 2,
    name: "MysteriousMan",
    totalReport: 9239,
    profpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetfRvJv6h-AJU55amZ5fXZYI9GkRIyi7wJQ&usqp=CAU",
    firstReport: "2 minutes ago"
  },
  {
    id: 3,
    name: "Gogirl!!",
    totalReport: 5090,
    profpic: "https://pbs.twimg.com/profile_images/706521708858097664/Hr1aEuEN_400x400.jpg",
    firstReport: "2 minutes ago"
  },
  {
    id: 4,
    name: "HackedAccount",
    totalReport: 14074939,
    profpic: "https://media.baamboozle.com/uploads/images/185613/1618204459_7530_url.jpeg",
    firstReport: "2 minutes ago"
  },
  {
    id: 5,
    name: "MysteriousMan",
    totalReport: 9239,
    profpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetfRvJv6h-AJU55amZ5fXZYI9GkRIyi7wJQ&usqp=CAU",
    firstReport: "2 minutes ago"
  },
  {
    id: 6,
    name: "Gogirl!!",
    totalReport: 5090,
    profpic: "https://pbs.twimg.com/profile_images/706521708858097664/Hr1aEuEN_400x400.jpg",
    firstReport: "2 minutes ago"
  },
  {
    id: 7,
    name: "MysteriousMan",
    totalReport: 9239,
    profpic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetfRvJv6h-AJU55amZ5fXZYI9GkRIyi7wJQ&usqp=CAU",
    firstReport: "2 minutes ago"
  },
]

export default function Category() {
    return (
      <div id="category">
        <div className="bg-primary-black h-screen w-screen overflow-hidden">
          <div id="category-content" className="container mx-auto xl:px-20 lg:px-15">
            <Sidebar />
            <div>
              <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 h-content w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
                <div id="category" className="pb-3 sm:pb-6 ml-2 font-bold text-sm sm:text-base">Games</div>
                <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
                  {data?.map(item=>(
                    <Link to="/KelolaUser/Category/User" key={item.id}>
                      <div className="rounded-md border-gray-500/10 border-2 mb-5">
                        <div className="xl:px-20 md:px-10 lg:px-15 md:py-8 py-4 px-2 flex justify-between">
                          <div id="category-details" className="flex place-items-center">
                            <img id="category-profpic" src={item.profpic} alt="Icon-game" className="rounded-full aspect-square w-8 sm:w-12 md:w-16 lg:w-20"/>
                            <div className="xl:ml-8 sm:ml-5 ml-2 max-w-[100px]">
                              <div id="category-name" className="font-bold text-sm sm:text-base mb-2 truncate">{item.name}</div>
                              <div id="category-sum-report" className="text-xs sm:text-base md:text-lg overflow-visible">
                                <span className="text-secondary-orange text-md sm:text-xl font-semibold mr-2">
                                  {item.totalReport>=1000 ? (item.totalReport/1000).toFixed(1) : item.totalReport }{item.totalReport>=1000 ? "k" : ""}
                                </span>
                                {item.totalReport>1 ? "Reports" : "Report"}
                              </div>
                            </div>
                          </div>
                          <div id="category-time">
                            <div className="text-white/50 text-xs sm:text-base">{item.firstReport}</div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  