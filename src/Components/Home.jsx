import React from 'react'
import HeroSection from './HeroSection'
import Image from './Image'
import Card from './Card';



const Home = () => {

    const img = 'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?_gl=1*upo6wy*_ga*MTY1NjM3NDQxOS4xNzE3OTM5MTA2*_ga_8JE65Q40S6*czE3NTA5NzU0NjgkbzckZzEkdDE3NTA5NzU3MjYkajEzJGwwJGgw';


    return (

      <>
 <HeroSection image={img} />

        
<div className='h-40 w-full '>
          
<div className='flex flex-col h-40 justify-center items-center '> 
            
<p className='font-bold md:text-[40px] text-[30px] font-[poppins] '>Popular Destinations</p>
<p className='text-[14px] font-[poppins] tracking-wide text-#7B7171'>Tours give you the opportunity to see a lot,within a time frame.</p>
            
</div>  
</div>

{/* Taal volcano portion*/}
        

        
<div className='grid  lg:grid-cols-2 gap-15 mt-5 lg:w-[1400px] mx-auto '>
          
<div className=' mx-auto lg:h-[400px] mt-[70px] '>            

<div className='w-[375px]  flex justify-center'>

<p className='text-[30px] font-[poppins]'>Taal Volcano, Batangas</p>              

</div>

  
            
<div className='w-full flex justify-center '>
            
  <div className=' w-[320px] sm:w-[620px]'>         
                 
<p className='font-[poppins] mt-5 text-[20px] '>
              Taal Volcano, located in the province of Batangas in the Philippines, is one of the country’s most iconic and fascinating natural wonders. Despite its relatively small size compared to other volcanoes, Taal is known for its unique structure — a volcano within a lake, which is within another volcano. This geological setup
              makes it one of the rarest and most picturesque volcanoes in the world.
              The volcano is situated on Volcano Island, surrounded by the freshwater body known as Taal Lake. What makes Taal truly captivating is the presence of another small crater lake within its main crater. This breathtaking natural feature draws thousands of tourists, geologists, and nature lovers every year. The scenery is especially spectacular from the Tagaytay ridge, which offers panoramic views of the lake and volcano below.

              </p>
              

              </div> 
              
   </div>                  


          </div>
          


<div className=' sm:w-[550px] w-[350px]  flex justify-center '>

<div className='grid grid-cols-2 gap-2'>
                      
<div className='mt-9'>
    
<Image/>        

</div>


<div>
    
<Image />        

</div>

          
 </div>

</div> 

          
</div>

{/* Taal volcano portion with images Ends Here*/}



{/* Taal volcano portion 2*/}
        

        
<div className='grid  lg:grid-cols-2 mt-[150px] gap-15 lg:w-[1400px] mx-auto '>
          

<div className=' sm:w-[550px] w-[350px]  flex justify-center '>

<div className='grid grid-cols-2 gap-2'>
                      
<div className='mt-9'>
    
<Image/>        

</div>


<div>
    
<Image />        

</div>

          
 </div>

</div> 

          


<div className=' mx-auto lg:h-[400px] mt-[70px] '>            

<div className='w-[375px]  flex justify-center'>

<p className='text-[30px] font-[poppins]'>Taal Volcano, Batangas</p>              

</div>

  
            
<div className='w-full flex justify-center '>
            
  <div className=' w-[320px] sm:w-[620px]'>         
                 
<p className='font-[poppins] mt-5 text-[20px] '>
              Taal Volcano, located in the province of Batangas in the Philippines, is one of the country’s most iconic and fascinating natural wonders. Despite its relatively small size compared to other volcanoes, Taal is known for its unique structure — a volcano within a lake, which is within another volcano. This geological setup
              makes it one of the rarest and most picturesque volcanoes in the world.
              The volcano is situated on Volcano Island, surrounded by the freshwater body known as Taal Lake. What makes Taal truly captivating is the presence of another small crater lake within its main crater. This breathtaking natural feature draws thousands of tourists, geologists, and nature lovers every year. The scenery is especially spectacular from the Tagaytay ridge, which offers panoramic views of the lake and volcano below.

              </p>
              

              </div> 
              
   </div>                  


          </div>



</div>

{/* Taal volcano portion with images Ends Here 2*/}


<div className='h-40 w-full mt-[50px] '>
          
<div className='flex flex-col h-40 justify-center items-center '> 
            
<p className='font-bold md:text-[40px] text-[30px] font-[poppins] '>Recent Trips</p>
<p className='text-[14px] font-[poppins] tracking-wide text-#7B7171'>Tours give you the opportunity to see a lot,within a time frame.</p>
            
</div>  
</div>

{/* Card Section*/}


<div className='flex justify-center' >
      
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

export default Home