"use client";
import React, { useState, useEffect } from 'react';
import BackButton from "@/app/Components/BackButton";
import Link from 'next/link';

const courses: { [key: string]: string } = {
  "Math100": "bg-red-500",
  "Chemistry111": "bg-blue-500",
  "Physics112": "bg-green-500",
  "Biology121": "bg-indigo-500",
  "Comp-Sci122": "bg-purple-500",
  "English112": "bg-pink-500",
};

const Assignment: React.FC<{ params: { teacherClassId: string } }> = ({ params }) => {
  // State variables for assignment details
  const [dueDate, setDueDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [assignmentName, setAssignmentName] = useState<string>('');
  const [detailInputType, setDetailInputType] = useState<'file' | 'text'>('file');

  // Effect to set default start and due dates
  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set to start tomorrow
    today.setUTCHours(0,0,0,0); // Set to midnight for start date
    const todayString = today.toISOString().slice(0, -1); // Remove the 'Z' at the end 
    setStartDate(todayString); // Set string

    const oneWeekLater = new Date();
    oneWeekLater.setDate(oneWeekLater.getDate() + 7);
    oneWeekLater.setUTCHours(23, 59, 0, 0); // Set time to 11:59 pm in UTC

    // Format the date in ISO format compatible with datetime-local input
    const weekString = oneWeekLater.toISOString().slice(0, -1); // Remove the 'Z' at the end

    // Set the due date state to one week later at midnight in UTC
    setDueDate(weekString);
  }, []);
  let bgColor = courses[params.teacherClassId];

  // Handlers for input changes
  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleAssignmentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignmentName(e.target.value);
  };

  const handleDetailInputTypeChange = (inputType: 'file' | 'text') => {
    setDetailInputType(inputType);
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col gap-4 text-black">
      <BackButton
      params={{
        link: "./"
      }}
    />
      {/* Header */}
      <br></br>
      <div className={`${bgColor} w-[75rem] h-36 rounded-lg px-6 relative`}>
      <h1 className="text-5xl text-center text-black" style={{ marginTop: '48px' }}>Create an Assignment for {params.teacherClassId}</h1>
      </div>           {/* Assignment Name Input */}
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4' htmlFor="assignment-name">Assignment Name: </label>
        <input id="assignment-name" className='text-2xl text-black rounded' type="text" value={assignmentName} onChange={handleAssignmentNameChange} placeholder="Enter assignment name" />
      </div>
      {/* Start Date Input */}
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4' htmlFor="start-date">Set Start Date: </label>
        <input id="start-date" className='text-2xl text-black' type="datetime-local" value={startDate} onChange={handleStartDateChange} />
      </div>
      {/* Due Date Input */}
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4' htmlFor="due-date">Set Due Date: </label>
        <input id="due-date" className='text-2xl text-black' type="datetime-local" value={dueDate} onChange={handleDueDateChange} />
      </div>
      {/* Assignment Details Input */}
      <div className='text-center text-black' style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4'>Assignment Details: </label>
        <div>
          <input
            type="radio"
            id="file"
            name="detailInputType"
            value="file"
            checked={detailInputType === 'file'}
            onChange={() => handleDetailInputTypeChange('file')}
          />
          <label htmlFor="file" className="text-2xl ml-2">Upload File</label>
        </div>
        <div>
          <input
            type="radio"
            id="text"
            name="detailInputType"
            value="text"
            checked={detailInputType === 'text'}
            onChange={() => handleDetailInputTypeChange('text')}
          />
          <label htmlFor="text" className="text-2xl ml-2">Input Text</label>
        </div>
      </div>
      {/* Conditional rendering based on detailInputType */}
      {detailInputType === 'text' && (
        <div style={{ marginTop: '36px' }} className="mx-center">
          <textarea className="text-black text-2xl rounded-lg p-2" rows={8} cols={50} placeholder="Enter assignment details..." />
        </div>
      )}
      {detailInputType === 'file' && (
        <div style={{ marginTop: '36px' }}>
          <label htmlFor="file-upload" className="bg-blue-500 text-white px-10 py-5 rounded border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-700 mb-4 mt-4 cursor-pointer" style={{ borderWidth: "4px" }}>
            Choose File
            <input id="file-upload" className="hidden" type="file"/>
          </label>
        </div>
      )}
      {/* Marks Input */}
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4' htmlFor="marks">Marks Out Of: </label>
        <input id="marks" className='text-2xl text-black rounded px-2 py-1' type="text" placeholder="Enter marks" />
      </div>
      {/* Submit Button */}
      <Link href="">
        <button className="bg-orange-500 text-white px-10 py-5 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-6" style={{ borderWidth: "4px" }}>Submit</button>
      </Link>
      {/* Bottom margin */}
      <div style={{ marginBottom: '24px' }}></div>
    </main>
  );
};

export default Assignment;
