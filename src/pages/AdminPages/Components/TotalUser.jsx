import user from "../../../assets/img/Admin/IconUser.png";
export default function TotalUser() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="flex items-center">
          <img src={user} alt="Icon Total User" />
          <div className="ml-3">
            <div className="font-bold xl:text-base lg:text-sm">Total User</div>
            <div>2664</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-base lg:text-sm" >Activity :</div>
          <div>88%</div>
        </div>
      </div>
    </div>
  );
}
