import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ResetPasswordPage = () => {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col text-black">
      <div className="container mx-auto p-4 flex flex-col items-center">
        <Image
          src="/eduQuestpxArtLogo.png"
          alt="Eduquest logo"
          className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
          width = {300}
          height = {300}
        />
        <h1 className="text-4xl text-center mb-8">Reset Password</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="password">Enter New Password:</label>
            <input id="password" type="password" className="border rounded px-3 py-2 text-black" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="repassword">Re-enter Password:</label>
            <input id="repassword" type="password" className="border rounded px-3 py-2 text-black" />
          </div>
          <div className="col-span-2 text-center mt-4">
            <Link href="">
              <button className="bg-blue-500 border-blue-600 hover:border-blue-700 justify-center hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mt-4 " style={{ borderWidth: "4px" }}>Update Password</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
