import Navbar from "@/components/Navbar";
import Landing from "@/components/sections/landing";
import FeaturedProjects from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <FeaturedProjects />
    </main>
  );
}
