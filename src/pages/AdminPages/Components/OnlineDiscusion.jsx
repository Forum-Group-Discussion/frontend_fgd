import Discusion from "../../../assets/img/Admin/Discussion.png";

export default function OnlineDiscusion() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="flex items-center">
          <img src={Discusion} alt="Icon Online User" className="w-[35px]"/>
          <div className="ml-3">
            <div className="xl:text-sm lg:text-xs" >Online Discusion</div>
            <div className="font-bold">50%</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-sm lg:text-xs">Active User :</div>
          <div className="font-bold ">50%</div>
        </div>
      </div>
    </div>
  );
}
