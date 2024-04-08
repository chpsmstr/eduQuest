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
  const role = await cookieStore.get('role')?.value;
  const id = await cookieStore.get('id')?.value;
  
if (role !== "student") {
  return <h1 className="text-5xl">Access Denied</h1>;
}

if (!id) {
  // redirect("/api/auth/signin?callbackUrl=/UserPages/Admin/");
  <div>
    Not logged in
  </div>
}
return <div>{children}</div>;
  
}