import user from "../../../assets/img/Admin/IconUser.png";
export default function TotalUser() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="flex items-center">
          <img src={user} alt="Icon Total User" className="w-[35px]"/>
          <div className="ml-3">
            <div className="xl:text-sm lg:text-xs">Total User</div>
            <div className="font-bold">2664</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-sm lg:text-xs" >Activity :</div>
          <div className="font-bold">88%</div>
        </div>
      </div>
    </div>
  );
}
