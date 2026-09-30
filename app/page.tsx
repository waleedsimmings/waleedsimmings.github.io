import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Methodology } from "@/components/methodology";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";
import { Work } from "@/components/work";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Stats />
        <Methodology />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
