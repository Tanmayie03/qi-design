import founder from "../pages/images/fifth/founder.png"
import arrow from '../pages/images/arrow.png'


const Sixth = () => {
  return (
    <div className="flex justify-between font-montserrat" id="sixthpg">
    
    <div className="h-[546px] border-b border-[#05668D] w-full ">
        <div className="flex justify-between">
        <div className="flex flex-col p-8">
        <p className="text-xl pb-8 font-bold text-[#05668D] font-montserrat">Founders</p>
        <p className="text-sm pr-[130px] text-justify tracking-[0px] ">QI Ventures being founded by entrepreneurs has taken a step forward to appreciate and support the work of fellow founders, which is the best part. We are happy to have them as our investor and we share a very mutual respect for each other.	</p>
        <p className="py-4 font-bold">Problems faced by founders</p>
            <p className="text-sm">High Turn Around Time from VCs</p>
            <p className="py-1 text-sm">Uncertainty over Future Rounds</p>
            <p className="text-sm">Unfair Valuations</p>
            <p className="py-1 text-sm">Limited Business Opportunities</p>

        <p className="py-4 font-bold">Solutions for founders</p>
            <p className="text-sm">Mandate to Money in 30 Days</p>
            <p className="py-1 text-sm">Partner for Future Rounds</p>
            <p className="text-sm">Founder Friendly Valuations</p>
            <p className="py-1 text-sm">Strong Network Driven Opportunities</p>
        <div className='flex pt-2'>
            <button className='border border-[#00A896]  p-2  px-6 text-center text-[#00A896]  font-bold tracking-[4px]  flex items-center'>JOIN AS A FOUNDER</button>
            <div className='border border-[#00A896] p-2'><img src={arrow} alt='' className='w-2 m-2' /></div>
        </div>

    </div>
    <img src={founder} className="h-[546px]"/>

    </div>
    </div>

    



    </div>
  )
}

export default Sixth