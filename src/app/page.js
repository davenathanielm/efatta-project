import Image from "next/image";
import HomeWelcome from "./(pages)/welcome/landingPage";
import Providers from "./provider";

export default function HomeMain() {
  return (
    <Providers>
      <HomeWelcome/>
    </Providers>
  );
}
