import FooterBar from "@/components/FooterBar";
import HeaderBar from "@/components/HeaderBar";
import Microphone from "@/icons/Microphone";
import Search from "@/icons/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <HeaderBar />
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="googlelogo"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <Search styles="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <Microphone styles="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 txet-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md">
            <p>Google Search</p>
          </button>
          <button className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 txet-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md">
            <p>I'm Feeling Lucky</p>
          </button>
        </div>
      </form>
      <FooterBar />
    </div>
  );
}
