import About from "./About/About";
import HeroCard from "./HeroCard";
import Introduction from "./Introduction/Introduction";
import Portfolio from "./Portfolio/Portfolio";
import TechStack from "./techStack/TechStack";
import Contact from "./Contact/Contact";

export default function OurWork() {
  return (
    <div>
      <HeroCard />
      <div className=" lg:w-[64%] lg:absolute right-16">
        <Introduction />
        <About />
        {/* <TechStack /> */}
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
