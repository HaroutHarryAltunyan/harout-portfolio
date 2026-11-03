import { Intro } from "@/components/Intro";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Journey } from "@/components/home/Journey";
import { Ventures } from "@/components/home/Ventures";
import { Lab } from "@/components/home/Lab";
import { ArchitectureExplorer } from "@/components/home/ArchitectureExplorer";
import { Lifecycle } from "@/components/home/Lifecycle";
import { Archive } from "@/components/home/Archive";
import { Skills } from "@/components/home/Skills";
import { Creative } from "@/components/home/Creative";
import { Philosophy, Education, Focus } from "@/components/home/Story";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <About />
      <Journey />
      <Ventures />
      <Lab />
      <ArchitectureExplorer />
      <Lifecycle />
      <Archive />
      <Skills />
      <Creative compact />
      <Philosophy />
      <Education />
      <Focus />
      <Contact />
    </>
  );
}
