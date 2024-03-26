import React from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/ClassBox"; // Importing ClassBox component
import ClassButton from "@/app/Components/ClassButton";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

const teacherNames: string[] = Array();

async function wait(id:number){
  const teacher = await prisma.teacher.findUnique({
    where: {
      teacherId: id
    }
 });
teacherNames.push(teacher?.teacherFirstName + " " + teacher?.teacherLastName);
}

export default async function main(){
  "use server";
  const courses = await prisma.course.findMany();
  // Array of colors for class boxes
 const colors: string[] = Array();
 const links: string[] = Array();
 const labels: string[] = Array();
 courses.forEach(async function (element){
  colors.push("bg-" + element.courseColour +"-500");
  links.push("teacherDashboard/" + element.courseId);
  labels.push(element.courseName + " " + element.courseSection);
  wait(element.teacherId);
});

var grades: string[] = [
  "89%",
  "75%",
  "98%",
  "67%",
  "84%",
  "78%"
];

// Component to display class boxes
const ClassNames = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox
          key={index}
          params={{
            color: color,
            link: links[index],
            label: labels[index],
            teacher: teacherNames[index],
            grade: grades[index],
          }}
        />
      ))}
    </div>
  );
};
return (
  <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
    {/* Header with student name */}
    <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16">
      {/*studentName*/} Classes
    </h1>
    {/* Button to join a class */}
    <div className="absolute top-4 right-16">
    <ClassButton
          params={{
            link: "/JoinClass",
            label: "Join a Class"
          }}
        />
        </div>
    {/* Display class boxes */}
    <ClassNames />
  </main>
);
        }