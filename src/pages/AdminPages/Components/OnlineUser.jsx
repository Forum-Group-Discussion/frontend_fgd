import Online from "../../../assets/img/Admin/OnlineIcon.png";

export default function OnlineUser() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-4 w-[100%]">
        <div class="flex items-center">
          <img src={Online} alt="Icon Online User" />
          <div className="ml-4">
            <div>Online User</div>
            <div>88%</div>
          </div>
        </div>
        <div className="mt-5">
          <div>Active User:</div>
          <div>88%</div>
        </div>
      </div>
    </div>
  );
}
