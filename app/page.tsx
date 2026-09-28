import { Approach, Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <Approach />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
