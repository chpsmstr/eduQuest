import Image from "next/image";
import Link from "next/link";

export default function TeacherRegistration() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
      />
      <div className="grid text-center text-left text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">
          Create an Account
      </div>
      <form>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">First Name:</div>
        <div>
          <input type="text" id = "firstName" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Last Name:</div>
        <div>
          <input type="text" id= "lastName" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Username:</div>
        <div>
          <input type="text" id = "username" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Email:</div>
        <div>
          <input type="email" id = "email" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Faculty ID:</div>
        <div>
          <input type="text" id = "facultyId" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Password:</div>
        <div>
          <input type="password" id = "firstPassword" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Confirm Password:</div>
        <div>
          <input type="password" id = "confirmPassword" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="col-span-2 text-center mt-4">
          <Link href = ""> 
            <button className="bg-orange-500 text-white px-12 py-6 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-4" style={{borderWidth: "4px"}}>Submit</button>
          </Link>
          </div>
      </div>
      </form>
      <Link href="/">
        <h1 className="text-center text-2xl lg:text-xl lg:mx-4 sm:mx-2 mt-4 mb-4">Back Home</h1>
      </Link>
    </main>
  );
}

