import Sidebar from "../../Components/Sidebar";
import "../Pages.css"
import Game from "../../../../assets/img/Admin/iconGame.png"
import Report from "../../../../assets/img/Admin/Vector.png"
import FoodTravel from "../../../../assets/img/Admin/Food&Travel.png"
import Education from "../../../../assets/img/Admin/Education.png"
import Health from "../../../../assets/img/Admin/Health.png"
import Technology from "../../../../assets/img/Admin/Technology.png"

export default function KelolaUSer() {
    return (
        <div className="bg-primary-black h-content">
            <div className="container mx-auto px-20">
            <Sidebar/>
                <div >
                        <div className="menu-content bg-primary-grey text-white p-6 h-content">
                            <div className="pb-8">List of account reports</div>

                            <div className="rounded-md border-gray-500/10 border-2 mb-5" >
                                <div className="px-20 p-8 flex place-items-center justify-between">
                                        <div className="gird flex item-center">
                                            <div className="flex items-center">
                                                <img src={Game} alt="Icon-game"/>
                                            </div>
                                            <div className="ml-8">
                                                <div className="font-bold text-xl mb-2">Games</div>
                                                <div><span className="text-secondary-yellow text-2xl font-semibold">776</span> report</div>
                                            </div>
                                        </div>
                                    <div><img src={Report} alt="Icon-Report"/></div>
                                </div>
                            </div>
                            
                            <div className="rounded-md border-gray-500/10 border-2 mb-5" >
                                <div className="px-20 p-8 flex place-items-center justify-between">
                                        <div className="gird flex item-center">
                                            <div className="flex items-center">
                                                <img src={Health} alt="Icon-game"/>
                                            </div>
                                            <div className="ml-8">
                                                <div className="font-bold text-xl mb-2">Health</div>
                                                <div><span className="text-secondary-yellow text-2xl font-semibold">776</span> report</div>
                                            </div>
                                        </div>
                                    <div><img src={Report} alt="Icon-Report"/></div>
                                </div>
                            </div>

                            <div className="rounded-md border-gray-500/10 border-2 mb-5" >
                                <div className="px-20 p-8 flex place-items-center justify-between">
                                        <div className="gird flex item-center">
                                            <div className="flex items-center">
                                                <img src={Education} alt="Icon-game"/>
                                            </div>
                                            <div className="ml-8">
                                                <div className="font-bold text-xl mb-2">Education</div>
                                                <div><span className="text-secondary-yellow text-2xl font-semibold">776</span> report</div>
                                            </div>
                                        </div>
                                    <div><img src={Report} alt="Icon-Report"/></div>
                                </div>
                            </div>

                            <div className="rounded-md border-gray-500/10 border-2 mb-5" >
                                <div className="px-20 p-8 flex place-items-center justify-between">
                                        <div className="gird flex item-center">
                                            <div className="flex items-center">
                                                <img src={FoodTravel} alt="Icon-game"/>
                                            </div>
                                            <div className="ml-8">
                                                <div className="font-bold text-xl mb-2">Food & Travel</div>
                                                <div><span className="text-secondary-yellow text-2xl font-semibold">776</span> report</div>
                                            </div>
                                        </div>
                                    <div><img src={Report} alt="Icon-Report"/></div>
                                </div>
                            </div>

                            <div className="rounded-md border-gray-500/10 border-2 mb-5" >
                                <div className="px-20 p-8 flex place-items-center justify-between">
                                        <div className="gird flex item-center">
                                            <div className="flex items-center">
                                                <img src={Technology} alt="Icon-game"/>
                                            </div>
                                            <div className="ml-8">
                                                <div className="font-bold text-xl mb-2">Technology</div>
                                                <div><span className="text-secondary-yellow text-2xl font-semibold">776</span> report</div>
                                            </div>
                                        </div>
                                    <div><img src={Report} alt="Icon-Report"/></div>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}