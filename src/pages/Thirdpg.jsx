import vamsi from "../pages/images/Third/Vamsi.png"
import left from "../pages/images/Third/leftArrow.svg"
import right from "../pages/images/Third/rightArrow.svg"
import imgbg from "../pages/images/Third/imgbg.png"

const Thirdpg = () => {
  return (
    <div className="flex justify-between w-full border-y  h-full border-b border-[#05668D] " id="thirdpg">
        
        <div className="relative flex justify-between w-full h-full">
            <div className="py-6 pl-12 ">
            <p className="text-xl py-2 font-bold text-[#05668D] font-montserrat">Words from,</p>
                <p className="font-extrabold text-[96px] font-montserrat  tracking-wider text-[#02C39A] -ml-2">FOUNDER</p>
                <p className="font-extrabold text-[96px] font-montserrat  tracking-wider text-[#05668D] -ml-2">INVESTORS</p>
                <p className="font-extrabold text-[96px] font-montserrat  tracking-wider text-[#05668D] -ml-2">STAKEHOLDER</p>
                <div className="flex ml-96 p-1 border border-[#01BD95] w-fit ">
                    <img src={left} alt="" className="mt-1" />
                    <p className="text-[#01BD95] font-montserrat py-1 px-2 ">1/3</p>
                    <img src={right} alt="" />
                </div>
            </div>
        <div className="flex absolute right-0  bg-[#FEFFED] flex-col border-l border-[#01BD95] h-full w-[54%] p-10 ">
            <img src={imgbg} alt="" className="absolute  top-[16%] w-[94%] " />
            <div className="relative w-40 ">
                <img src={vamsi} alt="" className="z-30 w-40 "/>
            </div>
            <div className="py-12 ">

            <p className="font-bold font-montserrat">Vamsi Udayagiri </p>
            <p className="font-bold font-montserrat">Founder </p>
            <p className="pb-[1px] font-bold font-montserrat">Hesa </p>
            <p className="text-sm py-4 pr-2 w-[80%] font-montserrat">QI Ventures being founded by entrepreneurs has taken a step forward to appreciate and support the work of fellow founders, which is the best part. We are happy to have them as our investor and we share a very mutual respect for each other.					 </p>

        </div>
        </div>

        </div>





        




    </div>
  )
}

export default Thirdpg