import React from "react";
import { Great_Vibes } from "next/font/google";
import News from "./News";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400", // You can choose the weight as needed
});
const Hero10 = () => {
  return (
    <div className="w-[1920px] h-[950px] bg-[#0D0D0DF2] flex flex-col justify-center">
      <div className="w-[1320px] h-[732px] ml-[300px]">
        <div
          className={`${greatVibes.className} text-[#FF9F0D] font-normal text-[32px] flex justify-center`}
        >
          <h1>Blog Post</h1>
        </div>
        <div className="font-helvetica font-bold text-5xl flex justify-center">
          <div className="text-[#FF9F0D]">La</div>
          <div className="text-[#FFFFFF]">test News & Blog</div>
        </div>
        <div className="flex gap-6 mt-[60px]">
            <News imageSrc = "/News1.png" date = '10 February 2022 ' description = ' Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis'/>
            <News imageSrc = "/News2.png" date = '10 February 2022 ' description = ' Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A'/>
            <News imageSrc = "/News.3.png" date = '10 February 2022 ' description = ' Curabitur rutrum velit ac congue malesuada'/>
        </div>
      </div>
    </div>
  );
};

export default Hero10;