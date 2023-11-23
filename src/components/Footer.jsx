import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <div className="w-[100vw]  max-md:hidden absolute bottom-4 text-slate-400 flex justify-between  items-center z-50  ">
      <div className="ml-16 text-base "> &copy; Copyright WebX</div>
      <div className="flex mr-12 gap-4 ">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/thecreativewebx"
        >
          {" "}
          <Icon
            icon="ri:facebook-fill"
            width={25}
            className="hover:cursor-pointer"
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/webxnep/"
        >
          {" "}
          <Icon
            icon="ri:linkedin-fill"
            width={25}
            className="hover:cursor-pointer"
          />
        </a>
        <a rel="noopener noreferrer" target="_blank" href="">
          {" "}
          <Icon icon="bi:instagram" width={25} hover:cursor-pointer />{" "}
        </a>
      </div>
    </div>
  );
}
