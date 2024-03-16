import Image from "next/image";
import MenuButton from "./Components/MenuButton";
import Logo from "./Components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-9 bg-center bg-cover bg-landing h-screen flex items-center flex-col">
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-end">
        <br></br>
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
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0 lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-center">
        <Logo />
      </div>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-1 sm:grid-cols-1 gap-6">
        <MenuButton
          params={{
            text: "Enter",
            href: "/Dashboard",
          }}
        />

        <MenuButton
          params={{
            text: "Credits",
            href: "/About",
          }}
        />

        <MenuButton
          params={{
            text: "Settings",
            href: "/Settings",
          }}
        />

        <MenuButton
          params={{
            text: "Exit",
            href: "",
          }}
        />
      </div>
      <br></br>
      <br></br>
    </main>
  );
}
