import Sidebar from './Sidebar';
import PrintHero from './PrintHero';
import SummarySection from './SummarySection';
import PrintExperience from './PrintExperience';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';

export default function PrintCV() {
  return (
    <div className="cv-root min-h-screen bg-white text-gray-900 font-sans">
      <div className="md:flex md:items-stretch">
        <Sidebar />
        <main className="cv-main flex-1 bg-white px-10 py-14 md:px-14 md:py-16">
          <PrintHero />
          <SummarySection />
          <PrintExperience />
          <EducationSection />
          <CertificationsSection />
        </main>
      </div>
    </div>
  );
}
