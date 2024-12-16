import React from 'react'
import Recipie from './Racipei'

const Hero5 = () => {
  return (
    <div className='w-[1920px] h-[469px] bg-[#0D0D0DF2] '>
        <div className='w-[1920px] h-[469px] flex ml-[200px] gap-[170px]'>
            <Recipie imageSrc = "/Group (1).png" name = "Professional Chefs" items = "420"/>
            <Recipie imageSrc = "/Group.png" name = "Items Of Food" items = "320"/>
            <Recipie imageSrc = "/Group (2).png" name = "Years Of Experienced" items = "30+"/>
            <Recipie imageSrc = "/Group (3).png" name = "Happy Customers" items = "220"/>
        </div>
    </div>
  )
}

export default Hero5