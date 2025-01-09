import Image from "next/image";
export default function About() {
  return (
    <div className="bg-white text-black py-32 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left Column - About Us Content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-8">
          <h2 className="text-5xl font-bold tracking-tight">About <span className="text-gray-700">THF Ventures</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            THF Ventures is dedicated to driving innovation and enabling businesses to thrive in the digital world.
            With our expertise in AI, blockchain, and cloud computing, we transform challenges into opportunities.
          </p>
        </div>

        {/* Right Column - Empty Space / Visual Element */}
        <div className="flex justify-center items-center">
          <div className="w-[80%] h-[400px] bg-gray-100 rounded-lg">
            <Image
            src="/images/team.jpg" alt="team" width={500} height={500} />
            </div> {/* Empty Space or Simple Visual */}
        </div>

      </div>
    </div>
  );
}
