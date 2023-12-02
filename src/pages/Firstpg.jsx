import mainImg from '../pages/images/mainImg.png'
import roundImg from '../pages/images/roundImg.png'
import arrow from '../pages/images/arrow.png'
// import Secondpg from './Secondpg'
// import Thirdpg from './Thirdpg'
// import Fourthpg from './Fourthpg'
// import { Fifthpg } from './fifthpg'
// import Sixth from './Sixth'
// import Seventhpg from './Seventhpg'
// import { Eightpg } from './Eightpg'
// import Border1 from './Border1'
// import Border2 from './Border2'
const Firstpg = () => {
  return (
    // <div className='flex w-full  py-8  h-[596px]'>
       
        <div className='flex w-full overflow-hidden h-full border-b border-[#05668D] ' id='firstpg' >
        <div className='flex justify-between w-full lg:items-center h-fit font-montserrat'>
          <div className='flex flex-col items-start w-[60%] gap-6 px-4 lg:pl-12 '>
          <img src={roundImg} alt='' className='hidden lg:w-32 lg:block' />
          <p className='text-3xl lg:text-7xl  font-bold font-montserrat text-[#05668D] lg:leading-[70px] pt-10 lg:pt-0 px-3'>Ideation to unicorn!</p>
          <p className='font-montserrat font-medium text-xs lg:text-justify p-2 py-4 lg:w-[75%]'>We partner with future leaders to build category-defining businesses that stand the test of time. Our focus is on markets where technology, innovation and capital can unlock long-term value and drive economic growth.</p>
          
          <div className='flex px-2'>

          <button className='border border-[#00A896] w-52 lg:w-80  text-sm p-2  lg:px-6 text-center text-[#00A896]
            font-bold lg:tracking-[4px]  flex items-center'>INVESTORS / FOUNDERS</button>
          <div className='border border-[#00A896] p-2'><img src={arrow} alt='' className='w-2 m-2' /></div>
          </div>
          </div>
          <img src={mainImg} alt='' className='lg:h-[545px] h-[400px] lg:w-96' />
        </div>
            
        </div>

     
    // </div>
    
  )
}

export default Firstpg