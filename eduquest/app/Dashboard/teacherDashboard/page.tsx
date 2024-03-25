import React from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/TeacherClassBox"; // Importing ClassBox component
import ClassButton from "@/app/Components/ClassButton";

// Array of colors for class boxes
const colors: string[] = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

// Interface defining props for class boxes
interface ClassProps {
  color: string;
  link: string;
  label: string;
}

// Filler teacher name
var teacherName = "First Name Last Name";

// Component to display class boxes
const ClassNames = () => {
  var links: string[] = [
    "teacherDashboard/Math100",
    "teacherDashboard/Chemistry111",
    "teacherDashboard/Physics112",
    "teacherDashboard/Biology121",
    "teacherDashboard/Comp-Sci122",
    "teacherDashboard/English112",
  ];
  var labels: string[] = [
    "Math 100",
    "Chemistry 111",
    "Physics 112",
    "Biology 121",
    "Comp-Sci 122",
    "English 112",
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
            name: teacherName // Pass teacher name as prop
          }}
        />
      ))}
    </div>
  );
};

// Main Dashboard component
export default function Dashboard() {
  return (
    <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      {/* Header with teacher name */}
      <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16">
        {teacherName} Classes
      </h1>
      
      {/* Display class boxes */}
      <ClassNames />
    </main>
  );
}
