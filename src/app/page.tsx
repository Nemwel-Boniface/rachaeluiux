import Navbar from "@/components/Navbar";
import Landing from "@/components/sections/landing";
import FeaturedProjects from "@/components/sections/featured-projects";
import AreasOfFocus from "@/components/sections/areas-of-focus";
import DesigningWithPurpose from "@/components/sections/design-with-purpose";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <FeaturedProjects />
      <AreasOfFocus />
      <DesigningWithPurpose />
      <Footer />
    </main>
  );
}
