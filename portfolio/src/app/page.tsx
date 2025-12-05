// app/page.tsx
import PortfolioHeader from "@/components/PortfolioHeader";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PortfolioHeader />
      <SkillsSection />
      <ProjectsGrid />
      <ContactSection />
    </main>
  );
}
