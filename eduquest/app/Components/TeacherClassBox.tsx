import React from "react";
import Link from "next/link";

type Params = {
  params: {
    color: string;
    link: string;
    label: string;
    name: string;
  };
};

export default function TeacherClassBox({ params }: Params) {
  return (
    <div className="relative mb-4 w-56 sm:w-56">
      <Link href={`${params?.link}`}>
        <div className="block h-56 cursor-pointer transition duration-300 ease-in-out transform hover:brightness-90">
          {/* Colored half at the top */}
          <div
            className={`absolute left-0 top-0 w-full h-1/2 ${params?.color} transition duration-300 ease-in-out transform hover:brightness-110 rounded-lg rounded-b-none`}
          ></div>
          {/* White lower half */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white rounded-lg rounded-t-none"></div>

        </div>
      </Link>
      {/* Text position within class*/}
      <div
        className="absolute top-0 left-0 w-full p-2 text-black text-2xl font-bold pointer-events-none"
        style={{ marginTop: 4 }}
      >
        {params?.label}
      </div>
      <div
        className="absolute top-0 left-0 w-full p-2 text-black text-xs font-bold pointer-events-none"
        style={{ marginTop: 36 }}
      >
        {params?.name}
      </div>
    </div>
  );
}
