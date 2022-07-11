import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../networks/api";

// const data = [
//   {
//     id: 1,
//     name: "Andrew Alfred",
//     img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 2,
//     name: "Aisha Houston",
//     img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 3,
//     name: "Anna White",
//     img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 4,
//     name: "Andy Flint",
//     img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 5,
//     name: "Bob Alfred",
//     img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 6,
//     name: "Bianca Houston",
//     img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
//   {
//     id: 7,
//     name: "Bert Flint",
//     img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
//   },
// ];

export default function Following({ onCancel, page, data }) {
  const navigate = useNavigate();

  const otherProfile = (id) => {
    navigate("/user/account/" + id);
  };

  console.log(data);
  return (
    <div id="following" className="fixed z-50 inset-0 m-auto">
      <div onClick={onCancel} className="fixed inset-0 bg-[#ffffff4d]"></div>
      <div className="px-3">
        <div id="box" className="no-scrollbar rounded-xl mt-[85%] md:mt-[45%] lg:mt-[35%] xl:mt-[25%] -translate-y-[50%] relative max-w-md mx-auto bg-white shadow-lg h-[70vh] overflow-auto ring-1 ring-slate-900/5 -my-px">
          <div className="relative">
            <div id="header" className="sticky top-0 px-4 py-3 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10">
              <div id="title" className="text-center">
                Following
              </div>
              <IoIosClose id="close-button" onClick={onCancel} size={40} className="absolute right-1 top-1 cursor-pointer" />
            </div>
            <div id="list-account" className="">
              {data?.map((item) => (
                <div key={item.id} className="flex justify-between p-4">
                  <button id="account" onClick={() => otherProfile(item.user_follow.id)} className="flex items-center gap-4">
                    <img id="profile-pic" className="w-12 h-12 rounded-full" src={"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"} />
                    <strong id="profile-username" className="text-sm font-medium text-slate-900">
                      {item.user_follow.name}
                    </strong>
                  </button>
                  {page === "profile" && (
                    <button id="delete-button" className="my-3 border border-secondary-orange text-secondary-orange rounded-full px-6 -py-4 text-sm hover:bg-secondary-orange hover:text-slate-100">
                      Hapus
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
