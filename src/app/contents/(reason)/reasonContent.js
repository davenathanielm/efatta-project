
export default function ReasonContent() {
    return(
        <div className="min-h-screen bg-green-400">
            <div className="flex flex-col gap-2 mx-8 text-left">
                <h1 className="text-white mt-28 font-bold text-4xl">Why</h1>
                <h1 className="text-white text-4xl font-bold">Choose Us</h1>
                <div className="h-0 border border-black w-full"></div>
                <p className="text-lg text-black mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea cupiditate eaque unde libero omnis suscipit doloribus inventore! Reprehenderit similique sunt tempora, exercitationem veniam quaerat cumque ab consequatur molestiae eveniet perspiciatis.</p>
            </div>

            <div className="flex flex-col gap-5 mx-4 mt-20">
                {/* give auto in here */}
                <h1 className="text-black text-lg font-bold mx-4"> title 1 </h1>              
                <div className="h-0 border border-black/30 w-full"></div>              
                <h1 className="text-black text-lg font-bold mx-4"> title 2 </h1>              
                <div className="h-0 border border-black/30 w-full"></div>              
                <h1 className="text-black text-lg font-bold mx-4"> title 4 </h1>              
                <div className="h-0 border border-black/30 w-full"></div>              
            </div>
        </div>
    );
}