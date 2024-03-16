import React from "react";
import Link from "next/link";

type Params = {
  params: {
    link: string;
    label: string;
  };
};

export default function ClassButton({ params }: Params) {
  return (
      <div className="absolute">
      <Link href={`${params?.link}`}>
        <div className = "group relative">
        <div className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out flex items-center justify-center">
            <span className="text-2xl">+</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100">{params?.label}</div>
</div>
      </Link>
      </div>
  );
}
