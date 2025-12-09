// app/page.tsx
import Navigation from "@/components/Navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-black">
        <div id="home">
          <PortfolioHeader />
        </div>
        <AboutSection />
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsGrid />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
