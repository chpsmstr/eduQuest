import React from "react";
import Link from "next/link";

type Params = {
  params: {
    link: string;
    label: string;
  };
};

export default function ClassButton({ params }: Params) {
  const labelStyle = {
    top: "12px", //Position for text below the button so user knows what it does
    left: "12px", //Text appears on hover
    marginLeft: "-8px",
  };
  return (
      <div className="absolute">
      <Link href={`${params?.link}`}>
        <div className = "group relative">
        <div className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-2xl">+</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 text-black text-m" style={labelStyle}>{params?.label}</div>
        </div>
      </Link>
      </div>
  );
}
8