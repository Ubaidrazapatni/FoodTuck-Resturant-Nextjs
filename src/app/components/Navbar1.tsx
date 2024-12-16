import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import Image from "next/image"
import React from "react"
import Link from 'next/link';
const Navbar1 = () => {
    return (
        <div className="w-[1320px] h-[87px] top-[45px] left-[300px] bg-transparent ">
            <div className="flex justify-center">
                <Image src="/Foodtuck (2).png" alt="" width={100} height={100} />
            </div>
            <div className="flex justify-between">
                <div className="text-base font-normal flex gap-[40px] text-[#FFFFFF] mt-4 ">
                    <p>Home</p>
                    <Link href="/Menu page" >Menu</Link>
                    <p>Blog</p>
                    <p>Pages</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Conatct</p>
                </div>
                <div className="mr-[50px] flex">
                    <div className="relative w-[310px] h-[54px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-[1px] border-[#FF9F0D] p-5 w-full h-full rounded-[26px] pr-12 bg-transparent"
                        />
                        <Search className='absolute top-1/2 right-4 transform -translate-y-1/2 text-[#FFFFFF] cursor-pointer hover:text-black' />
                    </div>

                    <div className="text-[#FFFFFF] flex items-center ml-3 ">

                        <ShoppingBag className='w-6 h-6' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar1