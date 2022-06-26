import Report from "../../../assets/img/Admin/Report.png";

export default function TotalReport() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-5">
        <div className="">
          <div className="flex flex-row items-center lg:mb-8 xl:mb-6">
            <img src={Report} alt="Fire Icon" className="w-[20px]"/>
            <div className="pl-6 font-bold xl:text-base lg:text-sm">Total Report</div>
          </div>
          <div className="flex justify-center  p-7 ">
            <div className="xl:py-5 lg:py-12 text-5xl font-black text-secondary-orange">200K</div>
          </div>
        </div>
      </div>
    </div>
  );
}
