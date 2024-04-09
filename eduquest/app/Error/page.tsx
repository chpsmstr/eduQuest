import BackButton from "@/app/Components/BackButton";

export default function Error() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center flex-col">
      {/* BackButton component */}
      <BackButton params={{ link: "../" }} />

      {/* Error message */}
      <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-16 mb-16">
        404 - Page Not Found
      </h1>
    </main>
  );
}