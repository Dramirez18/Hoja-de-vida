import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrintCV from './components/PrintCV';

function isPrintMode(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('print') === '1';
}

export default function App() {
  if (isPrintMode()) {
    return <PrintCV />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans selection:bg-[#00E5FF] selection:text-black">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
