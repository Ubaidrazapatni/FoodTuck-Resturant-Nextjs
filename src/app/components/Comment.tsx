import React from "react";
import Image from "next/image";
const Comment = () => {
    return (
        <div className="relative w-full max-w-[869px] h-auto bg-gray-100 p-4 flex flex-col justify-center items-center 2xl:w-[869px] 2xl:h-[451px]">

            <div className="absolute -top-10 flex justify-center 2xl:-top-20">
                <Image
                    src="/Comment.png"
                    alt="User Image"
                    width={133}
                    height={133}
                    className="rounded-full"
                />
            </div>

            <div className="mt-3 mb-4 flex justify-center 2xl:mt-5">
                <Image
                    src="/Quotes.png"
                    alt=""
                    width={48}
                    height={48}
                    className="rounded"
                />
            </div>


            <div className="mb-4 mt-4 w-full max-w-[696.57px] h-auto flex justify-center items-center font-helvetica text-[16px] text-gray-700 2xl:w-[696.57px] 2xl:h-[103.97px] 2xl:text-[18px] 2xl:text-[#4F4F4F]">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                    Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
                    eu velit in consequat.
                </p>
            </div>


            <div className="mb-4 mt-4 flex justify-center">
                <Image
                    src="/star.png"
                    alt=""
                    width={152}
                    height={24}
                />
            </div>

            <div className="mb-2 mt-4 flex justify-center font-helvetica font-bold">
                <h2 className="text-lg font-bold text-gray-900 2xl:text-xl">Alamin Hasan</h2>
            </div>

            <div>
                <p className="text-gray-600 flex justify-center text-sm 2xl:text-base">Food Specialist</p>
            </div>
        </div>
    );
};

export default Comment;