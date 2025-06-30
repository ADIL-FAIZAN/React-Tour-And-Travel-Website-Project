import React from 'react'
import HeroSection from "./HeroSection"

const ContactUs = () => {

  const img = "https://media.istockphoto.com/id/2160041157/photo/website-page-contact-us-or-e-mail-marketing-concept-customer-support-hotline-contact-us.jpg?b=1&s=612x612&w=0&k=20&c=wMS_hHlLuFw0kmUqQq89GwUKo90C3EDBptlidQzKxJI=";

  return (    
    <>  

     
<HeroSection image={img} />
      
<div className='flex flex-col h-[740px] mt-[70px] items-center  w-full '> {/* Main Div */}
          

<div>             
<p className='font-bold md:text-[40px] text-[30px] font-[poppins]'>Send a message to us!</p>
</div>  

        <div className='w-[330px] lg:w-[630px] h-full mt-[40px]'>   {/* Contact Div */}
        
          <input
            
        placeholder="Name"
        className="border p-2 rounded w-full "/>
        
          <input
            
        placeholder="Email"
        className="border p-2 rounded w-full mt-5 " />
          
          <input
            
        placeholder="Subject"
        className="border p-2 rounded w-full mt-5 "/>

        <input
            
        value="Enter Message..."
        className="border p-2 rounded w-full h-[150px] mt-5 "/>


        <button className='w-[330px] lg:w-[630px] h-[50px] rounded mt-5 bg-gray-300'> Send Message</button>


        </div>        







          
</div>  {/* Main Div Ends Here   */}   

         
      </>
  
  
  )
}

export default ContactUs;