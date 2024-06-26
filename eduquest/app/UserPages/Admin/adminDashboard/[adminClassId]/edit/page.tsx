"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/app/Components/Logo";
import BackButton from "@/app/Components/BackButton";

const generateRandomString = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default function editAdminClass({ params }: { params: { adminClassId: string } }) {
  const [classCode, setClassCode] = useState('');

  const handleGenerateCode = () => {
    const newCode = generateRandomString();
    setClassCode(newCode);
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col text-black">
      <BackButton
      params={{
        link: "../"
      }}
    />
      <div className="w-48 h-48">
        <Logo/>
      </div>
      <div className="text-center text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">Edit {params.adminClassId} Information</div>
      <form>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Name:</div>
          <div>
            <input type="text" id="className" placeholder="ex: Math 100" className="w-full border rounded px-2 py-1 text-black" />
          </div>
          <div className="text-left text-3xl lg:text-2xl text-black lg:mx-4 sm:mx-2">Teacher Id:</div>
          <div>
            <input type="text" id="teacherId" placeholder="ex: John Doe" className="w-full border rounded px-2 py-1 text-black" />
          </div>
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 text-black sm:mx-2">Class Colour:</div>
          <div>
            <select id="classColour" className="w-full border rounded px-2 py-1 text-black">
              <option value="">Select a colour</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="cyan">Cyan</option>
              <option value="rose">Rose</option>
              <option value="indigo">Indigo</option>
            </select>
          </div>
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Section:</div>
          <div>
            <input type="text" id="classSection" placeholder="ex: 101" className="w-full border rounded px-2 py-1 text-black" />
          </div>
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Description:</div>
          <div>
            <textarea id="classDescription" placeholder="ex: Derivatives of elementary functions and limits." className="w-full border rounded px-4 py-2 text-black" style={{ height: '8rem' }} />
          </div>
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Unique Class Code:</div>
          <div>
            <input type="text" id="classId" value={classCode} readOnly placeholder="ex: ABCD1234" className="w-full border rounded px-2 py-1 text-black" />
          </div>
          <div className="text-center text-xl lg:text-l lg:mx-4 sm:mx-2 hover:text-blue-600">
            <button type="button" onClick={handleGenerateCode}>Generate Code</button>
          </div>
          <div className="col-span-2 text-center mt-4">
            <Link href="">
              <button className="bg-orange-500 text-white px-8 py-4 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700" style={{ borderWidth: "4px" }}>Update Information</button>
            </Link>
          </div>
        </div>
      </form>
      {/* Spacing */}
      <div style={{ marginBottom: '24px'}}>
</div>
    </main>
  );
}
