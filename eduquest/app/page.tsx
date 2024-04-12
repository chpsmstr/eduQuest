import MenuButton from "./Components/MenuButton";
import Logo from "./Components/Logo";
import Link from "next/link";

import { cookies } from "next/headers";

async function logout() {
  "use server";

  cookies().set("id", "");
  cookies().set("role", "");
}

export default async function Home() {
  "use client";
  return (
    <main className="px-9 bg-center bg-cover bg-landing h-screen flex items-center flex-col">
      <br />
      <div className="absolute top-0 right-0 mt-6 mr-6 flex flex-col gap-2" />
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0 lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-center pt-5">
        <Logo />
      </div>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-1 sm:grid-cols-1 gap-6">
        <MenuButton
          params={{
            text: "Enter",
            href: "/Login",
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
        <form action={logout}>
          <button type="submit">
            <MenuButton
              params={{
                text: "Logout",
                href: "/",
              }}
            />
          </button>
        </form>
      </div>
      <br />
      <br />
    </main>
  );
}
