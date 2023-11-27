import PortfolioCard from "./PortfolioCard";
import Project1 from "./img/project1.png";
import Project2 from "./img/dreampte.png";
import Project3 from "./img/pho99.png"
export default function Portfolio() {
  return (
    <section id="portfolio" className="text-white p-4 flex flex-col gap-12">
      <div className="text-5xl">
        Featured <span className="text-blue-500">Projects</span>
      </div>

      <div className="flex flex-col gap-16">
        <PortfolioCard
          projectImg={Project1}
          projectLink={"https://logindesigns.com/"}
          projectTItle={"Login Designs - Login Experience"}
        />
        <PortfolioCard
          projectImg={Project2}
          projectLink={"https://dreampte.com/"}
          projectTItle={"PTE Online Learning - Platform"}
        />
        <PortfolioCard
          projectImg={Project3}
          projectLink={"https://pho99nepal.com/"}
          projectTItle={"Savor Vietnam's - Restro"}
        />
      

      </div>
    </section>
  );
}
