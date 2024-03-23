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
  return(

    <Link href={`${params.href}`}>
      <button
        className={`${params?.color} hover:${params?.hoverColor} text-white py-2 ${params?.length} sm:text-1xl lg:text-2xl rounded`}
      >

        {params.text}

         </button>
    </Link>
  );
}
