import Image from "next/image";
import Link from "next/link";

export default function CreateClass() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-48 w-48 xs:h-36 xs:w-36 lg:h-48 lg:w-48"
      />
      <div className = "text-center text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">Create a Class</div>
      <form>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Name:</div>
        <div>
          <input type="text" id = "className" placeholder = "ex: Math 100"className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Section:</div>
        <div>
          <input type="text" id = "classSection" placeholder = "ex: 101" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Class Description:</div>
        <div>
        <div>
        <textarea id="classDescription" placeholder = "ex: Derivatives of elementary functions and limits." className="w-full border rounded px-4 py-2 text-black" style={{ height: '8rem' }} />
        </div>
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Unique Class ID:</div>
        <div>
          <input type="text" id = "classId" placeholder = "ex: 123456" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        
        <div className="col-span-2 text-center mt-4">
          <Link href = "">
            <button className="bg-orange-500 text-white px-12 py-6 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-4" style={{borderWidth: "4px"}}>Create Class</button>
          </Link>
        </div>
      </div>
      </form>
    </main>
  );
}