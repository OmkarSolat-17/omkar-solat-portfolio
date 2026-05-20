import { Layout } from "@/components/Layout";
import { AboutSection } from "@/sections/AboutSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { LearningSection } from "@/sections/LearningSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function App() {
  return (
    <div className="dark">
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LearningSection />
        <CertificationsSection />
        <ContactSection />
      </Layout>
    </div>
  );
}
