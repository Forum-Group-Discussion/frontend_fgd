import user from "../../../assets/img/Admin/IconUser.png"

export default function TotalUser () {
    return (
        <div>
           <div className="rounded-md border-gray-500/10 border-2 p-4 w-[340px]">
           <div class="flex items-center">
                <img src={user} alt="Icon Total User"/>
                <div className="ml-4">
                    <div>Total User</div>
                    <div>2664</div>
                </div>
            </div>
            <div className="mt-5">
                <div>Activity :</div>
                <div>88%</div>
            </div>
           </div>
        </div>
    )
}