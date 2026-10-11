import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div className="wrap">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Expertise />
        <Work />
        <Process />
        <Contact />
      </main>
    </div>
  );
}
