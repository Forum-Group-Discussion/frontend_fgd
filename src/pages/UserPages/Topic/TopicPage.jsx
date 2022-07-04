import "./Topic.css";
import Navbar from "../components/Navbar";
import Thread from "./component/Thread.jsx";
import TrendAccount from "./component/TrendAccount";
import { BiFilterAlt, BiFilter } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

export default function TopicPage() {
  const [keyword, setKeyword] = useState("");
  const [topic, setTopic] = useState(new Array(5).fill(false));
  // Keterangan index = 0: Games, 1: Health, 2: Food&Travel, 3: Technology, 4: Education
  const [trend, setTrend] = useState("");
  const [isFiltering, setFiltering] = useState("no");
  const [isAnyResult, setRes] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // console.log(trend)
    // topic.map((item,index) =>
    // console.log(index, item)
    // )
    // console.log(isFiltering)
    if (topic[0] === false && topic[1] === false && topic[2] === false && topic[3] === false && topic[4] === false && trend === "" && keyword === "") {
      setFiltering("no");
    }
    if (keyword !== "" && isFiltering !== "yes") {
      setFiltering("process");
    }
  });
  const handleChange = (e) => {
    setFiltering("process");
    const name = e.target.name;
    const value = e.target.value;
    if (name === "search") {
      setKeyword(value);
      setTopic(topic.fill(false));
      setTrend("");
    }
    if (name === "trend") {
      setTrend(value);
      setTopic(topic.fill(false));
      setKeyword("");
    }
    if (name === "topic") {
      const updatedTopic = topic.map((item, index) => (index === Number(value) ? !item : item));
      setTopic(updatedTopic);
      setTrend("");
      setKeyword("");
    }
  };

  const handleReset = (e) => {
    setTopic(topic.fill(false));
    setTrend("");
    setKeyword("");
    setFiltering("no");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFiltering("yes");
    console.log(keyword);
    // Kalo gada hasilnya
    // setRes(false)
  };

  // passing datanya di sini yak
  const res = () => {
    if (isFiltering === "yes") {
      if (isAnyResult) {
        if (trend === "acc") {
          // buat filter trending acc
          return <TrendAccount />;
        } else if (trend === "thread") {
          // buat filter trending thread
          return <Thread />;
        } else if (keyword !== "") {
          // buat hasil search
          return <Thread />;
        } else {
          // buat filter topic
          return <Thread />;
        }
      } else {
        // kalo hasilnya filter/search gaada
        return <div className="text-md xl:text-lg text-secondary-red">No results found</div>;
      }
    } else if (isFiltering === "no") {
      return <Thread />;
    }
  };

  return (
    <div id="topic" className="bg-black" style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="h-28"></div>
      <div id="container" className="lg:flex w-11/12 md:w-4/5 mx-auto">
        {/* <div className="bg-transparent sticky h-screen top-0 bottom-4"> */}
        <div id="filter-box" className="w-1/4 relative mr-8 mx-auto hidden lg:block">
          <div className="fixed w-1/5">
            <div id="filter" className="p-8 bg-primary-grey rounded-xl">
              <div id="title" className="inline-flex gap-5">
                <BiFilterAlt size={40} className="fill-secondary-orange"></BiFilterAlt>
                <span className="m-auto text-xl xl:text-2xl text-white font-bold">FILTER</span>
              </div>
              <form onSubmit={handleSubmit} className="text-white">
                <div id="topic" className="mt-4">
                  <div className="mb-4 text-md xl:text-lg font-semibold">Topic Theme</div>
                  <div className="flex flex-col gap-3 text-sm xl:text-md">
                    <div className="flex items-center">
                      <input type="checkbox" id="games" name="topic" value="0" checked={topic[0] === true} onChange={handleChange} className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="games"> Games</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="health" name="topic" value="1" checked={topic[1] === true} onChange={handleChange} className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="health"> Health</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="foodtravel" name="topic" value="2" checked={topic[2] === true} onChange={handleChange} className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="foodtravel"> Food & Travel</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tech" name="topic" value="3" checked={topic[3] === true} onChange={handleChange} className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="tech"> Technology</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="edu" name="topic" value="4" checked={topic[4] === true} onChange={handleChange} className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="edu"> Education</label>
                    </div>
                  </div>
                </div>
                <div id="trending" className="mt-4">
                  <div className="mb-4 text-md xl:text-lg font-semibold">Trending</div>
                  <div className="flex flex-col gap-3 text-sm xl:text-md">
                    <div className="flex items-center">
                      <input type="radio" id="trend-acc" name="trend" onChange={handleChange} checked={trend === "acc"} value="acc" className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="trend-acc"> Trending Account</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="trend-thread" name="trend" onChange={handleChange} checked={trend === "thread"} value="thread" className="accent-secondary-orange mr-2 w-4 h-4 rounded cursor-pointer" />
                      <label htmlFor="trend-thread"> Trending Thread</label>
                    </div>
                  </div>
                </div>
                <button onClick={handleReset} className="mt-16 w-full py-1 rounded-lg bg-gray-600 hover:bg-[#2A8DFE] text-center">
                  Reset
                </button>
                <input type="submit" value="Apply" className="mt-4 w-full py-1 rounded-lg bg-secondary-orange hover:bg-[#18B015] cursor-pointer" />
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div id="content-box" className="flex-1">
          <div className="flex justify-between lg:block w-full">
            <BiFilter size={40} className="fill-white lg:hidden my-auto"></BiFilter>
            <div id="search-box" className="w-full ml-2">
              <form onSubmit={handleSubmit}>
                <input type="text" name="search" onChange={handleChange} value={keyword} placeholder="Search here" className="w-full py-3 px-8 bg-[#D9D9D9] rounded-lg" />
              </form>
            </div>
          </div>
          <div className="bg-primary-grey rounded-xl w-full mt-8 p-8">
            <div className="text-white text-md xl:text-lg font-semibold mb-8">
              {isFiltering === "yes" && "Result"}
              {isFiltering === "no" && "Trending Today"}
              {isFiltering === "process" && "Apply your filter or search"}
            </div>
            {res()}
          </div>
        </div>
      </div>
    </div>
  );
}
