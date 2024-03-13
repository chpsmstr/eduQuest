import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-9 bg-cover  bg-center bg-landing h-screen flex items-center flex-col">
      <img
        src="/eduQuestlogoresized2.webp"
        alt="Eduquest logo"
        className="h-100 w-100 xs:h-80 xs:w-80 lg:h-100 lg:w-100 "
      ></img>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-2 sm:grid-cols-2 gap-5"> 
      <Link href="/Dashboard">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125 rounded">Enter</h1>
        </Link> 
        
        <Link href="/About">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125">About</h1>
        </Link>
      </div>
      <br></br><br></br>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-2 lg:grid-cols-2 gap-6"> 
      <Link href="/Register">
      <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-6 rounded">
          Sign Up
          </button>
        </Link>
        <Link href="/Login">
        <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-7 rounded">
          Log In
          </button>
        </Link>
        </div>
    </main>
  );
}
