

export default function(){
    return(
        <section className="bg-primary-black p-[5%]">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-20">
            <div className="text-white font-bold md:text-4xl">Features</div>
            <div className="text-white text-center mx-auto md:text-xl font-medium max-w-[600px]">Our features will help you explore your world. Find your friends and space with just one click</div>
            <div className='grid sm:grid-cols-2 gap-10'>
                <div className='w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey'>
                    <img className='w-20 bg-white mx-8' src="" alt="/" />
                    <h2 className='text-2xl font-bold mx-8 text-white'>Search</h2>
                    <div className='font-medium mx-8 mt-4 text-grey'>You can search for the topic or theme you want by typing the keywords you want to search for</div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey'>
                    <img className='w-20 bg-white mx-8' src="" alt="/" />
                    <h2 className='text-2xl font-bold mx-8 text-white'>Create a Thread</h2>
                    <div className='font-medium mx-8 mt-4 text-grey'>You can search for the topic or theme you want by typing the keywords you want to search for</div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 py-10 rounded-lg hover:scale-105 duration-300 bg-primary-grey'>
                    <img className='w-20 bg-white mx-8' src="" alt="/" />
                    <h2 className='text-2xl font-bold mx-8 text-white'>Create a Thread</h2>
                    <div className='font-medium mx-8 mt-4 text-grey'>You can search for the topic or theme you want by typing the keywords you want to search for</div>
                </div>
            </div>
            </div>
        </section>
    )
}