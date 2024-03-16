import React, { Component } from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/ClassBox";
import ClassButton from "@/app/Components/ClassButton";

const colors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

interface ClassProps {
  color: string;
  link: string;
  label: string;
}

const ClassNames = () => {
  var links: string[] = [
    "Dashboard/Calculus",
    "Dashboard/Chemistry",
    "Dashboard/Physics",
    "Dashboard/Biology",
    "Dashboard/CompSci",
    "Dashboard/Arts",
  ];
  var labels: string[] = [
    "Calculus",
    "Chemistry",
    "Physics",
    "Biology",
    "CompSci",
    "Arts",
  ];
  var grades: string[] = ["89%","75%","98%","67%","84%","78%"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox
          key={index}
          params={{
            color: color,
            link: links[index],
            label: labels[index],
            grade: grades[index]
          }}
        />
      ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16">
        Student Name Classes
      </h1>
      <div className="absolute top-4 right-16">
      <ClassButton
          params={{
            link: "/JoinClass",
            label: "Join a Class"
          }}
        />
        </div>
        <div className="absolute top-28 right-16">
        <ClassButton
          params={{
            link: "/CreateClass",
            label: "Create a Class"
          }}
        />
        </div>
      <ClassNames />
    </main>
  );
}
