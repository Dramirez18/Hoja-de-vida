import { profile, labels } from '../data';

export default function SummarySection() {
  return (
    <section className="cv-section">
      <hr className="border-0 border-t border-gray-300 w-12 mb-4" />
      <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-3">
        {labels.summary}
      </h2>
      <p className="text-[15px] text-gray-700 leading-relaxed whitespace-pre-line">
        {profile.summary}
      </p>
    </section>
  );
}
