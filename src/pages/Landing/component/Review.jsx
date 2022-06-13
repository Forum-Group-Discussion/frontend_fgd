import { useState, useEffect } from "react";
import "../LandingPage.css";
import Nora from "../../../assets/img/landing/nora.png";
import Zaye from "../../../assets/img/landing/zaye.png";
import Warren from "../../../assets/img/landing/warren.png";
import Pietra from "../../../assets/img/landing/pietra.png";
import Petik1 from "../../../assets/img/landing/petik1.png";
import Petik2 from "../../../assets/img/landing/petik2.png";

const reviews = [
  "Amazing.... Saya pikir forum ini akan membosankan, tetapi ternyata tidak, saya dapat menemukan teman dan informasi baru",
  "Sangat membantu sekali dalam berdiskusi dengan topik yang di minati. Selain bisa menambah relasi, juga dapat menambah wawasan dari thread topik yang ada",
  "Forum diskusi yang sangat asik dan menarik, dengan banyak pilihan topik thread yang tidak membosankan dan sangat informatif",
  "Banyak sekali informasi dari topik-topik yang disediakan sehingga disini dapat mengexplor banyak hal, saya dapat membuat thread juga dapat follow thread yang saya suka",
];
const photos = [Nora, Zaye, Warren, Pietra];
export default function Review() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 4) {
      setCounter(0);
    }
  }, [counter]);

  return (
    <section id="review" className="bg-primary-black p-[10%]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:gap-20 gap-10">
        <div id="review-title" className="text-white font-bold md:text-4xl md:mx-[0] text-3xl mx-auto">
          Review
        </div>
        <div id="review-desc" className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">
          What user say about <span className="font-bold md:text-2xl text-lg">Found</span>?
        </div>
        <div id="review-content" className="w-full shadow-xl flex flex-col p-4 py-[15%] rounded-lg bg-primary-grey relative" data-aos="zoom-in">
          <div id="review-content-text" className="text-white text-center sm:max-w-[40%] mx-auto">
            {reviews[counter]}
          </div>
          <img id="review-content-identity" src={photos[counter]} className="w-[200px] mx-auto sm:mt-[5%] mt-[10%]" alt="" />
          <img id="review-quotation-1" src={Petik1} className="petik1 sm:absolute sm:block hidden" alt="" />
          <img id="review-quotation-2" src={Petik2} className="petik2 sm:absolute sm:block hidden" alt="" />
          <div id="review-dot-1" src="" className="dot plot1 absolute"></div>
          <div id="review-dot-2" src="" className="dot plot3 absolute"></div>
          <div id="review-dot-3" src="" className="dot plot4 absolute"></div>
          <div id="review-dot-4" src="" className="dot plot5 absolute"></div>
          <div id="review-dot-5" src="" className="dot plot6 absolute"></div>
          <div id="review-dot-6" src="" className="dot plot2 absolute"></div>
        </div>
      </div>
    </section>
  );
}
