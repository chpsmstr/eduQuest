import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <main className="px-9 bg-gradient-to-b from-amber-100 to-amber-500 h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-100 w-100 xs:h-80 xs:w-80 lg:h-100 lg:w-100"
      ></img>
      <div className="text-center text-3xl lg:text-3xl lg:mx-4 sm:mx-2">Are you a?</div>
      <div className="grid text-center space-y-4 sm:space-y-0 lg:space-y-0  lg:grid-cols-2 sm:grid-cols-2 mt-6">
        <Link href="/TeacherRegistration">
          <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2" style={{backgroundColor: "red", padding: "12px"}}>Teacher</h1>
        </Link>
        <Link href="/StudentRegistration">
          <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2" style={{backgroundColor: "blue", padding: "12px"}}>Student</h1>
        </Link>
        
      </div>
      
      <Link href="/Login">
          <h1 className="text-center text-2xl lg:text-2xl lg:mx-4 sm:mx-2 mt-6">Already have an account</h1>
        </Link>
    </main>
  );
}
