import { useNavigate } from "react-router-dom"
import { IoIosClose } from "react-icons/io"
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiFillLike } from "react-icons/ai"
import { FcLikePlaceholder, FcLike } from "react-icons/fc"
import { BsBookmark } from "react-icons/bs"
import { MdOutlineReport } from "react-icons/md"
import { useState } from "react"
import Swal from "sweetalert2"
import PopupShare from "./PopupShare"
import PopupReport from "./PopupReport"
import "./FullThread.css"

const data =
    {
        id: 1,
        name: "Andrew Alfred",
        profpic: "https://images.unsplash.com/photo-1526116977494-90748acc0cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&w=1000&q=80",
        followed: false,
        img: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/sokola-rimba.jpg",
        caption: "Pengalaman nyata seorang aktivis yang bekerja di lembaga konservasi alam",
        time: "3 days ago",
        likes: 1928364,
        replies: [
            {
                id: 1,
                name: "Anna White",
                profpic: "https://p.favim.com/orig/2018/08/04/aesthetic-purple-profile-mood-Favim.com-6093478.jpg",
                comment: "harusnya pendidikan bisa lebih merata yaa, agar anak bangsa mempunyai kesempatan yang sama dlm menempuh pendidikan",
                time: "3 days ago",
                likes: 4893,
                replies: [
                    {
                        id: 1,
                        name: "stevanie",
                        profpic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
                        comment: "yess, tapi kenyataannya masih banyak anak-anak yang terhalang menempuh pendidikan dikarenakan akses dari jarak sekolah dan biaya",
                        time: "3 days ago",
                        likes: 245
                    },
                    {
                        id: 2,
                        name: "bella",
                        profpic: "https://media.istockphoto.com/photos/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-picture-id1286272331?b=1&k=20&m=1286272331&s=170667a&w=0&h=ODJjG3GrMQVPoYFmt0wRZudTWJVEQav22YJemMP0j8Y=",
                        comment: "setuju",
                        time: "2 days ago",
                        likes: 0
                    }
                ]
            },
            {
                id: 2,
                name: "Andy Flint",
                profpic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                comment: "very inspiring film",
                time: "3 days ago",
                likes: 1,
                replies: []
            },
            {
                id: 3,
                name: "Andy Flint",
                profpic: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                comment: "very inspiring film",
                time: "3 days ago",
                likes: 1,
                replies: []
            },
            {
                id: 4,
                name: "Anna White",
                profpic: "https://p.favim.com/orig/2018/08/04/aesthetic-purple-profile-mood-Favim.com-6093478.jpg",
                comment: "harusnya pendidikan bisa lebih merata yaa, agar anak bangsa mempunyai kesempatan yang sama dlm menempuh pendidikan",
                time: "3 days ago",
                likes: 4893,
                replies: [
                    {
                        id: 1,
                        name: "stevanie",
                        profpic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80",
                        comment: "yess, tapi kenyataannya masih banyak anak-anak yang terhalang menempuh pendidikan dikarenakan akses dari jarak sekolah dan biaya",
                        time: "3 days ago",
                        likes: 245
                    },
                    {
                        id: 2,
                        name: "bella",
                        profpic: "https://media.istockphoto.com/photos/beauty-portrait-of-young-asian-woman-on-the-light-and-shadow-picture-id1286272331?b=1&k=20&m=1286272331&s=170667a&w=0&h=ODJjG3GrMQVPoYFmt0wRZudTWJVEQav22YJemMP0j8Y=",
                        comment: "setuju",
                        time: "2 days ago",
                        likes: 0
                    }
                ]
            },
        ]
    }

export default function FullThread({onCancel}){
    const navigate = useNavigate()
    const [showReplies, setShowReplies] = useState(new Array(data.replies.length).fill(false))
    const [comment, setComment] = useState("")
    const [popupShare, setPopupShare] = useState(false)
    const [popupReport, setPopupReport] = useState(false)
    const [like, setLike] = useState(false)

    const handleLike = e => {
        setLike(!like)
    }

    const otherProfile = () => {
        navigate("/user/account/other")
    }

    // console.log(showReplies)
    const handleShowReplies = e => {
        const updatedShowReplies = showReplies.map((item, index) =>
            index === Number(e.target.value)-1 ? !item : item
        )
        setShowReplies(updatedShowReplies)
    }

    const handleReply = e => {
        if(comment){
            setComment("@" + e.target.value + " " + comment)
        }
        else{
            setComment("@" + e.target.value + " ")
        }
    }

    const handleChange = e => {
        // console.log(e.target.value)
        setComment(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        // send comment
        // if balas comment
        if((comment).includes("@")){
            console.log("balas komen")
        }
        // if balas post thread
        else{
            console.log("balas thread")
        }
    }

    const showPopupShare = () => {
        if (popupShare === false) {
            setPopupShare(true)
        }
    }

    const closePopupShare = () => {
        if(popupShare === true) {
            setPopupShare(false)
        }
    }

    const showPopupReport = () => {
        if (popupReport === false) {
            setPopupReport(true)
        }
    }

    const closePopupReport = () => {
        if(popupReport === true) {
            setPopupReport(false)
        }
    }
    const handleSave = () => {
        Swal.fire({
            toast: true,
            icon: "success",
            title: "Thread successfully saved",
            animation: false,
            background: "#222834",
            color: "#18B015",
            position: "bottom-end",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
    }

    return(
        <div id="full-thread" className="fixed z-50 inset-0 m-auto">
            <div onClick={onCancel} className="fixed inset-0 bg-[#ffffff4d]"></div>
            <div className="px-3">
                <div id="box" className="overflow-auto no-scrollbar lg:overflow-hidden md:h-[80vh] xl:h-[90vh] rounded-md mt-[85%] -translate-y-[40%] md:mt-[45%] lg:mt-[35%] xl:mt-[25%] md:-translate-y-[50%] relative w-[90%] md:w-[70%] mx-auto shadow-lg ring-1 ring-slate-900/5 -my-px">
                    <div className="relative bg-white">
                        <div id="content" className="lg:grid grid-cols-2 h-[80vh] md:h-[80vh] xl:h-[90vh]">
                            <div className="">
                                <img src={data.img} className="w-full object-cover h-[40vh] md:h-[80vh] xl:h-[90vh] lg:absolute lg:w-[50%] top-0 left-0" />
                            </div>
                            <div className="">
                                <div id="header" className="lg:absolute top-0 right-0 left-[50%] px-4 py-3 font-semibold text-xs md:text-sm text-slate-900 bg-slate-50/90 ring-1 ring-slate-900/10">
                                    <div id="identity" className="flex gap-4">
                                        <img id="profpic-header" onClick={otherProfile} src={data.profpic} className="w-6 h-6 rounded-full cursor-pointer" />
                                        <div id="name-follow" onClick={otherProfile} className="my-auto cursor-pointer">{data.name} 
                                            <span className={data.followed ? "ml-2" : "ml-2 text-secondary-orange opacity-80"}> 
                                                <button className="font-bold">{data.followed ? "Following" : "Follow"}</button> 
                                            </span> 
                                        </div>
                                    </div>
                                    <IoIosClose id="close-button" onClick={onCancel} size={40} className="absolute right-1 top-1 cursor-pointer" />
                                </div>
                                <div id="content-box" className="lg:mt-12 lg:mb-32">
                                    <div id="content" className="scrollbar text-xs md:text-sm p-4 overflow-auto h-[57vh] md:h-[50vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[60vh]">
                                        <div id="identity" onClick={otherProfile} className="flex gap-4 mb-2 cursor-pointer">
                                            <img id="profpic" src={data.profpic} className="w-6 h-6 rounded-full" />
                                            <div id="name" className="my-auto font-semibold">{data.name}</div>
                                        </div>
                                        <div className="mb-2 ml-10">{data.caption}</div>
                                        <div className="mb-6 ml-10 text-grey">{data.time}</div>
                                        {data.replies?.map(item => (
                                            <div id="post-comment" key={item.id} className="relative">
                                                <div>
                                                    <div id="post-comment-identity" onClick={otherProfile} className="flex gap-4 mb-2 cursor-pointer max-w-[85%]">
                                                        <img id="post-comment-profpic" src={item.profpic} className="w-6 h-6 rounded-full" />
                                                        <div id="post-comment-name" className="my-auto font-semibold">{item.name}</div>
                                                    </div>
                                                    <div id="post-comment-content" className="mb-2 ml-10 max-w-[85%]">{item.comment}</div>
                                                    <div className="flex gap-4 mb-4 ml-10">
                                                        <div id="post-comment-time" className="text-grey">{item.time}</div>
                                                        {item.likes>1 && <div id="post-comment-sum-likes" className="text-grey">{(item.likes).toLocaleString()} Likes</div>}
                                                        {item.likes>0 && item.likes<2 && <div id="post-comment-one-like" className="text-grey">{item.likes} Like</div>}
                                                        <button id="post-comment-reply-button" onClick={handleReply} value={item.name} className="text-grey cursor-pointer">Reply</button>
                                                    </div>
                                                    {item.replies.length>1 && !showReplies[item.id-1] && 
                                                        <button id="show-replies-button" onClick={handleShowReplies} value={item.id} className="ml-10 mb-4 text-grey cursor-pointer">
                                                            ---- Show Replies ({item.replies.length})
                                                        </button>
                                                    }
                                                    {item.replies.length>1 && showReplies[item.id-1] && 
                                                        <button id="hide-replies-button" onClick={handleShowReplies} value={item.id} className="ml-10 mb-4 text-grey cursor-pointer">
                                                            ---- Hide Replies
                                                        </button>
                                                    }
                                                    {showReplies[item.id-1] && item.replies?.map(item1 => (
                                                        <div id="comment-comment" key={item1.id} className="ml-10 relative">
                                                            <div>
                                                                <div id="comment-comment-identity" onClick={otherProfile} className="flex gap-4 mb-2 cursor-pointer max-w-[85%]">
                                                                    <img id="comment-comment-profpic" src={item1.profpic} className="w-6 h-6 rounded-full" />
                                                                    <div id="comment-comment-name" className="my-auto font-semibold">{item1.name}</div>
                                                                </div>
                                                                <div id="comment-comment-content" className="mb-2 ml-10 max-w-[85%]">{item1.comment}</div>
                                                                <div className="flex gap-4 mb-4 ml-10">
                                                                    <div id="comment-comment-time" className="text-grey">{item1.time}</div>
                                                                    {item1.likes>1 && <div id="comment-comment-sum-likes" className="text-grey">{(item1.likes).toLocaleString()} Likes</div>}
                                                                    {item1.likes>0 && item1.likes<2 && <div id="comment-comment-one-like" className="text-grey">{item1.likes} Like</div>}
                                                                    <button id="comment-comment-reply-button" onClick={handleReply} value={item1.name} className="text-grey cursor-pointer">Reply</button>
                                                                </div>
                                                            </div>
                                                            <div id="like-comment-comment-button" onClick={handleLike} className="absolute right-0 top-0 cursor-pointer">
                                                                { like 
                                                                ? <FcLike className="fill-secondary-red w-4 h-4 md:w-6 md:h-6"/>
                                                                : <FcLikePlaceholder className="fill-grey w-4 h-4 md:w-6 md:h-6" />
                                                                }
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div id="like-post-comment-button" onClick={handleLike} className="absolute right-0 top-0 cursor-pointer">
                                                    { like 
                                                    ? <FcLike className="fill-secondary-red w-4 h-4 md:w-6 md:h-6"/>
                                                    : <FcLikePlaceholder className="fill-grey w-4 h-4 md:w-6 md:h-6" />
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:fixed bottom-0 right-0 left-[50%] bg-white">
                                    <hr />
                                    <div id="action-button" className="flex justify-between my-2 lg:my-3 px-4 text-xs md:text-sm xl:text-base">
                                        <div className="flex gap-3">
                                            <AiOutlineLike className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 cursor-pointer"/>
                                            <AiOutlineDislike className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 cursor-pointer"/>
                                            <AiOutlineShareAlt onClick={showPopupShare} className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 cursor-pointer"/>
                                        </div>
                                        <div className="flex gap-3">
                                            <MdOutlineReport onClick={showPopupReport} className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 cursor-pointer"/>
                                            <BsBookmark onClick={handleSave} className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 cursor-pointer"/>
                                        </div>
                                    </div>
                                    <hr />
                                    <div id="like-stat" className="flex gap-3 my-2 lg:my-3 px-4 text-xs md:text-sm xl:text-base">
                                        <AiOutlineLike className="fill-grey w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8"/>
                                        {data.likes>1 && <div className="text-grey my-auto">{(data.likes).toLocaleString()} Likes</div>}
                                        {data.likes>0 && data.likes<2 && <div className="text-grey my-auto">{data.likes} Like</div>}
                                    </div>
                                    <hr />
                                    <form id="comment-reply-box" onSubmit={handleSubmit} className="py-2 px-4 md:p-4 flex justify-between text-xs md:text-base">
                                        <textarea className="h-6 md:h-8 w-full focus:outline-none text-xs md:text-sm xl:text-base" onChange={handleChange} value={comment} placeholder="Add a comment..."/>
                                        <button type="Submit" className="border-none bg-none md:px-4 text-secondary-orange text-xs md:text-sm xl:text-base">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='close-popup' className={popupShare ? 'popupShare active' : 'popupShare'}>
                <div>
                    <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupShare closePopupShare={closePopupShare} />
                    </div>
                </div>
            </div>

            <div id='close-popup' className={popupReport ? 'popupReport active' : 'popupReport'}>
                <div>
                    <div className="flex absolute inset-0 m-auto justify-center p-4">
                        <PopupReport closePopupReport={closePopupReport}/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}