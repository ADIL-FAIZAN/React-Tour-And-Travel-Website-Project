import { useState} from "react"
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);



  return (
    <>
     
      <div className='xl:absolute  sm:top-0  sm:ml-5  sm:flex  sm:bg-white  sm:mt-5  sm:mx-auto sm:w-[700px] lg:w-[900px] xl:w-[1420px] sm:h-20  sm:rounded-lg '
      
       style={{
    boxShadow: '0 0 10px rgba(156, 163, 175, 1)'  // upward shadow
  }} > 
        
          <ul className="sm:flex sm:gap-8 lg:gap-19 xl:gap-40 sm:font-poppins hidden mt-5 mx-auto">

           <li className="font-bold hover:bg-[#0A9499] w-[60px] rounded h-[40px]">Trippy</li>
           <Link to="/">  <li className="font-bold hover:bg-[#0A9499] w-[90px] rounded h-[40px]"><i class="fa-solid fa-house-user fa-lg mr-1"></i>Home</li></Link>
            <Link to="/Aboutus"><li className="font-bold hover:bg-[#0A9499] w-[90px] rounded h-[40px]"><i class="fa-solid fa-circle-info fa-lg mr-1"></i> About</li></Link>
            <Link to="Services"><li className="font-bold hover:bg-[#0A9499] w-[90px] rounded h-[40px]"><i class="fa-solid fa-briefcase fa-lg mr-1"></i>Service</li></Link>
            <Link to="ContactUs"><li className="font-bold hover:bg-[#0A9499] w-[90px] rounded h-[40px]"><i class="fa-solid fa-address-book fa-lg mr-1"></i>Contact</li></Link>
            <li ><button className="bg-black text-white px-3 py-2 rounded ">Sign up</button></li>
          </ul>
        
    </div>  

      
      

      <div className=" w-full flex justify-center fixed mt-5">

        <div>  
      <div className="sm:hidden rounded w-[350px] bg-white h-17 "     style={{
    boxShadow: '0 0 10px rgba(156, 163, 175, 1)'  // upward shadow
  }}  >

            
      <div className="flex">
      <p className="text-[27px] ml-5 font-bold hover:bg-[#0A9499] mt-3">Trippy</p>    
      <i onClick={()=>setOpen(!open)} className="fa-solid fa-bars mt-5 ml-53  text-[25px] "></i>
        
        </div>
        </div>

      </div>
       
       
{open && (
      
  <div className="ml-3 rounded sm:hidden mt-[24px] fixed w-[350px] top-16 left-0  flex justify-center bg-white bg-opacity-95 z-50 py-4"     style={{
    boxShadow: '0 0 10px rgba(156, 163, 175, 1)'  // upward shadow
  }} > 

 <ul className="font-poppins ">
 
            <Link to="/"><li className="mt-2 "><i class="fa-solid fa-house-user fa-lg mr-1"></i>Home</li> </Link>
            <Link to="/Aboutus"><li className="mt-2"><i class="fa-solid fa-circle-info fa-lg mr-1"></i> About</li></Link>
            <Link to="/Services"><li className="mt-2"><i class="fa-solid fa-briefcase fa-lg mr-1"></i>Service</li></Link>
            <Link to="/ContactUs"><li className="mt-2"><i class="fa-solid fa-address-book fa-lg mr-1"></i>Contact</li></Link>
            <li className="mt-2"><button className="bg-black text-white px-3 py-2 rounded mt-1">Sign up</button></li>
          </ul>

</div>

      )}

</div>

 
 
      
      </>
  )
}

export default Navbar