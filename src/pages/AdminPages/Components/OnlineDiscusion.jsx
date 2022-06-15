import Discusion from "../../../assets/img/Admin/Discussion.png"


export default function OnlineDiscusion () {
    return (
        <div>
           <div className="rounded-md border-gray-500/10 border-2 p-4 w-[340px]">
           <div class="flex items-center">
                <img src={Discusion} alt="Icon Online User"/>
                <div className="ml-4">
                    <div>Online Discusion</div>
                    <div>50%</div>
                </div>
            </div>
            <div className="mt-5">
                <div>Active User:</div>
                <div>50%</div>
            </div>
           </div>
        </div>
    )
}