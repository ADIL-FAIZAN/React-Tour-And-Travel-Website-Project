import React from 'react'

const HeroSection = ({image}) => {
  return (
      <>
      
<div className='sm:flex md:w-[768px] lg:w-[1024px] xl:w-[1536px] h-[550px] overflow-hidden'>

 <img className="w-full h-full object-cover" src={image }/>      
      
</div>      
      </>
  )
}

export default HeroSection