
export default function Team4() {
    const persons= [
        {
            foto:"https://logindesigns.com/admin/files/15742322230.webp",
            nam:"Sudip Simkhada",
            role:"Android Developer"
        },
        {
            foto:"https://logindesigns.com/admin/files/16071639850.webp",
            nam:"Sachin Magrati",
            role:"Business Analyst"
        },
        {
            foto:"https://logindesigns.com/admin/files/15742323390.webp",
            nam:"Susant Adhikari",
            role:"IOS Developer"
        },
        {
            foto:"https://logindesigns.com/admin/files/15952446640.webp",
            nam:"Alish Magar",
            role:"Web Developer"
        },
        {
            foto:"https://logindesigns.com/admin/files/15742320970.webp",
            nam:"Sabin Gurung",
            role:"SEO Expert"
        },
        {
            foto:"https://logindesigns.com/admin/files/15742319710.webp",
            nam:"Amrit Ghale",
            role:"Motion Graphic Designer"
        },
       
    ]
    return (
        <div className="">
          <div className="text-white  ">
          
    
            <div className="grid grid-cols-3 gap-16 gap-x-36 max-md:gap-x-20  mt-24 max-sm:grid-cols-2 max-sm:mt-16 max-sm:gap-8 p-1">
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
