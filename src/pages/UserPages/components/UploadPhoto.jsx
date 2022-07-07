import { useState,useRef } from "react";
import { IoIosClose } from "react-icons/io"
import { CgImage } from "react-icons/cg"


export default function UploadPhoto({onCancel}){
    const fotoThread = useRef(null);
    const [image, setImage] = useState(null);

    return(
        <div id="filter-mobile-tablet">
            <div className="fixed z-50 inset-0 m-auto">
                <div onClick={onCancel} className="fixed inset-0 bg-[#ffffff4d]"></div>
                    <div className="px-3">
                        <div id="box" className="no-scrollbar rounded-xl mt-[85%] md:mt-[45%] lg:mt-[35%] xl:mt-[25%] -translate-y-[50%] relative max-w-md mx-auto bg-white shadow-lg overflow-auto ring-1 ring-slate-900/5 -my-px">
                            <div className="relative">
                                <div id="header" className="sticky top-0 px-4 py-3 font-semibold text-sm text-slate-900 bg-slate-50/90 backdrop-blur-sm ring-1 ring-slate-900/10">
                                    <div id="title" className="text-center">Upload Photo</div>
                                    <IoIosClose id="close-button" onClick={onCancel} size={40} className="absolute right-1 top-1 cursor-pointer" />
                                </div>
                                <div id="list-account" className="py-20">
                                    <div className="">
                                        <CgImage size={100} className="text-gray-400 mx-auto mb-2"/>
                                        <div className="text-center mb-12">Drag your photo here</div>
                                        <div className="mx-auto w-fit">
                                        {/* <button className="mx-auto text-center text-white font-semibold px-6 py-3 bg-secondary-orange rounded-2xl block">
                                            Select from computer
                                        </button> */}
                                        <form>
                                            <label htmlFor="img" className="bg-secondary-orange px-6 py-2 text-white rounded-lg cursor-pointer text-center">
                                            Choose Image
                                            </label>
                                            <input className="hidden"
                                            id="img"
                                            type="file"
                                            ref={fotoThread}
                                            // onChange={(e) => {
                                            //     setImage(e.target.files[0]);
                                            // }}
                                            name="image"
                                            />
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}