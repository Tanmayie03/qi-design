import icon from '../pages/images/icon.png'
import roundImg from '../pages/images/roundImg.png'

const Border1 = () => {
  return (
    
        <div className="flex justify-between">
            <div className='border border-[#05668D] h-[545px] w-14  flex flex-col justify-around '>
            <img src={icon} alt='' className='w-10 p-2 mx-auto' />
            <h1 className='py-48 -ml-20 text-[#05668D] font-bold tracking-[8px] 
             text-sm -rotate-90 w-52 font-montserrat'> QI VENTURES</h1>
            <img src={roundImg} alt=' '  className='w-8 mx-auto mb-1'/>

            </div>
            
            

        </div>




    
  )
}

export default Border1