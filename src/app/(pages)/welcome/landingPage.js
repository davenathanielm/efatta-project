import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import HomeContent from "@/app/contents/(home)/homeContent";
export default function HomeWelcome() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <HomeContent/>
      <Footer/>
    </div>
  );
}
