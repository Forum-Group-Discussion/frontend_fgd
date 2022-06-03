import { useState, useEffect } from "react"
import "../LandingPage.css"

const reviews = [
    'Sangat membantu sekali dalam berdiskusi dengan topik yang di minati. Selain bisa menambah relasi, juga dapat menambah wawasan dari thread topik yang ada',
    'Yooohooo',
    'Bismillah',
    'Alhamdulillah'
]
const names = [
    'Nora', 'Zaye', 'Warren', 'Pietra'
]
const photos = [
    ,'zaye.png', , 
]
export default function Review(){
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    useEffect(()=>{
        console.log(counter, names[counter])
        if(counter===4){
            setCounter(0)
        }
    })

    return(
        <section className="bg-primary-black p-[5%]">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-20">
            <div className="text-white font-bold md:text-4xl">Review</div>
            <div className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">What user say about Found?</div>
            <div className="w-full shadow-xl flex flex-col p-4 py-[15%] rounded-lg bg-primary-grey relative">
                <img src="petik1.png" className="petik1 absolute"></img>
                <img src="petik2.png" className="petik2 absolute"></img>
                <div src="" className="dot plot1 absolute"></div>
                <div src="" className="dot plot2 absolute"></div>
                <div src="" className="dot plot3 absolute"></div>
                <div src="" className="dot plot4 absolute"></div>
                <div src="" className="dot plot5 absolute"></div>
                <div src="" className="dot plot6 absolute"></div>
                <div className="text-white text-center max-w-[40%] mx-auto">{reviews[counter]}</div>
                <div className="mt-20 flex mx-auto w-[200px] justify-between">
                    <img src={photos[counter]} className="w-[100px]" alt="" />
                    <div className="text-white text-xl font-bold">{names[counter]}</div>
                </div>
            </div>
            </div>
        </section>
    )
}