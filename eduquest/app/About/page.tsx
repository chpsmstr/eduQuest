import Logo from "@/app/Components/Logo";
export default function Settings() {
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <div className="grid text-right space-y-4 sm:space-y-0 lg:space-y-0 lg:grid-cols-1 lg:grid-cols-1 gap-3 justify-items-center">
        <Logo />
      </div>
      <section className="bg-gradient-to-b from-blue-200 to-blue-300">
      <div className="grid grid-cols-[115rem,8fr] justify-items-center">
        <div className="col-span-3">
          <p className="text-3xl rounded-lg px-20 py-5 text-center">EduQuest is an innovative e-learning platform created by team members for our Software Engineering Course.</p>
        </div>
        <div>
        <img src="/pixelteam.webp" alt="Picture of a Controller" className=" object-scale-down h-48 w-96"></img>
        </div>
        <div className="col-span-3">
<p className="text-3xl rounded-lg px-20 py-5 text-center">We hope that this platform can benefit both teachers and students alike in creating a fun learning environment.</p>
        </div>
      </div>
      </section>
      <section className="bg-gradient-to-b from-blue-300 to-blue-200">
      <div className="grid grid-cols-[115rem,8fr]">
        <h1 className="text-center text-7xl">Credits</h1>
        <br></br>
        <div className="grid grid-cols-1 justify-items-center">
          <div>
        <p className="text-3xl rounded-lg px-20 py-5 text-center">Ankkit Prakash</p>
        </div>
        <div>
        <p className="text-3xl rounded-lg px-20 py-5">Daniel Penner</p>
        </div>
        <div>
        <p className="text-3xl rounded-lg px-20 py-5">Mark Lovesey</p>
        </div>
        <div>
        <p className="text-3xl rounded-lg px-20 py-5">Nolan Nishikawa</p>
        </div>
        <div>
        <p className="text-3xl rounded-lg px-20 py-5">Rhys Smith</p>
        </div>
        </div>
        
</div>
      </section>
    </main>
  );
}