
import React from "react";
import Image from "next/image";
import { ThumbsUp } from 'lucide-react';
import { MessageSquareText } from 'lucide-react';
import { Share2 } from 'lucide-react';

const News = ({ imageSrc, date, description }: any) => {
  return (
    <div className="w-[424px] h-[569px] bg-transparent shadow-lg rounded-lg overflow-hidden border border-white">
      <div className="w-full h-[349px] relative">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={424}
          height={349}
          className="w-full h-full object-cover"
          quality={100}
          priority={true}
        />
      </div>
      <div className="p-4">

        <div className="text-[#FF9F0D] text-sm mb-2 font-normal text-[16px] mt-[20px]">
          {date}
        </div>

        <h1 className="text-[24px] font-bold font-helvetica text-[#FFFFFF] mb-4 ">
          {description}
        </h1>

        <div className="flex items-center justify-between mt-[40px]">

          <button className="text-[#FFFFFF] text-sm mb-2 font-normal text-[16px]">
            Learn More
          </button>


          <div className="flex gap-3">
            <div className="w-[32px] h-[32px] text-[#FFFFFF] bg- flex justify-center items-center">
              <ThumbsUp />
            </div>
            <div className="w-[32px] h-[32px] text-[#FF9F0D] flex justify-center items-center">
              <MessageSquareText />
            </div>
            <div className="w-[32px] h-[32px] text-[#FFFFFF] flex justify-center items-center">
              <Share2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;