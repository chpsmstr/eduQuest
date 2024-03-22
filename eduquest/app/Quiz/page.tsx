import Image from "next/image";
import Link from "next/link";
import Logo from "../Components/Logo";

export default function Quiz({ params }: {
  params: { quizId: string }
})  {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <Logo />
    </main>
  );
}
