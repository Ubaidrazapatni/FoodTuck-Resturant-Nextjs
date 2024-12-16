import React from 'react'
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";
import MiniCard from './MiniCard';
const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400", // You can choose the weight as needed
});
const Hero6 = () => {
    return (
        <div className=' bg-[#0D0D0DF2] w-[Auto] h-[656px] flex flex-col'>
            <div className={`${greatVibes.className} text-[#FF9F0D] font-normal text-[32px] flex justify-center`}>
                <h1>Choose & pick</h1>
            </div>
            <div className='font-helvetica font-bold text-5xl flex justify-center'>
                <div className='text-[#FF9F0D]'>
                    Fr
                </div>
                <div className='text-[#FFFFFF]'>
                    om Our Menu
                </div>
            </div>
            <div className='w-[1056px] h-[28px] text-[#FFFFFF] font-bold text-xl flex justify-between items-center mt-7 ml-[360px]'>
                <h1 className='text-yellow-600' >Breakfast</h1>
                <h1>Lunch</h1>
                <h1>Dinner</h1>
                <h1>Dessert</h1>
                <h1>Drink</h1>
                <h1>Snack</h1>
                <h1>Suops</h1>
            </div>

            <div className='w-[1320px] h-[406px] flex mt-[75px] ml-[100px]'>
                <div className='w-[515px] h-[406px] ml-[110px]'>
                    <Image src='/Mini.png' alt='food item' width={322} height={194} className='w-full h-full ml-[150px]' />
                </div>
                <div className='w-[805px] h-[406px]'>
                    <div className='flex gap-4 ml-[300px]'>
                        <div className='flex flex-col gap-[30px]'>
                            <MiniCard imageSrc='/Mini1.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini2.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini3.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini4.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                        </div>
                        <div className='flex flex-col gap-[30px]'>
                            <MiniCard imageSrc='/Mini5.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini6.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini7.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                            <MiniCard imageSrc='/Mini8.png' name='Lettuce Leaf' description='Lacus nisi, et ac dapibus velit in consequat.' price='12.5$' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Hero6