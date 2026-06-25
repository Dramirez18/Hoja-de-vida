import { education, labels } from '../data';

export default function EducationSection() {
  return (
    <section className="cv-section">
      <hr className="border-0 border-t border-gray-300 w-12 mb-4" />
      <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-5">
        {labels.education}
      </h2>

      <div className="space-y-4">
        {education.map((ed, i) => (
          <article key={i}>
            <h3 className="text-base font-semibold text-gray-900">{ed.school}</h3>
            <p className="text-sm text-gray-700">{ed.degree}</p>
            <p className="text-sm text-gray-500">{ed.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
