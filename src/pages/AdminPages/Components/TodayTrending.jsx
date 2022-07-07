import FireIcon from "../../../assets/img/Admin/FireIcon.png";

export default function TodayTrending() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-5">
        <div className="">
          <div className="grid grid-cols-4 mb-1 sm:mb-3">
            <img src={FireIcon} alt="Fire Icon" className="w-[20px] my-auto sm:col-span-1 col-span-4 mx-auto"/>
            <div className="sm:col-span-3 col-span-4 font-bold xl:text-base lg:text-sm my-auto mt-3 md:mt-0 text-center md:text-left">Today Trending</div>
          </div>
          <div className="list-decimal font-light lg:leading-10 xl:leading-7 xl:text-base text-sm py-3 lg:py-0">
            <li>Technology</li>
            <li>Games</li>
            <li>Education</li>
            <li>Health</li>
            <li>Food & Travel</li>
          </div>
        </div>
      </div>
    </div>
  );
}
