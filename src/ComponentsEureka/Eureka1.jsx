import {NavBarE} from './index.js'
import {eurekab,eurekad,eurekae,eurekac,eurekaf,eurekag,eurekah,eurekai} from '../assets'

const EurekaA = [
  {
    img:eurekac,
    title:"Corrosion resistant coatings with self healing properties.",
    author:"Presented by Bharat Bairagi, Swapnil Bhavsar and Yukta Malik"
  },
  {
    img:eurekab,
    title:"Replacing harmful synthetic dyes with natural dyes",
    author:"Presented by Shikha Yadav and Tanuka Sinha "
  },
  {
    img:eurekad,
    title:"Increment in efficiency of solar cell",
    author:"Presented by Jay Chauhan, Avinash Verma and Pears Patel"
  },
  {
    img:eurekae,
    title:"Algae Biofuels",
    author:"Presented by Bhuvan, Upendra, Satya, Sasank M and Rishabh V Yadav" 
  },
  {
    img:eurekaf,
    title:"Neutralization of Quartenary Ammonium Compound in Wastewater",
    author:"Presented by Daxesh M. Vasava and Aaditya Kumar"
  },
  {
    img:eurekag,
    title:"Manufacturing of Biodegradable PU and its waste management",
    author:"Presented by Dhananjay Dadheech, Priyanka Kadam and Jaykumar A. Vaghela"
    
  },
  {
    img:eurekah,
    title:"Transparent Solar Cells",
    author:"Presented by Abhay Dubey, Anuj Desai and Shambhavi Shrivastav"
  },
  {
    img:eurekai,
    title:"Packaging Waste Management",
    author:"Presented by Sanskar C. Patel, Jeet N. Gajera and Dwij A. Pandya"
  }
]

function Eureka1() {
  return (
    <>
     
      <section className='bg-background-950'>
       
        <h1 className='text-[40px] md:text-[65px] pt-[6rem] mb-5 px-3 text-center font-bold'>Eureka 1.0 Archives</h1>
      
       
       <div className='flex flex-col justify-center items-center '>
       
          {EurekaA.map((eurekaA, index) => (
            <div className='bg-background-900 flex w-[83%] flex-col justify-center items-center py-4 mb-4 rounded-lg hover:shadow-lg hover:shadow-text-500/60 backdrop-blur-[10px]' key={index}>
              <img src={eurekaA.img} alt="" className='w-[80%]' />
              <p className='text-text-100 text-xl px-1 text-center font-semibold mt-1'>{eurekaA.title}</p>
              <p className='text-text-100 text-center font-[500] mt-1'>{eurekaA.author}</p>
            </div>
          ))}
       </div>
      </section>
    </>
  )
}

export default Eureka1
