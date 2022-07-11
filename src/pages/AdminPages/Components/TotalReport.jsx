import Report from "../../../assets/img/Admin/Report.png";

export default function TotalReport() {
  return (
    <div id="sum-report">
      <div className="rounded-md border-gray-500/10 border-2 p-5">
        <div id="sum-report-title" className="grid grid-cols-4 mb-1 sm:mb-3">
          <img src={Report} alt="Fire Icon" className="w-[20px] my-auto md:col-span-1 col-span-4 mx-auto"/>
          <div className="md:col-span-3 col-span-4 font-bold xl:text-base lg:text-sm my-auto mt-3 md:mt-0 text-center md:text-left">Total Report</div>
        </div>
        <div id="sum-report-content" className="flex justify-center py-5 lg:py-0">
          <div className="xl:py-5 lg:py-12 text-3xl md:text-4xl lg:text-5l font-black text-secondary-orange">200K</div>
        </div>
      </div>
    </div>
  );
}
