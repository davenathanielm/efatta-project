import {logo,walpaperThumbnail} from "@/app/items/generalImages";
import Image from "next/image";

export default function Thumbnail() {
    return(
        <div className="bg-gray-100 h-screen relative">
                <Image
                    className="object-cover absolute"
                    src={walpaperThumbnail.firstWalpaper}
                    alt="Next.js logo"
                    fill
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start text-white">
                    <div className="px-4 ml-2 mt-52">
                        <h2 className="text-6xl font-bold">3D Artist</h2>
                        {/* <h1 className=" bg-black rounded-3xl p-6 w-72 h-40 overflow-y-scroll text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore nesciunt vero quas fugiat harum adipisci, impedit voluptatum necessitatibus dicta pariatur reprehenderit enim nobis debitis non cum deserunt, quia numquam!</h1> */}
                        <h1 className="w-72  text-lg ">Lorem ipsum dolor sit amet consectetur </h1>
                    </div>  
                </div>
        </div>  
    );

}