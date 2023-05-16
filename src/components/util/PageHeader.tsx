import Image from "next/image";
import React from "react";
import Header_bg from "../../assets/header/header-bg.png";

type Props = {
  children: React.ReactNode;
};

const PageHeader = ({ children }: Props) => {
  return (
    <div className="absolute inset-0 z-0 h-[400px]">
      <div className="relative h-[400px] w-full">
        <Image
          fill
          src={Header_bg}
          alt="Background Image"
          className="absolute inset-0 -z-10 object-cover object-center opacity-10"
        />
        <div className="flex h-full flex-col justify-center gap-4 p-10 opacity-100 lg:mx-auto lg:w-[70%]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
