import Image from "next/image";
import MenuButton from "./Components/MenuButton";
import Logo from "./Components/Logo";
import Link from "next/link";
import SolidColorButton from "./Components/SolidColorButton";

export default function Home() {
  return (
    <main className="px-9 bg-center bg-cover bg-landing h-screen flex items-center flex-col">
        <br></br>
 <div className="absolute top-0 right-0 mt-6 mr-6 flex flex-col gap-2">
        <SolidColorButton
          params={{
            text: "Sign Up",
            href: "/Register",
            color: "bg-gray-500",
            hoverColor: "bg-gray-700",
            length: "px-7"
          }}
        />
        <SolidColorButton
          params={{
            text: "Log In",
            href: "/Login",
            color: "bg-gray-500",
            hoverColor: "bg-gray-700",
            length: "px-8"
          }}
        /></div>
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0 lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-center pt-5">
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
            href: "/userSettings",
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
