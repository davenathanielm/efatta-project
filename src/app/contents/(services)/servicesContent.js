import Image from "next/image";
import {logo,walpaperThumbnail,icon} from "@/app/items/generalImages";

export default function Services(){
    return(
        <div className="min-h-screen bg-white text-black">
            <div className="flex flex-col gap-3 mx-6 pt-20 pb-10">
                <Image
                    className="object-cover mt-10"
                    src={icon.worker}
                    alt="Next.js logo"
                    width={"80"}
                />
                <h1 className="text-lg font-bold mt-5">Services name</h1>
                <p className="text-sm w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore id deserunt nobis soluta accusantium optio porro voluptate, </p>
                
                {/* use auto generate */}
                <Image
                    className="object-cover mt-10"
                    src={icon.worker}
                    alt="Next.js logo"
                    width={"80"}
                />
                <h1 className="text-lg font-bold mt-5">Services name</h1>
                <p className="text-sm w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tempore id deserunt nobis soluta accusantium optio porro voluptate, </p>
            </div>
        </div>
    );
    
}