import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 xl:px-12">
      {/* Background shape */}
      <div
        style={{ backgroundImage: "url(/shape-1.png)" }}
        className="absolute inset-0 top-0 left-0 bg-cover bg-no-repeat bg-center -z-10"
      />
      <Navbar />
      <Hero />
    </div>
  );
}
