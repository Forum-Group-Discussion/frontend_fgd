import jokowi from "../../../assets/img/Admin/JOK.png"

export default function NoticeBoard () {
    return (
        <div>
            <div className="rounded-md border-gray-500/10 border-2 p-2 h-content w-[100%]">
                <div className="flex flex-col">
                <div className="p-5 flex justify-center font-bold xl:text-base lg:text-sm ">Notice Board</div>

                <div className="rounded-md border-gray-500/10 border-2 p-5 mb-2">
                    <div className="flex items-center">
                        <img src={jokowi} alt="img user" className="w-[30px] rounded-full"/>
                        <div className="text-sm ml-3 lg:text-xs xl:text-sm">This thread contains inappropriate....</div>
                    </div>
                    <div className="flex flex-row items-center mt-2 justify-end">
                            <div className="text-secondary-red xl:text-xs lg:text-[10px] xl:mr-3 lg:mr-8">Sat. 24.04.2022</div>
                            <div className="xl:text-xs lg:text-[10px] text-white-600/25">12:00 Pm</div>
                    </div> 
                </div>

                <div className="rounded-md border-gray-500/10 border-2 p-5 mb-2">
                    <div className="flex items-center">
                        <img src={jokowi} alt="img user" className="w-[30px] rounded-full"/>
                        <div className="text-sm ml-3 lg:text-xs xl:text-sm">This thread contains inappropriate....</div>
                    </div>
                    <div className="flex flex-row items-center mt-2 justify-end">
                            <div className="text-secondary-red xl:text-xs lg:text-[10px] xl:mr-3 lg:mr-8">Sat. 24.04.2022</div>
                            <div className="xl:text-xs lg:text-[10px] text-white-600/25">12:00 Pm</div>
                    </div> 
                </div>

                <div className="rounded-md border-gray-500/10 border-2 p-5 mb-2">
                    <div className="flex items-center">
                        <img src={jokowi} alt="img user" className="w-[30px] rounded-full"/>
                        <div className="text-sm ml-3 lg:text-xs xl:text-sm">This thread contains inappropriate....</div>
                    </div>
                    <div className="flex flex-row items-center mt-2 justify-end">
                            <div className="text-secondary-red xl:text-xs lg:text-[10px] xl:mr-3 lg:mr-8">Sat. 24.04.2022</div>
                            <div className="xl:text-xs lg:text-[10px] text-white-600/25">12:00 Pm</div>
                    </div> 
                </div>

                <div className="rounded-md border-gray-500/10 border-2 p-5 mb-2">
                    <div className="flex items-center">
                        <img src={jokowi} alt="img user" className="w-[30px] rounded-full"/>
                        <div className="text-sm ml-3 lg:text-xs xl:text-sm">This thread contains inappropriate....</div>
                    </div>
                    <div className="flex flex-row items-center mt-2 justify-end">
                            <div className="text-secondary-red xl:text-xs lg:text-[10px] xl:mr-3 lg:mr-8">Sat. 24.04.2022</div>
                            <div className="xl:text-xs lg:text-[10px] text-white-600/25">12:00 Pm</div>
                    </div> 
                </div>

                </div>
            </div>
        </div>
    )
}