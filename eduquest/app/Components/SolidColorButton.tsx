import React from "react";
import Link from "next/link";

type Params = {
  params: {
    text: string;
    href: string;
    color: string;
    hoverColor: string;
    length : string;
  };
};

export default function SolidColorButton({ params }: Params) {
  return (<button
    className={`${params?.color} hover:${params?.hoverColor} text-white py-2 px-7 rounded`}
  >
    <Link href={`${params.href}`}>
      <button
        className={`${params?.color} hover:${params?.hoverColor} text-white py-2 ${params?.length} sm:text-1xl lg:text-2xl rounded`}
      >

        {params.text}
      
    </Link>
    </button>
  );
}
