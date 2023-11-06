export default function Team2() {
  const persons = [
    {
      foto: "https://logindesigns.com/admin/files/15905761550.webp",
      nam: "Rojan Mul",
      role: "Managing Director",
    },
    {
      foto: "https://logindesigns.com/admin/files/15957001450.webp",
      nam: "Prince G. sunuwar",
      role: "CEO",
    },
    {
      foto: "https://logindesigns.com/admin/files/15905777820.webp",
      nam: "Krishna Mul",
      role: "Account Manager",
    },
    {
      foto: "https://logindesigns.com/admin/files/15960415300.webp",
      nam: "Shyam Mul",
      role: "IT Manager",
    },
    {
      foto: "https://logindesigns.com/admin/files/15960022260.webp",
      nam: "Aryan G. Himali",
      role: "Marketing Manager",
    },
    {
      foto: "https://logindesigns.com/admin/files/16262604620.webp",
      nam: "Alaka Acharya",
      role: "Multimedia Manager",
    },
  ];
  return (
    <div className="">
      <div className="text-white  ">
        <div className="flex justify-center items-center">

        <h2 className="text-4xl absolute top-9   max-md:top-36 text-center max-sm:top-6  max-sm:mt-14 max-sm:hidden">Leadership</h2>
        </div>

        <div className="grid grid-cols-3 gap-16 gap-x-36 max-md:gap-x-20  mt-24 max-sm:grid-cols-1 max-sm:mt-16 max-sm:gap-1 text-clip">
          {persons.map((person) => {
            return (
              <>
                <div className=" flex flex-col justify-center items-center">
                  <div className="w-48 h-44 max-md:w-16 max-md:h-16 flex justify-center items-center" >
                    <img
                      src={person.foto}
                      alt="rojan"
                      className="border-2 rounded-full border-white object-top"
                    />
                  </div>
                  <h4>{person.nam}</h4>
                  <p className="text-slate-300 text-sm">{person.role}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
