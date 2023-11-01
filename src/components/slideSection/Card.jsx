import React from "react";

const Card = ({name,review,profile}) => {


  return (
    <div className="w-[290px] h-[280px] text-white     flex flex-col  items-center z-50  ">
      <div className="w-[100px] h-[100px]  ">
        <img
          src={profile}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full mt-4 "
        />
      </div>
      {/* <h2 className="text-2xl mt-8">Suraj Jung Thapa</h2>
      <p className="text-xs p-4 text-slate-400">
        "You gurs made it so simple. My new site is just visual pleasing. Just
        Yesterday some of my customers messaged sayinng how much I liked the new
        site. Thanks guys!"
      </p> */}
      <h2 className="text-2xl mt-8">{name}</h2>
      <p className="text-xs p-4 text-slate-400">
     {review}
      </p>
    </div>
  );
};

export default Card;
