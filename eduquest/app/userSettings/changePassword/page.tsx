"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from "@/app/Components/BackButton";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    match: false
  });

  const handleChangePassword = () => {
    // Regex for password: at least 8 characters, at least one uppercase letter, at least one lowercase letter, and at least one number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      //setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number");
      updatePasswordRequirements(password, rePassword);
      return;
    }

    if (password !== rePassword) {
      setError("Passwords do not match");
      updatePasswordRequirements(password, rePassword);
      return;
    }

    // Passwords passed validation, proceed with password update logic
    console.log("Passwords are valid:", password);
  };

  const updatePasswordRequirements = (password: string, rePassword: string ) => {
    setPasswordRequirements({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      match: password === rePassword
    });
  };

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col text-black">
      <BackButton
        params={{
          link: "/userSettings"
        }}
      />
      <div className="container mx-auto p-4 flex flex-col items-center">
        <Image
          src="/eduQuestpxArtLogo.png"
          alt="Eduquest logo"
          className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
          width={300}
          height={300}
        />
        <h1 className="text-4xl text-center mb-8">Reset Password</h1>
        <form className="text-center">
  <div className="mb-4">
    <div className="inline-block text-left">
      <label className="block text-gray-800 font-bold mb-2" htmlFor="password">Enter New Password:</label>
      <input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); updatePasswordRequirements(e.target.value, rePassword); }} className="border rounded px-3 py-2 text-black" />
    </div>
  </div>
  <div className="mb-4">
    <div className="inline-block text-left">
      <label className="block text-gray-800 font-bold mb-2" htmlFor="repassword">Re-enter Password:</label>
      <input id="repassword" type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value); updatePasswordRequirements(password, e.target.value); }} className="border rounded px-3 py-2 text-black" />
    </div>
  </div>
  <div className="text-gray-800 mt-2 inline-blocm text-left">
  <ul>
  <li>
    {passwordRequirements.length ? (
      <span className="checkmark-green">&#10003;</span>
    ) : (
      <span className="crossmark-red">&#10007;</span>
    )}
    At least 8 characters
  </li>
  <li>
    {passwordRequirements.uppercase ? (
      <span className="checkmark-green">&#10003;</span>
    ) : (
      <span className="crossmark-red">&#10007;</span>
    )}
    At least one uppercase letter
  </li>
  <li>
    {passwordRequirements.lowercase ? (
      <span className="checkmark-green">&#10003;</span>
    ) : (
      <span className="crossmark-red">&#10007;</span>
    )}
    At least one lowercase letter
  </li>
  <li>
    {passwordRequirements.number ? (
      <span className="checkmark-green">&#10003;</span>
    ) : (
      <span className="crossmark-red">&#10007;</span>
    )}
    At least one number
  </li>
  <li>
    {passwordRequirements.match ? (
      <span className="checkmark-green">&#10003;</span>
    ) : (
      <span className="crossmark-red">&#10007;</span>
    )}
    Passwords match
  </li>
</ul>




  </div>
  {error && <p className="text-red-500 mb-4">{error}</p>}
  <div className="col-span-2 mt-4">
    <button onClick={handleChangePassword} className="bg-blue-500 border-blue-600 hover:border-blue-700 justify-center hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-4" style={{ borderWidth: "4px" }}>Update Password</button>
  </div>
</form>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
