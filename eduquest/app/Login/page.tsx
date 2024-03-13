import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-96 w-96 xs:h-80 xs:w-80 lg:h-96 lg:w-96"
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Username:</div>
        <div>
          <input type="text" className="w-full border rounded px-2 py-1" />
        </div>
        <div className="text-center text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Password:</div>
        <div>
          <input type="password" className="w-full border rounded px-2 py-1" />
        </div>
        <div className="col-span-2 text-center mt-2">
          <button className="bg-orange-500 text-white px-8 py-4 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700" style={{borderWidth: "4px"}}>Begin</button>
        </div>
      </div>
      <Link href="/Register">
        <h1 className="text-center text-xl lg:text-xl lg:mx-4 sm:mx-2 mt-6">New to eduQuest. Click Here</h1>
      </Link>
    </main>
  );
}
