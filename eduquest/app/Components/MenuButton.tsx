import React from "react";
import Link from "next/link";

type Params = {
  params: {
    text: string;
    href: string;
  };
};

export default function MenuButton({ params }: Params) {
  return (
    <div className="menu-button-container relative group">
      <Link href={`${params.href}`}>
        <div className="flex items-center">
          <span className="text-3xl hidden md:inline-block opacity-0 group-hover:opacity-100 mr-5">&gt;</span> {/* '>' arrow with opacity transition */}
          <h1 className="text-4xl lg:text-4xl lg:mx-2 sm:mx-0 transition duration-500 hover:scale-125 rounded">
            {params.text}
          </h1>
        </div>
      </Link>
    </div>
  );
}