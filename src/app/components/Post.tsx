import Image from "next/image";
const Post = ({ name, imageSrc, price }: any) => {
  return (
    <div className="w-[244px] h-[53px] flex rounded-lg overflow-hidden shadow-md">
      <Image
        width={100}
        height={100}
        src={imageSrc}
        alt="Pizza"
        className="h-full w-[59px] object-cover"
      />
      <div className="flex flex-col justify-center ml-3">
        <p className="font-normal text-[16px]">{name}</p>
        <p className="font-normal text-[18px]">{price}</p>
      </div>
    </div>
  );
};

export default Post;
