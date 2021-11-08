import React from "react";
import { Header } from "./Header";
import Seo from "./Seo";
export const MainContainer = ({
  children,
}: {
  children: React.ReactChild[];
}): JSX.Element => {
  return (
    <div className="w-[100vw]">
      <Seo />
      <div className="flex flex-col w-full mb-12 justify-center items-center">
        <div className="w-[90vw] md:w-5/6 mt-24 border-2 dark:border-[#30363C] rounded-t-lg p-2">
          <Header />
        </div>
        <div className="w-[90vw] md:w-5/6 -mt-0.5 border-2 dark:border-[#30363C] rounded-b-lg">
          <div className="prose md:prose-md prose-xs dark:prose-dark m-8 !max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
