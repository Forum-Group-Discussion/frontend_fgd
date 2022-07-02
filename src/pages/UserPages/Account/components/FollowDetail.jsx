import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Profile from "../../../../assets/img/account/profile.png"

export default function FollowStats({onCancel}){
    const [isFollowers, setFollowers] = useState(true)
    const navigate = useNavigate()

    const handleChange = e => {
        console.log(e.target.value, Boolean(e.target.value))
        console.log(Boolean("true"), Boolean(""))
        setFollowers(Boolean(e.target.value))
    }
    const otherProfile = () =>{
        navigate("/user/account/other")
    }
    return(
        <div className="fixed z-50 inset-0 m-auto">
            <div onClick={onCancel} className="fixed inset-0 bg-[#ffffff4d]"></div>
                <div className="px-3">
                    <div className="mt-[25%] -translate-y-[50%] relative max-w-md mx-auto bg-primary-black shadow-lg h-[70vh] overflow-auto ring-1 ring-slate-900/5 -my-px">
                        <div className="relative">
                            <div className="sticky top-0 px-4 py-3 flex items-center justify-center font-semibold text-sm text-slate-200 bg-primary-grey backdrop-blur-sm ring-1 ring-black/10">
                                <div className="grid grid-cols-2 w-full text-center">
                                    <button onClick={handleChange} value="true" className={isFollowers ? "cursor-pointer font-medium text-base" : "text-slate-400 font-medium cursor-pointer text-base"}>Followers</button>
                                    <button onClick={handleChange} value="" className={isFollowers ? "text-slate-400 cursor-pointer font-medium text-base" : "cursor-pointer font-medium text-base"}>Following</button>
                                </div>
                            </div>
                            <div className="divide-y divide-slate-200/5">
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Andrew Alfred</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Aisha Houston</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Anna White</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Andy Flint</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Bob Alfred</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Bianca Houston</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Brianna White</strong>
                                </button>
                                <button onClick={otherProfile} className="flex items-center gap-4 p-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                                    <strong className="text-sm font-medium text-slate-200">Bert Flint</strong>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
    
}