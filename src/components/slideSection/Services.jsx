import React from "react";
const information = [
  {
    title: "LEGAL SERVICE",
    subTitle: [
      "Company Registration",
      "  PAN/VAT Registration",
      "Trademark Registration",
    ],
  },

  {
    title: "MULTIMEDIA SERVICE",
    subTitle: [
      "Logo & Graphic Design",
      "Branding & Printing",
      "  Photography & Videography",
      "Animation",
    ],
  },
  {
    title: " FINANCE SERVICE",
    subTitle: ["Accounting", "Auditing", "Taxation", "Advisory", "Investment"],
  },
];

const Services = () => {
  
  function ass(){
    console.log("This is service");

  }
  ass()
  return (
    <div className=" w-full h-[100vh]  mr-4 ">
      <h2 className="mt-[10%] text-white ]">
        <p className="text-xl text-start ml-56">
          We feel privileged to offer creative & innovative services to you.
        </p>
      </h2>

      <div className="grid grid-cols-2 mt-16 ">
        {information.map((info) => {
          return (
            <div key={info}>
              <h3 className="text-2xl text-white text-left ml-[26%] ">
                <span className="text-xl ">&gt;</span>
                {info.title}
              </h3>
              <div className=" ml-[26%] p-3">
                <ul className="list-disc ml-6 p-0">
                  {info.subTitle.map((sub) => {
                    return (
                      <li
                        key={info.title}
                        className="m-0 p-0 text-left text-slate-300"
                      >
                        {sub}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
