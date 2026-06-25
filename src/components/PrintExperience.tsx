import { experiences, labels } from '../data';

export default function PrintExperience() {
  return (
    <section className="cv-section">
      <hr className="border-0 border-t border-gray-300 w-12 mb-4" />
      <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-5">
        {labels.experience}
      </h2>

      <div className="space-y-7">
        {experiences.map((exp, index) => (
          <article key={index} className="cv-experience-item">
            <h3 className="text-base font-semibold text-gray-900 leading-snug">
              {exp.company}
            </h3>
            <p className="text-[15px] text-gray-800 leading-snug">{exp.role}</p>
            <p className="text-sm text-gray-500 mb-1">{exp.date}</p>
            {exp.location && (
              <p className="text-sm text-gray-400 mb-2">{exp.location}</p>
            )}
            <ul className="mt-2 space-y-1.5 text-[14.5px] text-gray-700 leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
