import gambarProfile from "../../../../assets/img/home/dashicons_games.png";
import { useState } from "react";
import { useEffect } from "react";

export default function TrendAccount(){
    const [ followers, setFollowers ] = useState(5435)
    const [ follconv, setFollConv ] = useState("")

    useEffect(()=>{
        let fol = followers
        if(followers>=1000){
            fol = (fol/1000).toFixed(1)
            setFollConv(fol+"k")
        }
        else{
            setFollConv(followers)
        }

    })

    return(
        <div id="trend-acc" className="flex border border-solid border-[#d9d9d91a] rounded-xl w-full px-8 py-2">
            <div id="thread-header" className="flex">
                <div className="mr-2">
                    <img src={gambarProfile} alt="gambar profile" className="w-20" />
                </div>
                <div className="flex items-center">
                    <div className="flex-col text-white">
                    <h5 className="font-semibold tracking-[2px]">amdar07</h5>
                    <h6 className="font-medium mt-1 opacity-30">{follconv} Followers</h6>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-end items-center">
                <button id="thread-button" className="text-sm sm:text-lg bg-secondary-orange px[15px] py[8px] sm:px-[35px] sm:py-[10px] font-bold text-white tracking-[1px] rounded-[40px]">Follow</button>
            </div>
        </div>
    )
}