'use server'
import { redirect } from 'next/navigation'
import React from 'react';
import { PrismaClient, Prisma } from '@prisma/client'
import BackButton from "@/app/Components/BackButton";
const prisma = new PrismaClient();
// Import any necessary styles here
interface Assignment {
    id: number;
    assignmentName: string | null;
    startDate: Date | null;
    dueDate: Date | null;
}

const checkParam = (assignmentId: string): boolean => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(assignmentId);
}

export default async function GradeSubmission({ params }: {
    params: { assignmentId: string }
}) {
    if (!checkParam(params.assignmentId)) {
        redirect('../../../../../Error');
    }
    const assignment = await prisma.assignment.findFirst({
        where: {
            assignmentId: Number(params.assignmentId)
        }
    });

    // Hold assignment details fetched from db
    const assignmentDetails = {
        assignmentName: assignment?.assignmentName,
        assignmentQuestion: assignment?.assignmentQuestion
    };

    // Handle grade submission
    const handleSubmit = () => {

    }

    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <BackButton
                params={{
                    link: "../"
                }}
            />
            <div className="bg-white rounded-lg p-6 md:w-[75rem] w-full mt-8">
                <h1 className="text-3xl font-bold mb-4 text-black">{assignmentDetails.assignmentName}</h1>
                <p className="text-lg mb-4 text-black">{assignmentDetails.assignmentQuestion}</p>
                <div className="mb-4">
                    {/* Assignment Submission (student essay/text answer submission) */}
                    <div className="border border-gray-300 rounded-md p-4 mt-1 w-full h-72 overflow-auto">
                        <p className="text-lg text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <form id="gradeForm">
                    <div className="mb-4">
                        {/* Grade input field */}
                        <label htmlFor="grade" className="block text-xl font-medium text-gray-700">Grade (%):</label>
                        <input
                            id="grade"
                            name="grade"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring focus:ring-amber-500"
                            placeholder="Enter grade (0%-100%)"
                        />
                    </div>
                    <div className="mb-4">
                        {/* Student number input field */}
                        <label htmlFor="studentNumber" className="block text-xl font-medium text-gray-700">Student Number:</label>
                        <input
                            id="stuNum"
                            name="stuNum"
                            type="text"
                            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring focus:ring-amber-500"
                            placeholder="Enter student number"
                        />
                    </div>
                    {/* Submission */}
                    <button
                        className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600"
                    //onClick={handleSubmit}
                    >Submit</button>
                </form>
            </div>
        </main>
    );
}