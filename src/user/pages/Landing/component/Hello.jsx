// import splash from ""
import { Link } from "react-router-dom"

export default function Hello(){
    return(
        <div>
            <section className="bg-primary-black p-[10%]">
                <div className="max-w-[1240px] flex lg:justify-between mx-auto justify-center">
                    <div>
                        <div className="text-white text-5xl font-bold">One Place for</div>
                        <div className="mt-5 text-white text-5xl font-bold"><span className="uppercase text-secondary-yellow">unlimited</span> Discussion</div>
                        <div className="text-white max-w-[500px] mt-10">Find interests and topics that you like to discuss with your online friends. Only with Foru you can grasp information from some of the topics you choose</div>
                        <Link to='' className="mt-10 text-white font-semibold text-2xl tracking-wider p-5 inline-block rounded-full bg-secondary-orange">Get Started</Link>
                    </div>
                    <img src="./Saly-38.png" alt="logo" className="lg:h-[500px] hidden lg:block"/>
                </div>
            </section>
            <section className="bg-primary-blue relative top-0 left-0 h-[100vh] overflow-hidden">
                <img src="splash.gif" alt="" className="mx-auto relative  md:h-[800px] top-[50%] -translate-y-[50%] "/>
                <img src="Saly-41.png" alt="" className="md:h-[600px] sm:h-[500px] h-400px top-[50%] -translate-y-[50%] absolute top-0 h-[500px] left-[50%] -translate-x-[50%]"/>
            </section>
        </div>
    )
}