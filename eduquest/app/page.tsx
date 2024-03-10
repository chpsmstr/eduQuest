import Image from "next/image";
import MenuButton from "./Components/MenuButton";
import Logo from "./Components/Logo";

export default function Home() {
  return (
    <main className="px-9 bg-cover  bg-center bg-landing h-screen flex items-center flex-col">
      <Logo />
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-3 sm:grid-cols-3">
        <MenuButton params={{ text: "Educator", href: "" }} />
        <MenuButton params={{ text: "Register", href: "/Register" }} />
        <MenuButton params={{ text: "Login", href: "/Login" }} />
      </div>
    </main>
  );
}
