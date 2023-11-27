import TechCard from "./techCard";

export default function TechStack() {
  return (
<section className="text-white p-4 flex flex-col gap-8">
    <div className="max-lg:text-4xl lg:text-5xl ">
        Our <span className="text-blue-500 ">Tech Stack</span> 
    </div>
    <div className="grid grid-cols-4 gap-6 max-md:gap-x-0 max-lg:grid-cols-2">
        <TechCard techLogo={"logos:figma"} techName={'Figma'} size={40}/>
        <TechCard techLogo={"logos:react"} techName={'React'} size={55}/>
        <TechCard techLogo={"grommet-icons:node"} techName={'Node'} size={55} />
        <TechCard techLogo={"logos:mongodb-icon"} techName={'Mongo'} size={38}/>
        <TechCard techLogo={"devicon:express"} techName={'Express'} size={40} color={"blue"} />
        <TechCard techLogo={"devicon:tailwindcss"} techName={'Tailwind'} size={50}/>
       
       
        
    </div>
</section>
    )
}
