import React from 'react'
import HeroSection from './HeroSection'

const Aboutus = () => {

    const img = "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?_gl=1*tl7iki*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTEyMzA5OTIkbzExJGcxJHQxNzUxMjMxNDIxJGo1OSRsMCRoMA..";

  return (
  
      <>
      
   <HeroSection image={img } />
    
    <div className='w-[375px] lg:mt-[80px] lg:w-full lg:ml-[80px] h-full'>  {/* Main Div */} 
          

   <div className='w-[350px] mt-5  lg:w-[1250px] lg:w-[1300px] ml-3 '>  {/* Our History */}
              
<p className='font-bold mt-5 text-[40px] font-extrabold text-gray-800 tracking-wide leading-tight '> Our History</p>


<div className='mt-5' >
                                   
<p>Founded with a passion to make a difference, our journey began in 2019 with a small team and a big dream. What started as a simple idea has grown into a thriving organization built on trust, innovation, and dedication.Over the years, we have evolved—expanding our services, building strong relationships, and achieving major milestones that define who we are today. From our humble beginnings to our present-day impact, each chapter of our history reflects our commitment to quality, growth, and meaningful progress.</p>

                  </div> 
                  

<p className='font-bold mt-8 text-[40px] font-extrabold text-gray-800 tracking-wide leading-tight '> Our Mission</p>


<div className='mt-5' >
                                   
<p>Our mission is to deliver outstanding value by providing high-quality services and innovative solutions that exceed expectations. We are committed to empowering our community, building lasting relationships, and driving positive change through integrity, passion, and excellence. Every step we take is guided by a deep purpose—to make a meaningful impact and create a better tomorrow for everyone we serve.</p>

                  </div> 
                  

 <p className='font-bold mt-5 text-[40px] font-extrabold text-gray-800 tracking-wide leading-tight '> Our Vision</p>


<div className='mt-5' >
                                   
<p>Our vision is to create a positive impact by delivering exceptional value, fostering innovation, and inspiring growth. We aim to be a trusted leader in our industry by empowering people, embracing sustainability, and setting new standards of excellence. Through passion, integrity, and a commitment to continuous improvement, we strive to build a future that benefits our community, our customers, and the world.</p>

</div>                  





</div>
        
    
     </div>  
    
    
    
    
    
    
    
    
      </>
      
  )
}

export default Aboutus