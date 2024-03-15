import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const session = await getServerSession(options);

  if (session?.user.role !== "teacher") {
    return <h1 className="text-5xl">Access Denied</h1>;
  }

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/UserPages/Teacher/");
  }
  return <div>{children}</div>;
    
  }