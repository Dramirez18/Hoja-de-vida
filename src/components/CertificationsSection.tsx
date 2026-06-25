import { certifications, labels } from '../data';

export default function CertificationsSection() {
  return (
    <section className="cv-section">
      <hr className="border-0 border-t border-gray-300 w-12 mb-4" />
      <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-5">
        {labels.certifications}
      </h2>

      <div className="space-y-3">
        {certifications.map((c, i) => (
          <article key={i} className="cv-experience-item">
            <h3 className="text-base font-semibold text-gray-900">{c.title}</h3>
            <p className="text-sm text-gray-700">{c.issuer}</p>
            <p className="text-sm text-gray-500">{c.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
