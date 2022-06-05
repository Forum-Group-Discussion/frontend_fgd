import { MdTravelExplore, MdReport, MdReplay } from "react-icons/md";
import { IoIosCreate, IoIosTrendingUp } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";

export default function Features() {
<<<<<<< HEAD
  return (
    <section id="features" className="bg-primary-black p-[15%]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:gap-20 gap-10">
        <div id="features-title" className="text-white font-bold md:text-4xl md:mx-[0] text-3xl mx-auto">
          Features
        </div>
        <div id="features-desc" className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">
          Our features will help you explore your world. Find your friends and space with just one click
        </div>
        <div id="features-content" className="grid sm:grid-cols-2 gap-10" data-aos="zoom-in">
          <div id="features-content-search" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <MdTravelExplore size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Search</h2>
            <div className="font-medium mx-8 mt-4 text-grey">You can search for the topic or theme you want by typing the keywords you want to search for</div>
          </div>
          <div id="features-content-create" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <IoIosCreate size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Create a Thread</h2>
            <div className="font-medium mx-8 mt-4 text-grey">Create a thread according to the theme or topic of your choice, you can add pictures and text before you post</div>
          </div>
          <div id="features-content-trending" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <IoIosTrendingUp size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Trending</h2>
            <div className="font-medium mx-8 mt-4 text-grey">See trending topics and accounts that are always updated every day</div>
          </div>
          <div id="features-content-follow" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <RiUserFollowFill size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Follow</h2>
            <div className="font-medium mx-8 mt-4 text-grey">Choose a topic that you like and follow to get news updates about that topic</div>
          </div>
          <div id="features-content-like" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <AiFillLike size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Like</h2>
            <div className="font-medium mx-8 mt-4 text-grey">Click like if you like the thread that appears on your page</div>
          </div>
          <div id="features-content-replay" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <MdReplay size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Replay</h2>
            <div className="font-medium mx-8 mt-4 text-grey">You can also replay the thread of someone you want</div>
          </div>
          <div id="features-content-report" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
            <MdReport size={60} className="fill-secondary-yellow mx-8 mb-5" />
            <h2 className="text-2xl font-bold mx-8 text-white">Report</h2>
            <div className="font-medium mx-8 mt-4 text-grey">Report thread if the thread contains SARA elements and harms others</div>
          </div>
        </div>
      </div>
    </section>
  );
=======
    return (
        <section id="features" className="bg-primary-black p-[10%]">
            <div className="max-w-[1240px] mx-auto flex flex-col md:gap-20 gap-10">
                <div id="features-title" className="text-white font-bold md:text-4xl md:mx-[0] text-3xl mx-auto">
                    Features
                </div>
                <div id="features-desc" className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">
                    Our features will help you explore your world. Find your friends and space with just one click
                </div>
                <div id="features-content" className="grid sm:grid-cols-2 gap-10" data-aos="zoom-in">
                    <div id="features-content-search" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <MdTravelExplore size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Search</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">You can search for the topic or theme you want by typing the keywords you want to search for</div>
                    </div>
                    <div id="features-content-create" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <IoIosCreate size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Create a Thread</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">Create a thread according to the theme or topic of your choice, you can add pictures and text before you post</div>
                    </div>
                    <div id="features-content-trending" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <IoIosTrendingUp size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Trending</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">See trending topics and accounts that are always updated every day</div>
                    </div>
                    <div id="features-content-follow" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <RiUserFollowFill size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Follow</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">Choose a topic that you like and follow to get news updates about that topic</div>
                    </div>
                    <div id="features-content-like" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <AiFillLike size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Like</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">Click like if you like the thread that appears on your page</div>
                    </div>
                    <div id="features-content-replay" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <MdReplay size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Replay</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">You can also replay the thread of someone you want</div>
                    </div>
                    <div id="features-content-report" className="w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey">
                        <MdReport size={60} className="fill-secondary-yellow mx-8 mb-5" />
                        <h2 className="text-2xl font-bold mx-8 text-white">Report</h2>
                        <div className="font-medium mx-8 mt-4 text-grey">Report thread if the thread contains SARA elements and harms others</div>
                    </div>
                </div>
            </div>
        </section>
    );
>>>>>>> 9c0976cdf7e8667f600bf1365184ca3440af3fc7
}
