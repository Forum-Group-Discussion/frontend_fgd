import Navbar from "../components/Navbar";
import Thread from "./components/Thread";
import Activity from "./components/Activity";
import "./Profile.css"
import { BsCameraFill } from "react-icons/bs"
import Banner from "../../../assets/img/account/banner.png"
import Profile from "../../../assets/img/account/profile.png"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfileUserPage(){
    const [stat, setStat] = useState({following:105500, followers:99900, threads:100})
    const [statconv, setStatconv] = useState({following:"", followers:"", threads:""})
    const [choose, setChoose] = useState("thread")

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(()=>{
        let ing = stat.following
        let ers = stat.followers
        let thr = stat.threads
        if(stat.following>=1000){
            ing = ing/1000
            ing = ing.toFixed(1)
            console.log(typeof ing, ing)
            
        }
        else{
            setStatconv({following:stat.following})
        }
        if(stat.followers>=1000){
            ers = ers/1000
            ers = ers.toFixed(1)
            setStatconv({followers:toString(ers)+"k"})
        }
        else{
            setStatconv({followers:stat.followers})
        }
        if(stat.threads>=1000){
            thr = thr/1000
            thr = thr.toFixed(1)
            setStatconv({threads:thr+"k"})
        }
        else{
            setStatconv({threads:stat.threads})
        }

        if(stat.following>=1000){
            if(stat.followers>=1000){
                if(stat.threads>=1000){
                    setStatconv({following:ing+"k", followers:ers+"k",threads:thr+"k"})
                }
                else{
                    setStatconv({following:ing+"k", followers:ers+"k",threads:thr})
                }
            }
            else{
                if(stat.threads>=1000){
                    setStatconv({following:ing+"k", followers:ers,threads:thr+"k"})
                }
                else{
                    setStatconv({following:ing+"k", followers:ers,threads:thr})
                }
            }
        }
        else{
            if(stat.followers>=1000){
                if(stat.threads>=1000){
                    setStatconv({following:ing, followers:ers+"k",threads:thr+"k"})
                }
                else{
                    setStatconv({following:ing, followers:ers+"k",threads:thr})
                }
            }
            else{
                if(stat.threads>=1000){
                    setStatconv({following:ing, followers:ers,threads:thr+"k"})
                }
                else{
                    setStatconv({following:ing, followers:ers,threads:thr})
                }
            }
        }
        console.log(statconv.following," ", statconv.followers," ", statconv.threads)
    }, [stat])
    
    const handleAction = (e) => {
        setChoose(e.target.value)
    }
    return(
        <>
        <Navbar />
        <section id="account" className="bg-primary-black p-[10%]">
            <div className="max-w-[1240px] mx-auto">
                <div id="acc-details" className="border-b-2 border-[#d9d9d91a] pb-[5%] text-white md:mx-[0] mx-auto">
                    <img src={Banner} alt="banner-pic"/>
                    <div className="relative">
                        <div className="absolute p-2 bg-white rounded-full w-15 right-3 bottom-3">
                            <BsCameraFill size={30} className="fill-secondary-orange" />
                        </div>
                    </div>
                    <div id="acc-profile" className="flex justify-between">
                        <div className="grid gap-y-5 mt-[-5%] ml-[3%]">
                            <img id="profile-pic" src={Profile} alt="profile-pic" />
                            <div id="username" className="text-3xl md:text-4xl font-bold">Berry burrie</div>
                            <div id="bio" className="text-xl md:text-2xl">Hello Found</div>
                            <div id="stat" className="inline-flex gap-10 text-gray-400">
                                <div id="stat-following">{statconv.following} Following</div>
                                <div id="stat-followers">{statconv.followers} Followers</div>
                                <div id="stat-threads">{statconv.threads} Threads</div>
                            </div>
                        </div>
                        <Link to="/user/account/edit" className="text-xl md:text-2xl m-[3%] text-secondary-orange">Edit</Link>
                    </div> 
                </div>
                <div id="acc-button" className="my-[5%] mx-auto md:text-xl font-medium max-w-[500px]">
                    {choose === "thread"
                    ? 
                        <div className="flex justify-around">
                            <button onClick={handleAction} value="thread" className="text-white">Thread</button>
                            <button onClick={handleAction} value="activity" className="text-gray-400">Activity</button>
                        </div>
                    :
                        <div className="flex justify-around">
                            <button onClick={handleAction} value="thread" className="text-gray-400">Thread</button>
                            <button onClick={handleAction} value="activity" className="text-white">Activity</button>
                        </div>
                    }
                </div>
                {choose === "thread" 
                ? <Thread />
                : <Activity />
                }
            </div>
        </section>
        </>
    )
}