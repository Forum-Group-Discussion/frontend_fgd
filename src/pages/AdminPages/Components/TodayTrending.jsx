import FireIcon from "../../../assets/img/Admin/FireIcon.png";

export default function TodayTrending() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-8">
        <div className="">
          <div className="flex flex-row items-center mb-5">
            <img src={FireIcon} alt="Fire Icon" />
            <div className="text-xl pl-7 font-bold">Today Trending</div>
          </div>
          <div className="list-decimal text-xl font-light leading-9 pb-4">
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
