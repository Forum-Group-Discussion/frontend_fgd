import Discusion from "../../../assets/img/Admin/Discussion.png";

export default function OnlineDiscusion() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="flex items-center">
          <img src={Discusion} alt="Icon Online User" />
          <div className="ml-3">
            <div className="font-bold xl:text-base lg:text-sm" >Online Discusion</div>
            <div>50%</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-base lg:text-sm">Active User:</div>
          <div>50%</div>
        </div>
      </div>
    </div>
  );
}
