export default function Footer() {
    return(
        <div className=" text-center bg-footerColor">
            <div className="pt-28 mx-3">
                <h1 className="text-4xl font-bold">Lets create</h1>
                <h1 className="text-4xl">Something Together</h1>
                <h1 className="mt-3 text-white/60 mx-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aspernatur fugiat incidunt, doloremque quae veniam consequuntur iusto illo adipisci eum dolore dolores</h1>
                <button className="bg-customBackgroundButton px-7 rounded-3xl py-3 shadow-xl shadow-purple-500/40 hover:shadow-indigo-500/50 hover:bg-indigo-500 mt-28">
                    Button
                </button>
                <p className="text-gray-500 font-semibold text-sm mb-10 mt-20"> Ⓒ 2024 Dave Nathaniel</p>
            </div>
        </div>
    );
}


{/* <motion.button className='bg-customBackgroundButton px-7 rounded-3xl py-3 shadow-xl shadow-purple-500/40 hover:shadow-indigo-500/50 hover:bg-indigo-500 mb-36 font-altehaasBold'
                        variants={slideUp} 
                        transition={{duration : 0.7}}
                        > Get In Touch
                        </motion.button> */}