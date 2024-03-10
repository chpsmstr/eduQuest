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
    <Link href={`${params.href}`}>
      <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2">{params.text}</h1>
    </Link>
  );
}
