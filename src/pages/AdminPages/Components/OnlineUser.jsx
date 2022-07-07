import Online from "../../../assets/img/Admin/OnlineIcon.png";

export default function OnlineUser() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4">
        <div class="grid grid-cols-4">
          <img src={Online} alt="Icon Online User" className="w-[35px] md:col-span-1 col-span-4 mx-auto" />
          <div className="mt-3 md:mt-0 md:col-span-3 col-span-4 text-center md:text-left md:ml-3">
            <div className="xl:text-sm text-xs">Online User</div>
            <div className="font-bold xl:text-md text-sm">88%</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="xl:text-sm text-xs" >Active User :</div>
          <div className="font-bold xl:text-md text-sm">88%</div>
        </div>
      </div>
    </div>
  );
}
