"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../Components/Logo";
import Link from 'next/link';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
}

const SettingsPage: React.FC<{ user: User }> = ({ user }) => {
  const [editedUser, setEditedUser] = useState<User>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col text-black">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <div className="w-64 h-64">
          <Logo />
        </div>
        <h1 className="text-4xl text-center mb-8">Settings</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="firstName">First Name:</label>
            <input id="firstName" name="firstName" type="text" value={editedUser.firstName} onChange={handleChange} className="border rounded px-3 py-2 text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="lastName">Last Name:</label>
            <input id="lastName" name="lastName" type="text" value={editedUser.lastName} onChange={handleChange} className="border rounded px-3 py-2 text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" value={editedUser.email} onChange={handleChange} className="border rounded px-3 py-2 text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="studentId">Student ID:</label>
            <input id="studentId" name="studentId" type="text" value={editedUser.studentId} onChange={handleChange} className="border rounded px-3 py-2 text-black" />
          </div>
        </form>
        <div>
          <ChangePasswordButton />
        </div>
        <div>
          <Link href="">
            <button className="bg-blue-500 border-blue-600 hover:border-blue-700 justify-center hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-4" style={{ borderWidth: "4px" }}>
              Update Information
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

const ChangePasswordButton: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link href="userSettings/changePassword">
        <button className="bg-orange-500 justify-center hover:border-orange-700 border-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-2 mb-2" style={{ borderWidth: "4px" }}>
          Change Password
        </button>
      </Link>
    </div>
  );
};

const currentUser: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  studentId: '1234567890'
};

const App: React.FC = () => {
  return (
    <div>
      <SettingsPage user={currentUser} />
    </div>
  );
};

export default App;
