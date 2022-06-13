import { useState, useEffect } from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { MdHealthAndSafety, MdOutlineCardTravel, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  const [isFirst, setFirst] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const onClick = () => {
    setFirst(!isFirst);
  };
  return (
    <section id="about" className="bg-primary-black p-[10%]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:gap-20 gap-10">
        <div id="about-title" className="text-white font-bold md:text-4xl md:mx-[0] text-3xl mx-auto">
          About Us
        </div>
        <div id="about-desc" className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">
          We provide a place for you to reach out and discuss all the information you need
        </div>
        <div id="about-content" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg bg-primary-grey" data-aos="zoom-in">
          {isFirst && (
            <div id="about-content-1" className="grid md:grid-cols-5 lg:gap-15 gap-5 mx-auto my-20">
              <button>
                <MdNavigateBefore size={70} id="about-content-1-slide-left" className="hidden" />
              </button>
              <div id="about-content-games" data-aos="fade-right">
                <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                  <IoLogoGameControllerB size={100} className="mx-auto fill-secondary-orange hover:fill-white ease-in-out duration-300" />
                </div>
                <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Games</div>
              </div>
              <div id="about-content-education" data-aos="fade-right">
                <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                  <GiGraduateCap size={100} className="mx-auto fill-secondary-orange hover:fill-white ease-in-out duration-300" />
                </div>
                <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Education</div>
              </div>
              <div id="about-content-health" data-aos="fade-right">
                <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                  <MdHealthAndSafety size={100} className="mx-auto fill-secondary-orange hover:fill-white ease-in-out duration-300" />
                </div>
                <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Health</div>
              </div>
              <button>
                <MdNavigateNext size={70} id="about-content-1-slide-right" className="fill-white mx-auto rounded-full bg-primary-purple" onClick={onClick} />
              </button>
            </div>
          )}
          {!isFirst && (
            <div id="about-content-2" className="grid md:grid-cols-4 gap-20 mx-auto my-20">
              <button>
                <MdNavigateBefore size={70} id="about-content-2-slide-left" className="fill-white mx-auto rounded-full bg-primary-purple" onClick={onClick} />
              </button>
              <div id="about-content-foodtravel" data-aos="fade-right">
                <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                  <MdOutlineCardTravel size={100} className="mx-auto fill-secondary-orange hover:fill-white ease-in-out duration-300" />
                </div>
                <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Food & Travel</div>
              </div>
              <div id="about-content-tech" data-aos="fade-right">
                <div className="lg:p-10 rounded-lg hover:bg-secondary-orange ease-in-out duration-300">
                  <RiComputerLine size={100} className="mx-auto fill-secondary-orange hover:fill-white ease-in-out duration-300" />
                </div>
                <div className="mt-5 text-xl text-center text-white font-semibold tracking-wider">Technology</div>
              </div>
              <button>
                <MdNavigateNext size={70} id="about-content-2-slide-left" className="hidden" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
