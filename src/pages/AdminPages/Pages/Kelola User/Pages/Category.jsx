import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../../../../networks/api";
import Sidebar from "../../../Components/Sidebar";
import { Link } from "react-router-dom";
import Joko from "../../../../../assets/img/Admin/JOK.png"
import Report from "../../../../../assets/img/Admin/Vector.png"
import { FaUserAlt } from "react-icons/fa";

export default function Category() {
  const [getAllUserAPI, setGetAllUserAPI] = useState([])

  const fetchData = useCallback(() => {
    const response = axiosInstance
      .get("v1/user")
      .then((response) => {
        setGetAllUserAPI(response.data.data)
      })
      .catch((error) => {
        console.log(error.response);
      });
    return response;
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [photoProfile, setPhotoProfile] = useState([]);

  // useEffect(() => {
  //   getAllUserAPI?.forEach((d) => {
  //     axiosInstance.get("v1/user/image/" + d.id, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       setPhotoProfile((photoProfile) => [...photoProfile, res.data.data]);
  //       setLoadingImageThread(false)
  //     });
  //   })
  // }, [getAllUserAPI])

  return (
    <div id="category">
      <div className="bg-primary-black h-screen w-screen overflow-hidden">
        <div id="category-content" className="container mx-auto xl:px-20 lg:px-15">
          <Sidebar />
          <div>
            <div className="menu-content bg-primary-grey text-white p-3 sm:p-7 h-content w-[90%] lg:w-[70%] xl:w-[80%] mx-auto lg:mx-0 lg:ml-[280px]">
              <div id="category" className="pb-3 sm:pb-6 ml-2 font-bold text-sm sm:text-base">Games</div>
              <div className="max-h-[70vh] overflow-y-auto no-scrollbar">
                {getAllUserAPI?.map((item) => {
                  if (item.is_admin === false) {
                    return (
                      <Link to={`/KelolaUser/Category/User/${item.id}`} key={item.id}>
                        <div className="rounded-md border-gray-500/10 border-2 mb-5">
                          <div className="xl:px-20 md:px-10 lg:px-15 md:py-8 py-4 px-2 flex justify-between">
                            <div id="category-details" className="flex place-items-center">
                              {/* <img id="category-profpic" src={`data:image/jpeg;base64,${photoProfile?.filter((d) => d.id === item.id).map((d) => d.image_base64)}`} alt="Icon-game" className="rounded-full aspect-square w-8 sm:w-12 md:w-16 lg:w-20" /> */}
                              <div className="bg-primary-black rounded-full aspect-square w-8 sm:w-12 md:w-16 lg:w-20">
                                <FaUserAlt style={{ width: "100%", height: "100%", borderRadius: "50%", padding: "6px" }} className="" />
                              </div>
                              <div className="xl:ml-8 sm:ml-5 ml-2 max-w-[100px]">
                                <div id="category-name" className="font-bold text-sm sm:text-base mb-2 truncate">{item.name}</div>
                                <div id="category-sum-report" className="text-xs sm:text-base md:text-lg overflow-visible">
                                  <span className="text-secondary-orange text-md sm:text-xl font-semibold mr-2">
                                    {item.totalReport >= 1000 ? (item.totalReport / 1000).toFixed(1) : item.totalReport}{item.totalReport >= 1000 ? "k" : ""}
                                  </span>
                                  {item.totalReport > 1 ? "Reports" : "Report"}
                                </div>
                              </div>
                            </div>
                            <div id="category-time">
                              <div className="text-white/50 text-xs sm:text-base">{item.firstReport}</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  }
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
