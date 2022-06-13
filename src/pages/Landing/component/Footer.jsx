import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Logo from "../../../assets/img/logo.png";

export default function Footer() {
  return (
    <div id="footer" className="footer bg-primary-black p-10">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-8 text-white">
        <div id="footer-company" className="lg:col-span-2 sm:col-span-3 col-span-2">
          <div id="footer-company-logo">
            <img src={Logo} alt="logo" className="w-[200px]" />
          </div>
          <p id="footer-company-desc" className="py-4">
            234 A Street Markin, Shanen , USA
          </p>
        </div>
        <div id="footer-about" className="lg:ml-10">
          <div className="text-white md:text-xl text-lg font-bold mb-4">About Us</div>
          <ul>
            <li className="py-2 text-sm">Our Story</li>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Terms and Conditions</li>
          </ul>
        </div>
        <div id="footer-support" className="lg:ml-10">
          <div className="text-white md:text-xl text-lg font-bold mb-4">Support</div>
          <ul>
            <li className="py-2 text-sm">FAQ's</li>
            <li className="py-2 text-sm">Archives</li>
            <li className="py-2 text-sm">Forum</li>
          </ul>
        </div>
        <div id="footer-contact" className="lg:ml-10">
          <div className="text-white md:text-xl text-lg font-bold mb-4">Contact Us</div>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
      <div id="footer-contact">
        <h6 id="footer-socmed-title" className="text-white text-center mt-10 font-bold">
          Find Us
        </h6>

        <div id="footer-socmed" className="flex justify-between mx-auto lg:w-[30%] md:w-[50%] w-full my-6 mt-10">
          <FaFacebookSquare size={30} className="fill-secondary-red" />
          <FaInstagram size={30} className="fill-secondary-red" />
          <FaTwitterSquare size={30} className="fill-secondary-red" />
          <FaYoutubeSquare size={30} className="fill-secondary-red" />
          <FaLinkedin size={30} className="fill-secondary-red" />
          <FaGithubSquare size={30} className="fill-secondary-red" />
          <FaDribbbleSquare size={30} className="fill-secondary-red" />
        </div>
        <h6 id="footer-copyright" className="text-white text-center mt-10 pb-10">
          Copyright © 2022 TeamName
        </h6>
      </div>
    </div>
  );
}
