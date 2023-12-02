import increase from "../pages/images/fourth/increase.svg"

const Fourthpg = () => {
  return (
    <div className="flex justify-between font-montserrat" id="fourthpg">
        
        <div className="h-[546px] border-b border-[#05668D] w-full ">
            <div className="flex w-full px-8 py-6 ">
                <p className=" font-bold text-lg mt-2 text-[#05668D] text-end font-montserrat">Scientific Portfolio Approach.</p>
                <p className="px-4 mt-1 text-[#D6D3D1] font-bold underline decoration-gray-400">1cr to 1000cr</p>
            </div>

            
            <div className="flex font-montserrat">

            <div className="border-t border-[#05668D] w-[60%]">
                
                <div className="flex justify-between px-8 py-4 ">
                <p className="text-[#00A896] ">Step 0. <span className="font-bold">Net Worth.</span></p>
                <p className="text-lg font-bold leading-tight underline text-[#D6D3D1]">₹5,00,00,00,000 </p>
                </div>
            <div className="px-8 py-4 border-t border-[#05668D] flex justify-between">
                <div className="flex justify-between">

                <div className="flex flex-col ">
                <p className="text-[#00A896] pb-4">Step 1.  <span className="font-bold">Allocate Capital.</span></p>
                <p className="font-semibold font-montserrat mb-2 text-xs w-[76%]">How much are you willing to invest / Allocate. <span className="italic font-light">You might select, slide or type a custom sum</span></p>
                </div>
                <p className="text-xl font-bold leading-tight underline text-[#00A896]">₹5,00,00,000 </p>
                </div>
            </div>
            <hr className="border-t-2 border-[#00A896]  mx-10"></hr>
            <div className="flex justify-center py-12">
                <p className=" text-[#00A896] mx-4 bg-[#FCFFCF] font-bold border px-2 border-[#00A896]">5,00,000 +</p>
                <p className=" text-[#00A896] mx-4  border px-2 border-[#00A896]">25,00,000 +</p>
                <p className=" text-[#00A896] mx-4 border px-2 border-[#00A896]">75,00,000 +</p>
                <p className=" text-[#00A896] mx-4 border px-2 border-[#00A896]">100,00,000 +</p>
            </div>
            
            
            <div className="flex justify-between items-center border-t border-[#05668D] px-8 py-4">

                <div className="flex flex-col">
                <p className="text-[#00A896] pb-4 ">Step 2.  <span className="font-bold"> Risk Profile.</span></p>
                <p className="font-semibold font-montserrat text-xs w-[76%]">How much are you willing to invest / Allocate. <span className="italic font-light">You might select, slide or type a custom sum</span></p>
                
                <div className="grid w-full grid-cols-2 gap-1 px-12 mt-3">
                    <div className="flex ">
                        <img src={increase} alt="" className="w-[6px] " />
                        <p className="font-bold px-1 text-[#00A896] underline text-sm">50%</p>
                        <p className="px-2 py-1 text-xs font-montserrat">Medium</p>
                    </div>
                    <div className="flex ">
                        <img src={increase} alt="" className="w-[6px] " />
                        <p className="font-bold px-1 text-[#00A896] underline text-sm">20%</p>
                        <p className="px-2 py-1 text-xs font-montserrat">High</p>
                    </div>
                    <div className="flex ">
                        <img src={increase} alt="" className="w-[6px] " />
                        <p className="font-bold px-1 text-[#00A896] underline text-sm">20%</p>
                        <p className="px-2 py-1 text-xs font-montserrat">Med-High</p>
                    </div>
                    <div className="flex ">
                        <img src={increase} alt="" className="w-[6px] " />
                        <p className="font-bold px-1 text-[#00A896] underline text-sm">10%</p>
                        <p className="px-2 py-1 text-xs font-montserrat">Very High</p>
                    </div>

                </div>
                
                
                
                </div>
                <div className="flex flex-col text-center">
                <p className="text-[#D6D3D1] text-sm font-montserrat">Total limit capital</p>
                <p className="text-xl font-bold leading-tight underline text-[#00A896]">₹5,00,00,000 </p>
                <p className="text-[#D6D3D1] text-sm font-montserrat">Utilised in risk profiling</p>
                <p className="text-xl font-bold  text-[#00A896]">100% </p>

                </div>
                </div>
            </div>



    <div className="border border-[#05668D] w-[43.8%]">
        <table className="table-auto border-b border-[#05668D]">
            <thead>
                <tr>
                <th className="border-r text-xs font-bold border-[#05668D] py-5 px-[20px] text-[#00A896]">Fixed values for</th>
                <th className="border-r border-[#05668D] text-xs py-5 px-4 ">Medium</th>
                <th className="border-r border-[#05668D] text-xs py-5 px-4 ">Med- High</th>
                <th className="border-r border-[#05668D] text-xs py-5 px-4 ">High</th>
                <th className="border-r border-[#05668D] text-xs py-5 px-4 ">Very High</th>
                </tr>
            </thead>
                <tbody>
                    <tr className="h-6 border-y border-[#05668D]">
                        <td className="my-8"></td>
                    </tr>
            <tr className="border-y border-[#05668D] my-4 text-center">
            <td className="border-r text-xs  border-[#05668D]  py-2 px-1 text-[#00A896]">Risk wise Allocation</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">40%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">30%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-[15px] ">20%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">10%</td>
            </tr>
        
            <tr className="border-y border-[#05668D] my-4 text-center">
            <td className="border-r text-xs  border-[#05668D]  py-2 px-1 text-[#00A896]">Expected Multiplier</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">6X</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">10X</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-[15px] ">15px</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">30X</td>
            </tr>
        
            <tr className="border-y border-[#05668D] my-4 text-center">
            <td className="border-r text-xs  border-[#05668D]  p-2 text-[#00A896]">Success Rate</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">50%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">30%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-[15px] ">10%</td>
            <td className="border-r border-[#05668D] text-xs py-2 px-4 ">5%</td>
            </tr>
        
            <tr className="h-6 border-y border-[#05668D]">
                    <td className="my-8"></td>
            </tr>
        
        
            
            <tr className="border-y border-[#05668D] text-start ">
            <td className="border-r  text-xs font-bold border-[#05668D] px-5 text-[#00A896]">Exit Value</td>
            <td className="border-r border-[#05668D] text-[9px] py-2 px-[11px] ">₹60,000,000</td>
            <td className="border-r border-[#05668D] text-[9px] py-2 px-[11px] ">₹45,000,000</td>
            <td className="border-r border-[#05668D] text-[9px] py-2 px-[11px]">₹15,000,000</td>
            <td className="border-r border-[#05668D] text-[9px] py-2 px-[11px] ">₹7,500,000</td>
            </tr>
            </tbody>
        
        </table>

            <div className="flex flex-col px-12 py-4">
                <p className="font-bold pt-4 text-[#00A896]">Overall Returns</p>
                <p className="font-extrabold text-4xl text-[#05668D]">₹127,500,00</p>
                <p className="font-bold pt-3 text-[#00A896]">Portfolio Value</p>
                <p className="font-extrabold text-4xl text-[#05668D]">255%</p>
            </div>
            </div>

            </div>
            
        </div>

        
    </div>
  )
}

export default Fourthpg