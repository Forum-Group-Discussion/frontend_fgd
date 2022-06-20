import Report from "../../../assets/img/Admin/Report.png";

export default function TotalReport() {
  return (
    <div>
      <div className="rounded-md border-gray-500/10 border-2 p-5">
        <div className="">
          <div className="flex flex-row items-center lg:mb-8 xl:mb-6">
            <img src={Report} alt="Fire Icon" />
            <div className="pl-6 font-bold xl:text-lg lg:text-sm">Total Report</div>
          </div>
          <div className="flex justify-center text-6xl font-bold text-secondary-orange p-7 ">
            <div className="xl:py-4 lg:py-12">200</div>
          </div>
        </div>
      </div>
    </div>
  );
}
