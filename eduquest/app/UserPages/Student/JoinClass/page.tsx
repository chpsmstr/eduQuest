import Image from "next/image";
import Link from "next/link";
import BackButton from "@/app/Components/BackButton";

export default function JoinClass() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <BackButton
        params={{
          link: "./studentDashboard",
        }}
      />
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
      />
      <div className="text-center text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">
        Join a Class
      </div>
      <form>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">
            Class Join Code:
          </div>
          <div>
            <input
              type="text"
              id="classId"
              placeholder="ex: ABCD1234"
              className="w-full border rounded px-2 py-1 text-black"
            />
          </div>

          <div className="col-span-2 text-center mt-4">
            <Link href="">
              <button
                className="bg-orange-500 text-white px-12 py-6 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-4"
                style={{ borderWidth: "4px" }}
              >
                Join Class
              </button>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
