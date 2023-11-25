import BodyBar from "@/components/BodyBar";
import HeaderBar from "@/components/HeaderBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <HeaderBar />
      <BodyBar />
    </div>
  );
}
