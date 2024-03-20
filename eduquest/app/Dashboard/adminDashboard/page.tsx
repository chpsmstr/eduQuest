import React, { Component } from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/AdminClassBox";
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
    "adminDashboard/Math100",
    "adminDashboard/Chemistry111",
    "adminDashboard/Physics112",
    "adminDashboard/Biology121",
    "adminDashboard/Comp-Sci122",
    "adminDashboard/English112"
  ];
  var registerLinks: string[] = [
    "adminDashboard/Math100/register",
    "adminDashboard/Chemistry111/register",
    "adminDashboard/Physics112/register",
    "adminDashboard/Biology121/register",
    "adminDashboard/Comp-Sci122/register",
    "adminDashboard/English112/register"
  ];
  var editLinks: string[] = [
    "adminDashboard/Math100/edit",
    "adminDashboard/Chemistry111/edit",
    "adminDashboard/Physics112/edit",
    "adminDashboard/Biology121/edit",
    "adminDashboard/Comp-Sci122/edit",
    "adminDashboard/English112/edit"
  ];
  
  var labels: string[] = [
    "Math 100",
    "Chemistry 111",
    "Physics 112",
    "Biology 121",
    "Comp-Sci 122",
    "English 112",
  ];

  var teachers: string[] = [
      "Dr. Meredith Stone",
      "Dr. Alexander Patel", 
      "Dr. Eleanor Hayes",
      "Dr. Benjamin Carter", 
      "Dr. Victoria Liu", 
      "Dr. Jim Thompson"
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox
          key={index}
          params={{
            color: color,
            link: links[index],
            label: labels[index],
            teacher: teachers[index],
            editLink: editLinks[index],
            registerLink: registerLinks[index]
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
        Admin Classes
      </h1>
      <div className="absolute top-4 right-16">
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
