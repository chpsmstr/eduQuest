import Logo from "@/app/Components/Logo";
import BackButton from "@/app/Components/BackButton";

export default function About() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex flex-col items-center justify-center">
      <BackButton params={{ link: "../" }} />

      {/* Logo */}
      <div className="mt-8">
        <Logo />
      </div>

      {/* Credits */}
      <div className="mt-8 text-center">
        <h1 className="text-5xl mb-8">Team Members</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 text-white">
          <div className="text-3xl rounded-lg bg-blue-300 px-6 py-3">Ankkit Prakash</div>
          <div className="text-3xl rounded-lg bg-blue-300 px-6 py-3">Daniel Penner</div>
          <div className="text-3xl rounded-lg bg-blue-300 px-6 py-3">Mark Lovesey</div>
          <div className="text-3xl rounded-lg bg-blue-300 px-6 py-3">Nolan Nishikawa</div>
          <div className="text-3xl rounded-lg bg-blue-300 px-6 py-3">Rhys Smith</div>
        </div>
      </div>
      {/* Team Pixel Art */}
      <div className="mt-12">
        <img src="/pixelteam.webp" alt="Picture of a Controller" className="object-scale-down h-48 w-96" />
      </div>
      {/* Mission Statement */}
      <div className="mt-12 text-center">
        <h1 className="text-5xl mb-4">Mission Statement</h1>
        <div className="mx-auto max-w-2xl text-white">
          <p className="text-3xl rounded-lg bg-blue-300 px-6 py-3">
            EduQuest is an innovative e-learning platform created by team members for our Software Engineering Course. We hope that this platform can benefit both teachers and students alike in creating a fun learning environment.
          </p>
        </div>
      </div>

      
    </main>
  );
}