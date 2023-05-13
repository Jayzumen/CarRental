import React from "react";

type Props = {
  children: React.ReactNode;
};

const Banner = ({ children }: Props) => {
  return (
    <div className="bg-black p-20 text-white dark:bg-white dark:text-black">
      {children}
    </div>
  );
};

export default Banner;
