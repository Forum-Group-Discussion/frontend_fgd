import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useRef } from 'react'
import "./createthread.css"
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function CreateThread(){
    const [ value, setValue ] = useState("");
    const [ topic, setTopic ] = useState({Games:false, Health:false, FoodTravel:false, Tech:false, Edu:false})
    const fotoThread = useRef(null)
    const [counter, setCounter ] = useState(0)

    useEffect(()=>{
        console.log(value)
    })

    const handleTopic = e => {
        if(e.target.name==='Games'){
            setTopic({...topic, Games: !topic.Games})
        } 
        if(e.target.name==='Health'){
            setTopic({...topic, Health: !topic.Health})
        } 
        if(e.target.name==='FoodTravel'){
            setTopic({...topic, FoodTravel: !topic.FoodTravel})
        } 
        if(e.target.name==='Tech'){
            setTopic({...topic, Tech: !topic.Tech})
        } 
        if(e.target.name==='Edu'){
            setTopic({...topic, Edu: !topic.Edu})
        } 
    }
    useEffect(()=>{
        if(topic.Games){
            setCounter(counter+1)
        }
        if(topic.Health){
            setCounter(counter+1)
        }
        if(topic.FoodTravel){
            setCounter(counter+1)
        }
        if(topic.Tech){
            setCounter(counter+1)
        }
        if(topic.Edu){
            setCounter(counter+1)
        }
    },[topic])
    const modules = {
        toolbar: [
            ["bold", "underline", "italic", "strike"],
            ["code-block", "blockquote"],
            [{ header: [1, 2, 3, 4, 5] }],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
            {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
        ]
    }
    return(
        <div className='bg-primary-black min-h-[100vh]'>
            <Navbar />
            <div className='max-w-[1240px] xl:mx-auto mx-10'>
                <div className='h-14 sm:h-20'></div>
                <div className='mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md'>
                    <div className='text-gray-300 mb-2'>Add Title</div>
                    <input type="text" required placeholder='Title'className='w-full py-3 px-8 bg-primary-grey rounded-lg text-white'/>
                </div>
                <div className='mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md'>
                    <div className='text-gray-300 mb-2'>Add Image</div>
                    <input type="file" ref={fotoThread} />
                </div>
                <div className='mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md'>
                    <div className='text-gray-300 mb-2'>Choose topic</div>
                    <div className='flex gap-6'>
                        <button name='Games' onClick={handleTopic} className={topic.Games?'bg-[#6C5DD4] px-6 py-3 text-black font-semibold rounded-lg':'bg-primary-grey px-6 py-3 text-white rounded-lg'}>Games</button>
                        <button name='Health' onClick={handleTopic} className={topic.Health?'bg-[#5DD8D0] px-6 py-3 text-black font-semibold rounded-lg':'bg-primary-grey px-6 py-3 text-white rounded-lg'}>Health</button>
                        <button name='FoodTravel' onClick={handleTopic} className={topic.FoodTravel?'bg-[#ECB0CD] px-6 py-3 text-black font-semibold rounded-lg':'bg-primary-grey px-6 py-3 text-white rounded-lg'}>Food & Travel</button>
                        <button name='Tech' onClick={handleTopic} className={topic.Tech?'bg-[#BE70EE] px-6 py-3 text-black font-semibold rounded-lg':'bg-primary-grey px-6 py-3 text-white rounded-lg'}>Tehnology</button>
                        <button name='Edu' onClick={handleTopic} className={topic.Edu?'bg-[#FFA066] px-6 py-3 text-black font-semibold rounded-lg':'bg-primary-grey px-6 py-3 text-white rounded-lg'}>Education</button>
                    </div>
                </div>
                <div className='mb-[6%] sm:mb-[2%] mt-[3%] text-sm sm:text-md'>
                    <div className='text-gray-300 mb-2'>Topic Content</div>
                    <div className='editor'>
                        <ReactQuill modules={modules} 
                                theme="snow" 
                                onChange={setValue}
                                placeholder="Write Something..."
                                className='h-[60%]'/>
                    </div>
                </div>
                <button className='mb-[12%] sm:mb-[4%] mt-[3%] w-full bg-primary-grey hover:bg-secondary-orange py-4 rounded-xl text-white text-lg md:text-xl font-bold'>Submit</button>
            </div>
        </div>
    )
}