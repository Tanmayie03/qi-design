import mask from "../pages/images/fifth/mask.png"
import arrow from '../pages/images/arrow.png'


export const Fifthpg = () => {
  return (
    <div className="flex justify-between font-montserrat" id="fifthpg">
   
    <div className="h-[546px] border-b border-[#05668D] w-full ">
        <div className="flex justify-between">
        <div className="flex flex-col p-8">
        <p className="text-xl pb-8 font-bold text-[#05668D] font-montserrat">Investors</p>
        <p className="text-sm pr-[130px] text-justify tracking-[0px] ">QI Ventures being founded by entrepreneurs has taken a step forward to appreciate and support the work of fellow founders, which is the best part. We are happy to have them as our investor and we share a very mutual respect for each other.	</p>
        <p className="py-4 font-bold">Problems faced by investors</p>
            <p className="text-sm">Large Ticket Size</p>
            <p className="py-1 text-sm">High Membership Fee</p>
            <p className="text-sm">Limited Liquidity</p>
            <p className="py-1 text-sm">Not Accessible to Everyone</p>
        <p className="py-4 font-bold">Solutions for investors</p>
            <p className="text-sm ">Large Ticket Size</p>
            <p className="py-1 text-sm">High Membership Fee</p>
            <p className="text-sm">Limited Liquidity</p>
            <p className="py-1 text-sm">Not Accessible to Everyone</p>
        <div className='flex pt-2'>
            <button className='border border-[#00A896]  p-2  px-6 text-center text-[#00A896]  font-bold tracking-[4px]  flex items-center'>JOIN AS A INVESTOR</button>
            <div className='border border-[#00A896] p-2'><img src={arrow} alt='' className='w-2 m-2' /></div>
        </div>

    </div>
    <img src={mask} className="h-[546px]"/>

    </div>
    </div>
    
    


    </div>
  )
}
