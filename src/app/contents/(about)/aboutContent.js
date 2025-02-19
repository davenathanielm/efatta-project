import Thumbnail from "../(thumbnail)/thumbnail";
import Projects from "../(project)/projectContent";
import Services from "../(services)/servicesContent";
import Image from "next/image";
import {logo,walpaperThumbnail} from "@/app/items/generalImages";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-blue-950 pb-10">
        <div className="flex flex-col gap-10 mx-3 text-center">
            <p className="text-white bg-slate-500 mt-28">Meet Efatta</p>
            <p className="text-white bg-slate-500 ">Transformative etc here</p>
            <p className="text-white bg-slate-500 ">Transformative etc here</p> 
        </div>

        {/* use map to create auto */}
        <div className="flex flex-col gap-2 mx-3 text-center">
            <h1 className="text-white bg-slate-500 mt-20">Title</h1>
            <h3 className="text-white bg-slate-500">short description</h3>
            <Image
                className="object-cover rounded-lg mt-10"
                src={walpaperThumbnail.firstWalpaper}
                alt="Next.js logo"
            />
            <h1 className="text-white bg-slate-500 mt-20">Title</h1>
            <h3 className="text-white bg-slate-500">short description</h3>
            <Image
                className="object-cover rounded-lg mt-10"
                src={walpaperThumbnail.firstWalpaper}
                alt="Next.js logo"
            />
        </div>
    </div>
  );
}
