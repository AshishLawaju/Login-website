import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Customer = () => {
  const [contactPage, setContactPage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [messages, setMessages] = useState("");
  const [capVal, setCapVal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {!contactPage && (
        <div className=" h-[100vh] w-full flex items-center ">
          <div className="text-left text-white   max-md:mt-24 max-md:pl-9 md:mt-24 w-full h-[70%] lg:ml-36 ">
            <h3 className="text-xl">Customer service</h3>
            <h2 className="text-4xl mt-4 ">CUSTOMER</h2>
            <p className="mr-12 text-stone-300 mt-4 max-sm:mt-2">
              Feel free to reach out to us with any questions. <br /> We are
              very friendly and always open to <br /> discussing new projects,
              interesting ideas.
            </p>

            <div className="flex gap-40 mt-4 max-sm:flex-col max-sm:gap-3">
              <div>
                <h2 className="text-bold text-2xl mb-4 max-sm:mb-0">Contact</h2>
                <p className="text-slate-300">Call: 9749761111</p>
                <p className="text-slate-300 sm:hidden">
                  Email: logincorpnepal@gmail.com
                </p>
              </div>
              <div>
                <h2 className="text-bold text-2xl mb-4 max-sm:mb-0">Address</h2>
                <p className="text-slate-300">
                  <span></span>
                  Samakhusi, Kathmandu
                </p>
              </div>
            </div>
            <p className="text-slate-300 mt-4 max-sm:hidden">
              Email: logincorpnepal@gmail.com
            </p>

            <button
              onClick={() => setContactPage(!contactPage)}
              className="border-2 mb-2  rounded-full p-1.5 pl-4 pr-4 mt-4"
            >
              Send messages
            </button>
          </div>
        </div>
      )}
      {contactPage && (
        <div className="w-full h-[100vh]  text-white flex items-center justify-around text-base">
          <div className="h-[55vh] ">
            <div className="flex flex-col   gap-16 ">
              <div className="text-start flex flex-col gap-4 max-sm:hidden ">
                <div className="text-2xl max-md:text-sm ">
                  Customer Service{" "}
                </div>
                <div className="uppercase text-4xl max-md:text-sm">
                  Email us
                </div>
              </div>

              <div>
                <button
                  onClick={() => setContactPage(false)}
                  className="border-2 px-5 py-2 rounded-3xl flex items-start max-md:text-xs max-md:p-1"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
          <div>
            <form className="flex flex-col text-start gap-2">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent pb-1 pt-2 px-3 border border-x-0 border-t-0 focus:outline-none"
              ></input>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent pb-1 pt-2 px-3 border border-x-0 border-t-0 focus:outline-none"
              />

              <label htmlFor="">Phone No.</label>
              <input
                type="number"
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                className="bg-transparent pb-1 pt-2 px-3 border border-x-0 border-t-0 focus:outline-none"
              />
              <label>Message</label>
              <textarea
                type="text"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                className="bg-transparent border h-[12vh] outline-none rounded-md"
              ></textarea>
              <ReCAPTCHA
                sitekey="6LcoNRgpAAAAAHUQzMIRUxlRbuhhDc6V990-haRI"
                onChange={(val) => setCapVal(val)}
                className="bg-transparent"
              />
              <button
                disabled={!capVal}
                onClick={handleSubmit}
                className="px-5 py-2 rounded-full bg-[#FF1A75]  hover:bg-red-500 hover:cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Customer;
