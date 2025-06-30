import React from 'react'

const Card = ({image,title,description}) => {


  return (
    
   <>   
      
 <div className='h-[380px] mt-5 rounded-lg ml-5 w-[300px]' style={{ boxShadow: '0 -3px 26px rgba(156, 163, 175, 0.5)' }}>
          
<div className='h-[170px] w-[280px] ml-[10px] mt-1 pt-2'> {  /* =====  Image Div   ===== */}

                  <img className="h-full w-full object-cover rounded-lg" src={image }/>                 

</div>   

<div className='ml-[10px] mt-4 '>

                  <p className='font-bold'>{ title}</p>                  

</div>


<div className='mt-2 ml-[10px] '>

                  <span className='leading-relaxed text-gray-700 font-small tracking-wide'>{description}
                      
                  </span>                  

</div>



      </div>    {/* =====  Main Div  ===== */}
  
  </>
  
  )
}

export default Card