import Image from "next/image";
import {logo,walpaperThumbnail,icon} from "@/app/items/generalImages";

export default function Process(){
    return (
        <div className="min-h-screen bg-white">
            <div className="flex flex-col gap-3 mx-6 pt-20 pb-10 text-black">
                <h1 className="text-2xl font-bold mb-5"> The Process</h1>

                {/* auto start from here */}
                <div className="bg-white border border-black p-3">
                    <h1 className="font-bold text-3xl">01</h1>
                    <h1 className="font-bold text-lg">Title</h1>
                    <p className="text-sm mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas perspiciatis odio commodi esse veli</p>
                </div>
                {/* until here */}
                <div className="bg-white w20 border border-black p-3">
                    <h1 className="font-bold text-3xl">02</h1>
                    <h1 className="font-bold text-lg">Title</h1>
                    <p className="text-sm mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas perspiciatis odio commodi esse velit quaerat maiores magni vitae</p>
                </div>
                <div className="bg-white w20 border border-black p-3">
                    <h1 className="font-bold text-3xl">03</h1>
                    <h1 className="font-bold text-lg">Title</h1>
                    <p className="text-sm mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas perspiciatis odio commodi esse velit quaerat maiores magni vitae</p>
                </div>
                
                {/* section for word and image  */}
                <div className="border border-black mt-28">
                    <div className="relative w-full h-[500px]">   
                        <Image
                            className="object-cover p-3"
                            src={walpaperThumbnail.firstWalpaper}
                            alt="Next.js logo"
                            fill={true}
                        />
                    </div>

                    <p className="text-center  border border-black/70 py-3">We create With Passion </p>
                    <div className="text-center py-16">
                        <p className="text-3xl font-bold">Exceptional</p>
                        <p className="text-3xl font-bold">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="mt-5 px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit, praesentium repellat tenetur illum reiciendis, quas rerum mollitia cupiditate sequi aperiam maxime maiores officia numquam et enim? Ipsum, laudantium necessitatibus?</p>
                    </div>
                    <p className="border h-0 border-black/70"></p>
                    <div className="relative w-full h-[500px]">
                        <Image
                            className="object-cover p-3"
                            src={walpaperThumbnail.firstWalpaper}
                            alt="Next.js logo"
                            fill={true}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}