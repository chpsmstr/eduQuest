import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-9 bg-cover  bg-center bg-landing h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-100 w-100 xs:h-80 xs:w-80 lg:h-100 lg:w-100"
      ></img>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-3 sm:grid-cols-3">
        <Link href="">
          <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2">Educator</h1>
        </Link>
        <Link href="/Register">
          <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2">Register</h1>
        </Link>
        <Link href="/Login">
          <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2">Start</h1>
        </Link>
      </div>
    </main>
  );
}
