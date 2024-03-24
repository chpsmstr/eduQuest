"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
  const [numQuestions, setNumQuestions] = useState<number>(1);
  const [questions, setQuestions] = useState<string[]>(Array(numQuestions).fill(''));
  const [options, setOptions] = useState<string[][]>(Array(numQuestions).fill(['', '', '', '']));
  const [correctAnswers, setCorrectAnswers] = useState<number[]>(Array(numQuestions).fill(0));
  const [dueDate, setDueDate] = useState<string>('');
  const [quizName, setQuizName] = useState<string>('');

  // Set due date one week later from the current date
  useEffect(() => {
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
    const num = parseInt(e.target.value);
    setNumQuestions(num);
    setQuestions(Array(num).fill(''));
    setOptions(Array(num).fill(['', '', '', '']));
    setCorrectAnswers(Array(num).fill(0));
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

  const handleCorrectAnswerChange = (questionIndex: number, optionIndex: number) => {
    const newCorrectAnswers = [...correctAnswers];
    newCorrectAnswers[questionIndex] = optionIndex;
    setCorrectAnswers(newCorrectAnswers);
  };

  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleQuizNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizName(e.target.value);
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col gap-4">
      {/* Quiz header with background color */}
      <div className={`${bgColor} w-[75rem] h-36 rounded-lg px-6 relative`}>
        <h1 className="text-5xl text-center text-white" style={{ marginTop: '48px' }}>Create a Quiz for {params.teacherClassId}</h1>
      </div>

      {/* Quiz details form */}
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4'>Quiz Name: </label>
        <input className='text-2xl text-black rounded' type="text" value={quizName} onChange={handleQuizNameChange} />
      </div>
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl text-black mb-4 mt-4'>Set Due Date: </label>
        <input className='text-2xl text-black' type="datetime-local" value={dueDate} onChange={handleDueDateChange} />
      </div>
      <div style={{ marginTop: '36px' }}>
        <label className='text-3xl' style={{ marginTop: '36px' }}>Select number of questions: </label>
        <select className="text-2xl" value={numQuestions} onChange={handleNumQuestionsChange}>
          {Array.from({ length: 10 }).map((_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
          ))}
        </select>

        {/* Input fields for questions, options, and correct answers */}
        {Array.from({ length: numQuestions }).map((_, index) => (
          <div key={index} className="grid gap-2">
            <label className='text-3xl mt-8 mb-4'>Question {index + 1}:</label>
            <label className='text-2xl'>Enter your question:</label>
            <input className="rounded" type="text" value={questions[index]} onChange={(e) => handleQuestionChange(index, e)} />

            <label className='mt-4 text-xl'> Please enter options and select a correct answer</label>
            {options[index].map((option, optionIndex) => (
              <div key={optionIndex} className="flex gap-2 items-center">
                <label>{String.fromCharCode(65 + optionIndex)}:</label>
                <input className="rounded" type="text" value={option} onChange={(e) => handleOptionChange(index, optionIndex, e)} />
                <label>
                  <input
                    type="radio"
                    name={`correct-answer-${index}`}
                    value={optionIndex}
                    checked={correctAnswers[index] === optionIndex}
                    onChange={() => handleCorrectAnswerChange(index, optionIndex)}
                  />
                  Correct
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Submit button */}
      <Link href="">
        <button className="bg-orange-500 text-white px-10 py-5 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-6" style={{ borderWidth: "4px" }}>Submit</button>
      </Link>

      {/* Spacing */}
      <div style={{ marginBottom: '24px'}}>
</div>

    </main>
  );
};

export default Quiz;

