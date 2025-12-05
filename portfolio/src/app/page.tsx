// app/page.tsx
import Navigation from "@/components/Navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
        <div id="home">
          <PortfolioHeader />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsGrid />
        </div>
        <ContactSection />
      </main>
    </>
  );
}
