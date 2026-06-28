import Navbar from "@/components/Navbar";
import Landing from "@/components/sections/landing";
import FeaturedProjects from "@/components/sections/featured-projects";
import AreasOfFocus from "@/components/sections/areas-of-focus";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <FeaturedProjects />
      <AreasOfFocus />
    </main>
  );
}
