// import splash from ""
import { Link } from "react-router-dom";
import Saly38 from "../../../assets/img/landing/Saly-38.png";
import Saly41 from "../../../assets/img/landing/Saly-41.png";
import Splash from "../../../assets/img/landing/splash.gif";

export default function Hello() {
  return (
    <div id="greeting">
      <section id="greet-1" className="bg-primary-black p-[10%] h-[100vh] lg:block flex flex-col justify-center">
        <div className="max-w-[1240px] flex lg:justify-between mx-auto justify-center">
          <div id="greet-1-desc">
            <div className="text-white sm:text-5xl text-3xl font-bold">One Place for</div>
            <div className="mt-5 text-white sm:text-5xl text-3xl font-bold">
              <span className="uppercase text-secondary-yellow">unlimited</span> Discussion
            </div>
            <div className="text-white max-w-[500px] mt-10">Find interests and topics that you like to discuss with your online friends. Only with Foru you can grasp information from some of the topics you choose</div>
            <Link to="/login" className="mt-10 text-white font-semibold sm:text-2xl text-lg tracking-wider sm:p-5 p-4 inline-block rounded-full bg-secondary-orange border-secondary-orange hover:text-secondary-orange border hover:bg-primary-black ease-in-out duration-300 ">
              Get Started
            </Link>
          </div>
          <img id="greet-1-img" src={Saly38} alt="logo" className="lg:h-[500px] hidden lg:block" />
        </div>
      </section>
      <section id="greet-2" className="bg-primary-blue relative top-0 left-0 h-[100vh] overflow-hidden">
        <img src={Splash} alt="" className="mx-auto relative  md:h-[800px] top-[50%] -translate-y-[50%] " />
        <img src={Saly41} alt="" className="md:h-[600px] sm:h-[500px] h-400px top-[50%] -translate-y-[50%] absolute top-0 h-[500px] left-[50%] -translate-x-[50%]" />
      </section>
    </div>
  );
}
