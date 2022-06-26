import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useRef } from "react";
import "./createthread.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function CreateThread() {
  const [value, setValue] = useState({ title: "", topic: "" });
  const [content, setContent] = useState("");
  const fotoThread = useRef(null);
  const [error, setError] = useState({ errTitle: "Please add a title", errTopic: "Please add a topic" });
  const navigate = useNavigate();

  // useEffect(()=>{
  //     console.log(value, content)
  // })

  const handleTitle = (e) => {
    setValue({ ...value, title: e.target.value });
    if (e.target.value === "") setError({ ...error, errTitle: "Please add a title" });
    else setError({ ...error, errTitle: "" });
  };
  const handleTopic = (e) => {
    setValue({ ...value, topic: e.target.value });
    if (e.target.value === "") setError({ ...error, errTopic: "Please add a topic" });
    else setError({ ...error, errTopic: "" });
  };
  const modules = {
    toolbar: [["bold", "underline", "italic", "strike"], ["code-block", "blockquote"], [{ header: [1, 2, 3, 4, 5] }], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"]],
  };
  const handleSubmit = async () => {
    if (error.errTitle === "" && error.errTopic === "" && content !== "") {
      // await pindah ke database
      navigate("/user/account");
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Successfully Created",
        animation: false,
        background: "#222834",
        color: "#18B015",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      // set jadi kosong lagi
      setValue({ title: "", topic: "" });
      setContent("");
      setError({ errTitle: "Please add a title", errTopic: "Please add a topic" });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        title: "Check Again",
        animation: false,
        background: "#222834",
        color: "#DE1508",
        position: "bottom-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    }
  };
  return (
    <div className="bg-primary-black min-h-[100vh] overflow-hidden">
      <Navbar />
      <div id="create-thread" className="max-w-[1240px] xl:mx-auto mx-10">
        <div className="h-14 sm:h-20"></div>
        <form id="form" onSubmit={handleSubmit}>
          <div id="title-box" className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
            <label htmlFor="title" className="block text-gray-300 mb-2">
              Add Title
            </label>
            <input id="title" type="text" onChange={handleTitle} value={value.title} placeholder="Title" className="w-full py-3 px-8 bg-primary-grey rounded-lg text-white" />
          </div>
          <div id="title-err" className="text-secondary-orange">
            {error.errTitle}
          </div>
          <div id="img-box" className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
            <label htmlFor="img" className="block text-gray-300 mb-4">
              Add Image
            </label>
            <label htmlFor="img" className="bg-secondary-blue px-6 py-2 text-white rounded-lg cursor-pointer text-center">
              Choose Image
            </label>
            <input id="img" type="file" ref={fotoThread} />
          </div>
          <div id="topic-box" className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
            <div className="block text-gray-300 mb-2">Choose topic</div>
            <div className="radio-group grid md:grid-cols-5 grid-cols-2 gap-6">
              <input id="topic-games" type="radio" name="topic" checked={value.topic === "Games"} value="Games" onChange={handleTopic} />
              <label htmlFor="topic-games" className="bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto">
                Games
              </label>
              <input id="topic-health" type="radio" name="topic" checked={value.topic === "Health"} value="Health" onChange={handleTopic} />
              <label htmlFor="topic-health" className="bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto">
                Health
              </label>
              <input id="topic-foodtravel" type="radio" name="topic" checked={value.topic === "FoodTravel"} value="FoodTravel" onChange={handleTopic} />
              <label htmlFor="topic-foodtravel" className="bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto">
                Food & Travel
              </label>
              <input id="topic-tech" type="radio" name="topic" checked={value.topic === "Tech"} value="Tech" onChange={handleTopic} />
              <label htmlFor="topic-tech" className="bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto">
                Tech - nology
              </label>
              <input id="topic-edu" type="radio" name="topic" checked={value.topic === "Edu"} value="Edu" onChange={handleTopic} />
              <label htmlFor="topic-edu" className="bg-primary-grey px-6 py-3 text-white rounded-lg cursor-pointer text-center my-auto">
                Edu - cation
              </label>
            </div>
          </div>
          <div id="topic-err" className="text-secondary-orange">
            {error.errTopic}
          </div>
          <div id="content-box" className="mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md">
            <div className="block text-gray-300 mb-2">Thread Content</div>
            <div id="text-editor" className="editor">
              <ReactQuill modules={modules} theme="snow" onChange={setContent} placeholder="Write Something..." className="h-[60%]" />
            </div>
          </div>
          <input id="submit-button" type="submit" value="Submit" className="mb-[12%] sm:mb-[4%] mt-[3%] w-full bg-primary-grey hover:bg-secondary-orange py-4 rounded-xl text-white text-lg md:text-xl font-bold"></input>
        </form>
      </div>
    </div>
  );
}
