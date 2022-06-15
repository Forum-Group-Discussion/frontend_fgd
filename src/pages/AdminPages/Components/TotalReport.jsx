import Report from "../../../assets/img/Admin/Report.png"

export default function TotalReport () {
    return (
        <div>
            <div className="rounded-md border-gray-500/10 border-2 p-8 w-[340px]">
                <div className="pb-1">
                <div className="flex flex-row items-center mb-5">
                    <img src={Report} alt="Fire Icon"/>
                    <div className="text-xl pl-7 font-bold">Total Report</div>
                </div>
                <div className="flex justify-center text-6xl font-bold p-7 ">
                    <div className="p-10">200</div>
                </div>
                </div>
            </div>
        </div>
    )
}