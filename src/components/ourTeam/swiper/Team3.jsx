
export default function Team3() {

    const persons = [
        {
            foto:"https://logindesigns.com/admin/files/16070739020.webp",
            nam:"Samaya Khatri",
            role:"Web Developer"
        },
        {
            foto:"https://logindesigns.com/admin/files/15939711000.webp",
            nam:"Deepak G. Shrestha",
            role:"Creative Designer"
        },
        {
            foto:"https://logindesigns.com/admin/files/15939711000.webp",
            nam:"Shrijan Putwar",
            role:"Digital Marketing Expert"
            
        },
        {
            foto:"https://logindesigns.com/admin/files/16071543800.webp",
            nam:"Deepak Rai",
            role:"Android Developer"
        },
        {
            foto:"https://logindesigns.com/admin/files/15960022790.webp",
            nam:"Pradeep Thapa Magar",
            role:"Graphic Designer"
        },
        {
            foto:"https://logindesigns.com/admin/files/16071635900.webp",
            nam:"Susma Thulung Rai",
            role:"Content Creator"
        },
    ]
    return (
        <div className="">
          <div className="text-white  ">
            <div className="flex justify-center items-center">
    
            <h2 className="text-4xl absolute top-9   max-md:top-36 text-center max-sm:top-6  max-sm:mt-14 max-sm:hidden">Team</h2>
            </div>
    
            <div className="grid grid-cols-3 gap-16 gap-x-36 max-md:gap-x-20  mt-24 max-sm:grid-cols-2 max-sm:mt-16 max-sm:gap-8 p-2">
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
