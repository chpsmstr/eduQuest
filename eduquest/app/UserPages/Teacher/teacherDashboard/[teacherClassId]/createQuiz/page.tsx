"use client";
import React, { useState, useEffect } from 'react';
import BackButton from "@/app/Components/BackButton";
import Link from 'next/link';
import { createQuiz } from './createQuizFunction/createQuiz';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

// Define background colors for different courses
const courses: { [key: string]: string } = {
  "Math100": "bg-red-500",
  "Chemistry111": "bg-blue-500",
  "Physics112": "bg-green-500",
  "Biology121": "bg-indigo-500",
  "Comp-Sci122": "bg-purple-500",
  "English112": "bg-pink-500",
}

const Quiz: React.FC<{ params: { teacherClassId: string } }> = ({ params }) => {
  // State variables for managing quiz data
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [questions, setQuestions] = useState<string[]>(Array(numQuestions).fill(''));
  const [options, setOptions] = useState<string[][]>(Array(numQuestions).fill(['', '', '', '']));
  const [correctAnswers, setCorrectAnswers] = useState<number[]>(Array(numQuestions).fill(0));
  const [dueDate, setDueDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [quizName, setQuizName] = useState<string>('');
   // State variable for question worth
  const [questionWorth, setQuestionWorth] = useState<number[]>(Array(numQuestions).fill(1));

  // Set due date one week later from the current date
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
    const isoString = oneWeekLater.toISOString().slice(0, -1); // Remove the 'Z' at the end

    // Set the due date state to one week later at 11:59 pm in UTC
    setDueDate(isoString);
  }, []); // Empty dependency array to run the effect only once on mount

  // Background color based on selected course
  let bgColor = courses[params.teacherClassId];

  // Event handlers for changing number of questions, question text, options, correct answers, due date, and quiz name

  const handleNumQuestionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let num = parseInt(e.target.value);
    // Ensure the number is between 5 and 10
    num = Math.max(5, Math.min(10, num));
    setNumQuestions(num);
    setQuestions(Array(num).fill(''));
    setOptions(Array(num).fill(['', '', '', '']));
    setCorrectAnswers(Array(num).fill(0));
    setQuestionWorth(Array(num).fill(1));
  };

  const handleQuestionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex: number, optionIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = [...options];
    newOptions[questionIndex] = newOptions[questionIndex].map((option, idx) =>
      idx === optionIndex ? e.target.value : option
    );
    setOptions(newOptions);
  };
 

// Event handler for changing question worth
const handleQuestionWorthChange = (index: number, e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuestionWorth = [...questionWorth];
    newQuestionWorth[index] = parseInt(e.target.value);
    setQuestionWorth(newQuestionWorth);
};

  const handleCorrectAnswerChange = (questionIndex: number, optionIndex: number) => {
    const newCorrectAnswers = [...correctAnswers];
    newCorrectAnswers[questionIndex] = optionIndex;
    setCorrectAnswers(newCorrectAnswers);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleQuizNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizName(e.target.value);
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col gap-4 text-black">
       <BackButton
      params={{
        link: "./"
      }}
    />
      {/* Quiz header with background color */}
      <br></br>
      <div className={`${bgColor} w-[75rem] h-36 rounded-lg px-6 relative`}>
      <h1 className="text-5xl text-center text-black" style={{ marginTop: '48px' }}>Create a Quiz for {params.teacherClassId}</h1>
      </div> 

      {/* Quiz details form */}
      <form action={createQuiz} method="POST">
      <input name="istest" id="istest" type="hidden" value="nottest"></input>
      <input name="classId" id="classId" type="hidden" value={params.teacherClassId}></input>
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4'>Quiz Name: </label>
        <input name="quizName" id="quizName" className='text-2xl text-black rounded' type="text" value={quizName} onChange={handleQuizNameChange} />
      </div>
       {/* Start Date Input */}
       <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4' htmlFor="start-date">Set Start Date: </label>
        <input name="startDate" id="start-date" className='text-2xl text-black' type="datetime-local" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4'>Set Due Date: </label>
        <input name="dueDate" id="dueDate" className='text-2xl text-black' type="datetime-local" value={dueDate} onChange={handleDueDateChange} />
      </div>
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black' style={{ marginTop: '36px' }}>Select number of questions: </label>
        <select name="worth" id="worth" className="text-2xl text-black" value={numQuestions} onChange={handleNumQuestionsChange}>
         {Array.from({ length: 6 }, (_, index) => (
          <option key={index + 5} value={index + 5}>{index + 5}</option>
          ))}
        </select>

        {/* Input fields for questions, options, and correct answers */}
        {Array.from({ length: numQuestions }).map((_, index) => (
          <div key={index} className="grid col-2 gap-2">
          <label className='text-3xl mt-8 mb-4 text-black'>Question {index + 1}:</label>
          <label className='text-2xl text-black'>Enter your question:</label>
          <input name={"questionContent" + index} id={"questionContent" + index} className="rounded text-black" type="text" value={questions[index]} onChange={(e) => handleQuestionChange(index, e)} />
      
          <label className='mt-4 text-xl text-black'> Please enter options and select a correct answer</label>
          {options[index].map((option, optionIndex) => (
              <div key={optionIndex} className="flex gap-2 items-center text-black">
                  <label className = 'text-black'>{String.fromCharCode(65 + optionIndex)}:</label>
                  <input name={"answer" + String.fromCharCode(65 + optionIndex) + index} id={"" + String.fromCharCode(65 + optionIndex) + index} className="rounded text-black" type="text" value={option} onChange={(e) => handleOptionChange(index, optionIndex, e)} />
                  <label>
                      <input
                          className = 'text-black'
                          type="radio"
                          name={`correct-answer-${index}`}
                          value={option}
                          checked={correctAnswers[index] === optionIndex}
                          onChange={() => handleCorrectAnswerChange(index, optionIndex)}
                      />
                      Correct
                  </label>
              </div>
          ))}
      
          {/* Dropdown selector for question worth */}
          {/* Dropdown selector for question worth */}
    <div className='grid grid-cols-2 gap-2 px-2 py-1' style={{ marginTop: '20px' }}>
      <label className='text-xl text-black'>Question Worth:</label>
      <select id="questionWorth" className="text-black rounded px-1 py-1" value={questionWorth[index]} onChange={(e) => handleQuestionWorthChange(index, e)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
      </div>
      
        ))}
      </div>

      {/* Submit button */}
      
        <button type="submit" className="bg-orange-500 text-white px-10 py-5 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-6" style={{ borderWidth: "4px" }}>Submit</button>
      
      </form>

      {/* Spacing */}
      <div style={{ marginBottom: '24px'}}>
</div>

    </main>
  );
};

export default Quiz;

