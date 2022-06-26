import Online from "../../../assets/img/Admin/OnlineIcon.png";

export default function OnlineUser() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="flex items-center">
          <img src={Online} alt="Icon Online User" className="w-[35px]" />
          <div className="ml-3">
            <div className="xl:text-sm lg:text-xs">Online User</div>
            <div className="font-bold">88%</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-sm lg:text-xs" >Active User :</div>
          <div className="font-bold">88%</div>
        </div>
      </div>
    </div>
  );
}
