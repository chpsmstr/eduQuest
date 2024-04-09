import React from "react";
import Link from "next/link";
import Logo from "@/app/Components/Logo";
import ClassBox from "@/app/Components/ClassBox"; // Importing ClassBox component
import ClassButton from "@/app/Components/ClassButton";
import HomeButton from "@/app/Components/HomeButton";
import BackButton from "@/app/Components/BackButton";
import { cookies } from 'next/headers';
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();


const teacherNames: string[] = Array();
const cookieStore = cookies();
const id = cookieStore.get('id')?.value;

export default async function main(){
  "use server";
  const student = await prisma.student.findFirstOrThrow({
      where:{
        studentId: Number(id)
      }
  });
  const enrolled = await prisma.enrolled.findMany({
    where:{
      studentId: Number(id)
    }
  });
  const courses = await prisma.course.findMany();
  const teacher = await prisma.teacher.findMany();
  const doesAssignments = await prisma.doesAssignment.findMany({
    where:{
      studentId: Number(id)
    }
  });
  const doesQuizzes = await prisma.doesQuiz.findMany({
    where:{
      studentId: Number(id)
    }
  });
  const assignments = await prisma.assignment.findMany();
  const quizzes = await prisma.quiz.findMany();
  // Array of colors for class boxes
 const colors: string[] = Array();
 const links: string[] = Array();
 const labels: string[] = Array();
 const grades: string[] = Array();
 courses.forEach(async function (element){
  let sum = 0;
  let count = 0;
  if(enrolled.some((e)=>e.courseId == element.courseId)){
    doesAssignments.forEach(does => {
      assignments.forEach(assignemnt=>{
        if(does.assignmentId == assignemnt.assignmentId){
          if(assignemnt.classId == element.courseId){
            sum+=Number(assignemnt.worth) * Number(does.assignmentGrade);
            count+=Number(assignemnt.worth);
          }
        }
      });
    });
    doesQuizzes.forEach(does => {
      quizzes.forEach(quiz=>{
        if(does.quizId == quiz.quizId){
          if(quiz.classId == element.courseId){
            sum+=Number(quiz.worth) * Number(does.quizGrade);
            count+=Number(quiz.worth);
          }
        }
      });
    });
  let average = Math.round((sum/count));
  if(Number.isNaN(average)){
    grades.push(average+"");
  }
  else{
  grades.push(average+"%");
  }
  colors.push("bg-" + element.courseColour +"-500");
  links.push("studentDashboard/" + element.courseId);
  labels.push(element.courseName + " " + element.courseSection);
  teacher.forEach(e => {
    if(e.teacherId === element.teacherId){
      teacherNames.push(e.teacherFirstName + " " + e.teacherLastName);
    }
  });
}
});

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
    <HomeButton
      params={{
        link: "../../../",
      }}
    />
    {/* Header with student name */}
    <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16 text-black">
      {student.studentFirstName}'s Classes
    </h1>
    {/* Button to join a class */}
    <div className="absolute top-4 right-16">
    <ClassButton
          params={{
            link: "./JoinClass",
            label: "Join a Class"
          }}
        />
        </div>
    {/* Display class boxes */}
    <ClassNames />
  </main>
);
        }