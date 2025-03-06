import HeroSection from "@/components/shared/HeroSection";
import SideBar from "@/components/shared/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar/>
      <HeroSection/>
    </div>
  );
}