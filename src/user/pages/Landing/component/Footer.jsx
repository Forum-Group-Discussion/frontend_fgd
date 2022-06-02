import { useState } from "react";
// import "./RegisterPage.css";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
    FaYoutubeSquare
} from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

export default function(){
    return(
        <div className="footer bg-primary-black p-10">
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-5 grid-cols-3 gap-8 text-white'>
                <div className="lg:col-span-2 col-span-3">
                    <div>
                        <img src="" alt="" />
                        <h1 className='w-full text-3xl font-bold text-white'>REACT.</h1>
                    </div>
                    <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                </div>
                <div className="lg:ml-10">
                    <div className='text-white md:text-xl text-lg font-bold mb-4'>About Us</div>
                    <ul>
                        <li className='py-2 text-sm'>Our Story</li>
                        <li className='py-2 text-sm'>Privacy Policy</li>
                        <li className='py-2 text-sm'>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="lg:ml-10">
                    <div className='text-white md:text-xl text-lg font-bold mb-4'>Support</div>
                    <ul>
                        <li className='py-2 text-sm'>FAQ's</li>
                        <li className='py-2 text-sm'>Archives</li>
                        <li className='py-2 text-sm'>Forum</li>
                    </ul>
                </div>
                <div className="lg:ml-10">
                    <div className='text-white md:text-xl text-lg font-bold mb-4'>Contact Us</div>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
            <div>
                <h6 className="text-white text-center mt-10 font-bold">Temukan Kami Di</h6>
                <div className='flex justify-between mx-auto lg:w-[30%] md:w-[40%] w-[50%] my-6 mt-10'>
                    <FaFacebookSquare size={30} className='fill-secondary-red' />
                    <FaInstagram size={30} className='fill-secondary-red' />
                    <FaTwitterSquare size={30} className='fill-secondary-red' />
                    <FaYoutubeSquare size={30} className='fill-secondary-red' />
                    <FaLinkedin size={30} className='fill-secondary-red' />
                    <FaGithubSquare size={30} className='fill-secondary-red' />
                    <FaDribbbleSquare size={30} className='fill-secondary-red' />
                </div>
                <h6 className="text-white text-center mt-10 pb-10">Copyright © 2020 ThemeMove WordPress</h6>
            </div>
        </div>
    )
}