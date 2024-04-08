import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { cookies } from 'next/headers';

export default async function page() {
  const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }
  const cookieStore =  cookies();
  const role = await cookieStore.get('role')?.value;
  console.log(role);
  return <div>STUDENT PAGE PLACEHOLDER</div>;
}
