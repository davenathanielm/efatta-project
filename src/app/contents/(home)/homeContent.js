import Thumbnail from "../(thumbnail)/thumbnail";
import Projects from "../(project)/projectContent";
import Services from "../(services)/servicesContent";
import About from "../(about)/aboutContent";
import Process from "../(process)/processContent";
import ReasonContent from "../(reason)/reasonContent";
import Trial from "../(trial)/trialContent";

export default function HomeContent() {
  return (
    <div>
      <Thumbnail/>
      <About/>
      <Services/>
      <Process/>
      <ReasonContent/>
      <Trial/>
      {/* <Projects/> */}
    </div>
  );
}
