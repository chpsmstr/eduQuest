import React from "react";
import Link from "next/link";

type Params = {
  params: {
    text: string;
    href: string;
    color: string;
    hoverColor: string;
  };
};

export default function SolidColorButton({ params }: Params) {
  return (
    <Link href={`${params.href}`}>
      <button
        className={`${params?.color} hover:${params?.hoverColor} text-white py-2 px-7 rounded`}
      >
        {params.text}
      </button>
    </Link>
  );
}
