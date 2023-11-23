/* eslint-disable react/prop-types */
export default function ServiceCard({ logo, title, info }) {
  return (
    <>
      <div className="max-lg:hidden bg-black/70 text-white rounded-lg   border border-black hover:border-blue-800 hover:border-2 hover:rounded-sm flex flex-col max-md:flex-row   ">
        <div className="grid place-content-center p-1   h-[52%]">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="flex flex-col gap-4 px-6 pb-4 max-lg:p-4 ">
          <div className="text-xl text-center font-semibold leading-4">
            <div className="flex items-center justify-center">
              <span>
                {title}
                <hr width="85%" className="m-auto mt-2 "/>
              </span>
            </div>
          </div>
          <div className="text-justify text-[11px]">{info}</div>
        </div>
      </div>
      {/* second part */}
      <div className="max-sm:hidden lg:hidden bg-black/70 text-white rounded-lg   border border-black hover:border-blue-700 hover:border-2 hover:rounded-sm flex flex-col max-md:flex-row   ">
        <div className=" flex flex-col justify-start items-center p-1">
          <div className="">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="text-sm  text-center p-2 font-semibold leading-5 max-md:text-sm">
            {title}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 pb-4 max-lg:p-4 ">
          <div className="text-justify text-[11px] max-md:text-[0.6rem]">
            {info}
          </div>
        </div>
      </div>

      {/* third part */}

      <div className=" sm:hidden bg-black/70 text-white rounded-lg   border border-black hover:border-blue-700 hover:border-2 hover:rounded-sm flex flex-col max-md:flex-row   ">
        <div className=" flex flex-col justify-start items-center p-1">
          {/* <div className="border-2">
            <img src={logo} alt="logo"></img>
          </div> */}
          <div className="text-xl  text-center p-2 font-semibold leading-5 max-md:text-sm">
            {title}
          </div>
          <div className="flex flex-col gap-4 px-6 pb-4 max-lg:p-4 ">
            <div className="text-justify text-[11px] max-md:text-[0.6rem]">
              {info}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
