import React from "react";
import Link from "next/link";

type Params = {
  params: {
    color: string;
    link: string;
    label: string;
  };
};

export default function Assignment({ params }: Params) {
  return (
    <div className="relative mb-4 w-56 sm:w-56 rounded">
      <Link href={`${params?.link}`}>
        <div className="block h-56 cursor-pointer transition duration-300 ease-in-out transform hover:brightness-90">
          {/* Colored half at the top */}
          <div
            className={`absolute left-0 top-0 w-full h-1/2 ${params?.color} transition duration-300 ease-in-out transform hover:brightness-110`}
          ></div>
          {/* White lower half */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
        </div>
      </Link>
      {/* Text position within class*/}
      <div
        className="absolute top-0 left-0 w-full p-2 text-black text-2xl font-bold pointer-events-none"
        style={{ marginTop: "calc(1/6 * 6rem)" }}
      >
        {params?.label}
      </div>
    </div>
  );
}
