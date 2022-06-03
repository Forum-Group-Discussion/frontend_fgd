import { useState, useEffect } from "react"
import { IoLogoGameControllerB } from 'react-icons/io'
import { GiGraduateCap } from 'react-icons/gi'
import { MdHealthAndSafety, MdOutlineCardTravel, MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { RiComputerLine } from 'react-icons/ri'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs(){
    const [isFirst, setFirst] = useState(true)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const onClick = () => {
        setFirst(!isFirst)
    }
    return(
        <section className="bg-primary-black p-[5%]">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-20">
            <div className="text-white font-bold md:text-4xl">About Us</div>
            <div className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg bg-primary-grey">
                <div className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">We provide a place for you to reach out and discuss all the information you need</div>
                {isFirst &&
                    <div className="grid grid-cols-5 lg:gap-15 gap-5 mx-auto my-20">
                        <button><MdNavigateBefore size={70} className="hidden"/></button>
                        <div className="" data-aos="fade-right">
                            <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                                <IoLogoGameControllerB size={100} className='fill-secondary-orange hover:fill-white ease-in-out duration-300' />
                            </div>
                            <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Games</div>
                        </div>
                        <div className="" data-aos="fade-right">
                            <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                                <GiGraduateCap size={100} className='fill-secondary-orange hover:fill-white ease-in-out duration-300' />
                            </div>
                            <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Education</div>
                        </div>
                        <div className="" data-aos="fade-right">
                            <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                                <MdHealthAndSafety size={100} className='fill-secondary-orange hover:fill-white ease-in-out duration-300' />
                            </div>
                            <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Health</div>
                        </div>
                        <button><MdNavigateNext size={70} className="fill-white mx-auto rounded-full bg-primary-purple" onClick={onClick}/></button>
                    </div>
                }
                { !isFirst && 
                    <div className="grid grid-cols-5 gap-20 mx-auto my-20">
                        <button><MdNavigateBefore size={70} className="fill-white mx-auto rounded-full bg-primary-purple" onClick={onClick} /></button>
                        <div className="" data-aos="fade-left">
                            <div className="p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                                <MdOutlineCardTravel size={100} className='fill-secondary-orange hover:fill-white ease-in-out duration-300' />
                            </div>
                            <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Food and Travel</div>
                        </div>
                        <div className="" data-aos="fade-left">
                            <div className="p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                                <RiComputerLine size={100} className='fill-secondary-orange hover:fill-white ease-in-out duration-300' />
                            </div>
                            <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Technology</div>
                        </div>
                        <button><MdNavigateNext size={70} className="hidden" /></button>
                    </div>
                }
            </div>
            </div>
        </section>
    )
}