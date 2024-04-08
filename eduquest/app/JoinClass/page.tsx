"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BackButton from '@/app/Components/BackButton';

export default function JoinClass() {
  const [classCode, setClassCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Regular expression to validate the class code
    const regex = /^[A-Za-z0-9]{8}$/;
    if (regex.test(classCode)) {
      // Valid class code, proceed to join class
      setErrorMessage('');
      
      console.log('Joining class with code:', classCode);
    } else {
      // Invalid class code, display error message
      setErrorMessage('Please enter a valid class code (8 characters alphanumeric)');
    }
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <BackButton
        params={{
          link: "Dashboard/studentDashboard"
        }}
      />
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
      />
      <div className="text-center text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">Join a Class</div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Join Code:</div>
          <div>
            <input
              type="text"
              id="classId"
              placeholder="ex: ABCD1234"
              value={classCode}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1 text-black"
            />
          </div>
          <div className="col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-orange-500 text-white px-12 py-6 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-4"
              style={{ borderWidth: "4px" }}
            >
              Join Class
            </button>
          </div>
          {errorMessage && (
            <div className="col-span-2 text-center text-red-600">{errorMessage}</div>
          )}
        </div>
      </form>
    </main>
  );
}
