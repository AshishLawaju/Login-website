import { Icon } from "@iconify/react";
export default function Footer() {
  return (


    <div className="w-[100vw]  max-md:hidden absolute bottom-4 text-slate-400 flex justify-between  items-center ">
      <div className="ml-16 text-base "> &copy; Copyright Login Corporation</div>
      <div className="flex mr-24 gap-4">
        <Icon icon="ri:facebook-fill" width={33} />
        <Icon icon="mdi:twitter" width={33}/>
        <Icon icon="ri:linkedin-fill" width={33}/>
        <Icon icon="bi:instagram" width={33}/>
      </div>
    </div>
   
  );
}
