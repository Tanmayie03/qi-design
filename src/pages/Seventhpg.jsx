import ayan from "../pages/images/seven/Ayan.png";
import ameet from "../pages/images/seven/ameet.png";
import amarjeet from "../pages/images/seven/Amarjit.png";
import arun from "../pages/images/seven/Arun.png";
import jaynath from "../pages/images/seven/jaynath.png";
import arrow from "../pages/images/arrow.png";
import linkedin from "../pages/images/seven/linkedin.png";

const Seventhpg = () => {
  return (
    <div className="flex justify-between font-montserrat" id="seventhpg">
      <div className="h-[546px] border-b border-[#05668D] w-full ">
        <p className="text-xl p-8 font-bold text-[#05668D] font-montserrat">
          Meet the Team
        </p>
        <p className="text-sm pr-[130px] text-justify tracking-[0px] pl-8 ">
          QI Ventures being founded by entrepreneurs has taken a step forward to
          appreciate and support the work of fellow founders, which is the best
          part. We are happy to have them as our investor and we share a very
          mutual respect for each other.{" "}
        </p>

        <div className="flex justify-center w-full pt-24 text-center">
          <div className=" relative flex flex-col items-center  border p-9 border-[#02C39A]">
            <img src={ayan} className="w-40 py-6 -mt-24 " />
            <p className="text-xs font-bold font-montserrat">Ayan Chatterjee</p>
            <p className="text-xs font-montserrat">CEO & Managing Partner</p>
            <img
              src={linkedin}
              className="border w-6 p-1 absolute -bottom-3 bg-[#FEFFED] border-[#02C39A]"
            />
          </div>
          <div className=" relative flex flex-col items-center  border p-9 border-[#02C39A]">
            <img src={ameet} className="w-40 py-6 -mt-24 " />
            <p className="text-xs font-bold font-montserrat">Ameet Doshi</p>
            <p className="text-xs font-montserrat">Managing Partner</p>
            <img
              src={linkedin}
              className="border w-6 p-1 absolute -bottom-3 bg-[#FEFFED] border-[#02C39A]"
            />
          </div>
          <div className=" relative flex flex-col items-center  border p-9 border-[#02C39A]">
            <img src={amarjeet} className="w-40 py-6 -mt-24 " />
            <p className="text-xs font-bold font-montserrat">Amarjit Kumar</p>
            <p className="text-xs font-montserrat">Director & Partner</p>
            <img
              src={linkedin}
              className="border w-6 p-1 absolute -bottom-3 bg-[#FEFFED] border-[#02C39A]"
            />
          </div>
          <div className=" relative flex flex-col items-center  border p-9 border-[#02C39A]">
            <img src={arun} className="w-40 py-6 -mt-24 " />
            <p className="text-xs font-bold font-montserrat">Arun Kumar G</p>
            <p className="text-xs font-montserrat">Director & Partner</p>
            <img
              src={linkedin}
              className="border w-6 p-1 absolute -bottom-3 bg-[#FEFFED] border-[#02C39A]"
            />
          </div>
          <div className=" relative flex flex-col items-center  border p-[38px] border-[#02C39A]">
            <img src={jaynath} className="w-40 py-6 -mt-24 " />
            <p className="text-xs font-bold font-montserrat">
              Jayanth Balasubramanya
            </p>
            <p className="text-xs font-montserrat">Director & Partner</p>
            <img
              src={linkedin}
              className="border w-6 p-1 absolute -bottom-3 bg-[#FEFFED] border-[#02C39A]"
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button className="border border-[#00A896]  p-2  px-6 text-center text-[#00A896]  font-bold tracking-[6px] text-sm flex items-center">
            MEET ENTIRE TEAM
          </button>
          <div className="border border-[#00A896] p-2">
            <img src={arrow} alt="" className="w-2 m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seventhpg;
