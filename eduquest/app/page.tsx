import Image from "next/image";
import MenuButton from "./Components/MenuButton";
import Logo from "./Components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-9 bg-center bg-cover bg-landing h-screen flex items-center flex-col">
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-end">
        <br></br>
      


        <MenuButton params={{ text: "Register", href: "/Register" }} />
        <MenuButton params={{ text: "Login", href: "/Login" }} />
      </div>
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0 lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-center">
      <img
        src="/eduQuestlogoresized2.webp"
        alt="Eduquest logo"
        className="h-100 w-100 xs:h-80 xs:w-80 lg:h-100 lg:w-100 flex items-center flex-col"
      ></img>
      </div>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-1 sm:grid-cols-1 gap-6">
        <Link href="/Dashboard">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125 rounded">Enter</h1>
        </Link>
        <Link href="/About">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125">Credits</h1>
        </Link>
        <Link href="/Settings">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125">Settings</h1>
        </Link>
        <Link href="">
          <h1 className="text-4xl lg:text-4xl lg:mx-4 sm:mx-2 transition duration-500 hover:scale-125">Exit</h1>
        </Link>
      </div>
      <br></br><br></br>
    </main>
  );
}