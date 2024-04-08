import React from "react";
// import { getServerSession } from "next-auth/next";
// import { redirect } from "next/navigation";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { cookies } from 'next/headers';

export default async function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    // const session = await getServerSession(options);
    const cookieStore = cookies()
    const role = cookieStore.get('role')?.value;
    const id = cookieStore.get('id')?.value;
  if (role !== "teacher") {
    return <h1 className="text-5xl">Access Denied</h1>;
  }

  if (!id) {
    // redirect("/api/auth/signin?callbackUrl=/UserPages/Teacher/");
    <div>
    Not logged in
      </div>
  }
  return <div>{children}</div>;
    
  }