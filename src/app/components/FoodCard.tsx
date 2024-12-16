
import React from "react";
import Image from "next/image";
const FoodCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="w-[362px] h-[356px]">
          <Image
            src="/Card1.png"
            alt=""
            width={322}
            height={194}
            className="w-full h-full"
          />
        </div>
        <div className="w-[281px] h-[231px]">
          <Image
            src="/Card2.png"
            alt=""
            width={322}
            height={194}
            className="w-full h-full mt-[120px]"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[244px] h-[306px]">
          <Image
            src="/Card3.png"
            alt=""
            width={322}
            height={194}
            className="w-full h-full"
          />
        </div>
        <div className="w-[221px] h-[226px]">
          <Image
            src="/Card4.png"
            alt=""
            width={322}
            height={194}
            className="w-full h-full"
          />
        </div>
        <div>
          <div className="w-[161px] h-[168px]">
            <Image
              src="/Card5.png"
              alt=""
              width={322}
              height={194}
              className="w-full h-full"
            />
          </div>
          <div className="w-[161px] h-[166px]">
            <Image
              src="/Card6.png"
              alt=""
              width={322}
              height={194}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;