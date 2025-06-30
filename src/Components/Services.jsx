import React from 'react'
import Card from './Card'
import HeroSection from './HeroSection'


const Services = () => {

  const img = "https://images.pexels.com/photos/8441811/pexels-photo-8441811.jpeg?_gl=1*boavwp*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTEzMDMwNTkkbzEzJGcxJHQxNzUxMzAzMTU1JGo1OSRsMCRoMA..";

  return (
    
      <>
      
      <HeroSection image={img} />

<div className='h-40 w-full mt-[20px] lg:mt-[40px] '>
          
<div className='flex flex-col h-40 justify-center items-center '> 
            
<p className='font-bold md:text-[40px] text-[30px] font-[poppins] '>Recent Trips</p>
<p className='text-[14px] font-[poppins] tracking-wide text-#7B7171'>Tours give you the opportunity to see a lot,within a time frame.</p>
            
</div>  
</div>
      
      

<div className='flex justify-center mt-[30px]' >
      
<div className='grid sm:grid-cols-3 gap-2'>
        
<Card title="Trip in Indonesia" image={'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?_gl=1*upo6wy*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTA5NzU0NjgkbzckZzEkdDE3NTA5NzU3MjYkajEzJGwwJGgw'} description={`Indonesia is a tropical paradise
with stunning islands and rich culture.
Enjoy delicious food and friendly people.
Explore beaches, temples, and jungles.
Wildlife adventures make it unforgettable.`}/>
<Card image={`https://images.pexels.com/photos/548077/pexels-photo-548077.jpeg?_gl=1*86qaj3*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTEyMjg0MTMkbzEwJGcxJHQxNzUxMjI4NDIxJGo1MiRsMCRoMA..`} title={`Trip in France`} description={`France offers iconic landmarks, rich history, romantic cities, fine wine, gourmet cuisine, charming villages, stunning countryside, and world-class art.`} />
<Card image={`https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?_gl=1*161w1v8*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTEyMjg0MTMkbzEwJGcxJHQxNzUxMjI4NTM2JGoxOSRsMCRoMA..`} title={`Trip in England` } description={`England offers historic landmarks, charming villages, royal palaces, green countryside, vibrant cities, rich culture, traditional pubs, and iconic attractions.`} /> 

</div>
</div>
      
      
      
      
      
      </>
  
  
  
  )
}

export default Services