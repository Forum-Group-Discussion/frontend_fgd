
const data = [
    {
        id: 1,
        profpic: "https://i.pinimg.com/736x/9c/a2/5a/9ca25a9fe7aaaa1c7cb65e472c6820a8.jpg",
        reportText: "This thread contains inappropriate and pornographic elements",
        date: "Sat. 24.04.2022",
        time: "12:00 PM"
    },
    {
        id: 2,
        profpic: "https://divedigital.id/wp-content/uploads/2021/11/74.jpg",
        reportText: "This account is indicated to violate....",
        date: "Sat. 24.04.2022",
        time: "10:00 PM"
    },
    {
        id: 3,
        profpic: "https://i.pinimg.com/736x/a0/a1/75/a0a175df85e1abceada797d39310fee2.jpg",
        reportText: "This thread contains inappropriate and pornographic elements",
        date: "Sat. 24.04.2022",
        time: "08:00 AM"
    },
]

export default function NoticeBoard () {
    return (
        <div id="notice-board">
            <div className="rounded-md border-gray-500/10 border-2 p-2 h-content w-[100%]">
                <div className="flex flex-col">
                    <div id="title" className="p-5 font-bold text-sm xl:text-base text-center">Notice Board</div>
                    {data?.map(item=>(
                        <div key={item.id} className="rounded-md border-gray-500/10 border-2 px-3 py-5 mb-2">
                            <div id="detail" className="flex items-center">
                                <img src={item.profpic} alt="img user" className="w-[30px] h-[30px] rounded-full"/>
                                <div className="text-report ml-3 text-xs xl:text-sm">{item.reportText}</div>
                            </div>
                            <div id="datetime" className="flex flex-row items-center mt-2 justify-between xl:ml-[40px]">
                                <div className="text-secondary-orange text-xs lg:text-[10px] font-semibold">{item.date}</div>
                                <div className="xl:text-xs text-[10px] text-white-600/25">{item.time}</div>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}