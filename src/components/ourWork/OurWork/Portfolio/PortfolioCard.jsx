/* eslint-disable react/prop-types */
export default function PortfolioCard({
  projectImg,
  projectLink,
  projectTItle,
}) {
  return (
    <div className="lg:w-[80%] flex flex-col gap-6">
      <div>
        <a
          href={projectLink}
          rel="noopener noreferrer"
          target="_black"
          className="text-xl hover:border-b"
        >
          {projectTItle}
        </a>
      </div>
      <img
        src={projectImg}
        alt="projectphoto"
        className="rounded-3xl  hover:shadow-lg hover:shadow-blue-500"
      />
<div className=" relative">

      <a href={projectLink} rel="noopener noreferrer" target="_black" className="absolute right-2">
        <button className="border-2   hover:text-blue-300  uppercase rounded-3xl px-4 py-1 text-white hover:shadow-md hover:shadow-blue-500  ">visit </button>
      </a>
</div>
    </div>
  );
}
