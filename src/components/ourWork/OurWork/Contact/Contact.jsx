import { Icon } from "@iconify/react";
export default function Contact() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [yourBudget, setYourBudget] = useState("");
  //   const [message, setMessage] = useState("");
  return (
    <section id="workContact" className="text-white p-4 mt-8 flex flex-col gap-8 mb-24">
      <div className="text-4xl lg:text-6xl">
        Let's Work <span className="text-blue-500">Together!</span>
      </div>
      <div className="text-2xl">logincorpnepal@gmail.com</div>
      <form action="" className="flex flex-col gap-8">
        <div className="flex max-lg:flex-col gap-8 lg:gap-44">
          <div className="flex flex-col">
            <label htmlFor="" className="">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-transparent outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">EMAIL</label>
            <input
              type="text"
              placeholder="Your email address"
              className="bg-transparent outline-none"
              required
            />
          </div>
        </div>
        <div className="max-lg:disabled:opacity-20 flex max-lg:flex-col gap-8  lg:gap-44">
          <div className="flex flex-col">
            <label htmlFor="">
              PHONE <span className="text-slate-500">(optional)</span>
            </label>
            <input
              type="number"
              placeholder="Your number phone"
              className="bg-transparent outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">SUBJECT</label>
            <select
              placeholder="Select a subject"
              className="bg-transparent outline-none"
              required
            >
              <option className="bg-black">Select a subject</option>
              <option className="bg-black">option 1</option>
              <option className="bg-black">option 2</option>
              <option className="bg-black">option 3</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">
            YOUR BUDGET <span> (optional)</span>
          </label>
          <input
            type="number"
            className="bg-transparent outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">MESSAGE</label>
          <textarea
            placeholder="Write your message here ... "
            className="bg-transparent outline-none border-b h-24"
            required
          ></textarea>
        </div>

        <label>
          <input type="file" placeholder="ADD FIle" className="hidden " />
         <div className="flex gap-2 items-center">

          <Icon icon="uiw:file-add" className="" />

          <div>ADD AN ATTACHMENT</div>
         </div>
        </label>

        <button className="upper text-black max-w-xs bg-blue-400 rounded-3xl px-5 py-2">
          Send Message
        </button>
      </form>
    </section>
  );
}
