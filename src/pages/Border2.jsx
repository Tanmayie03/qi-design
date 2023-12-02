import Line from "../pages/images/Line.svg"

const Border2 = () => {
  return (
      <div className=' flex-col border relative border-[#05668D] scroll-smooth flex justify-center w-16 py-2 pl-4 h-[545px] '>
        <img src={Line} className="h-[530px] w-[18px]  absolute" ></img>
        <div className="z-50 flex flex-col mb-8">
          <a href="#firstpg" className="text-5xl font-extralight text-[#05668D]  h-[1px]" id="pgone">-</a>
          <a href="#secondpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgtwo">-</a>
          <a href="#thirdpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
          <a href="#fourthpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
          <a href="#fifthpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
          <a href="#sixthpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
          <a href="#seventhpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
          <a href="#eighthpg" className="text-5xl font-extralight text-[#05668D] mt-14 h-[1px]" id="pgthree">-</a>
        </div>
     
      </div>
  );
}

export default Border2;
