// import Border1 from "./Border1"
// import Border2 from "./Border2"
import mainIm from "../pages/images/secImages/mainImg.png"

const Secondpg = () => {
  return (
        <div className='h-[545px] flex justify-between border-b  border-[#05668D] font-montserrat  ' id="secondpg">
            <img src={mainIm} alt="" className="w-[570px] h-[520px] px-12 py-12 ml-6"/>
            <div className="flex flex-col border-2 border-[rgb(1,189,149)] w-[45%] h-full p-16">
                <div className="flex flex-col py-2">
                    <p className="text-xl font-bold font-montserrat text-[#05668D] pb-2">Startups Fund</p>
                    <p className="text-8xl text-[#05668D] font-extrabold">21</p>
                </div>
                <div className="flex flex-col py-2">
                    <p className="text-xl font-bold font-montserrat text-[#05668D] py-2">Investors Onboarded</p>
                    <p className="text-8xl text-[#05668D] font-extrabold">200+</p>
                </div>
                <div className="flex flex-col ">
                    <p className="text-xl font-bold font-montserrat text-[#05668D] py-2">Crore Mobilised</p>
                    <p className="text-8xl text-[#05668D] font-extrabold">700+</p>
                </div>
        </div>


        </div>



    
  )
}

export default Secondpg