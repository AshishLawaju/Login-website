/* eslint-disable react/prop-types */

const Card = ({ name, review, profile }) => {
  return (
    <div className="w-18 h-[18.75rem]  text-white     flex flex-col  items-center z-50  bg-black/70 rounded-xl  ">
      <div className="w-[30%] h-[30%]  max-xl:w-20 max-xl:h-20 ">
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
      <h2 className="text-2xl mt-8 max-lg:text-xl">{name}</h2>
      <p className="text-xs p-4 text-slate-400 max-md:z">{review}</p>

      <div>⭐⭐⭐⭐⭐</div>
    </div>
  );
};

export default Card;
