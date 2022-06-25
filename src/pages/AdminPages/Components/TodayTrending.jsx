import FireIcon from "../../../assets/img/Admin/FireIcon.png";

export default function TodayTrending() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-5">
        <div className="">
          <div className="flex flex-row items-center mb-7">
            <img src={FireIcon} alt="Fire Icon" className="w-[20px]"/>
            <div className="pl-6 font-bold xl:text-base lg:text-sm">Today Trending</div>
          </div>
          <div className="list-decimal font-light lg:leading-10 xl:leading-7  xl:text-base lg:text-sm">
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
