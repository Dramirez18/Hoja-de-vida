import { profile, contact, topSkills, labels } from '../data';

export default function Sidebar() {
  return (
    <aside className="cv-sidebar bg-[#2C3E50] text-white px-8 py-12 md:w-[34%] md:min-h-screen md:sticky md:top-0 print:w-[34%] print:min-h-0">
      <div className="mb-10 flex flex-col items-start gap-6">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-36 h-36 rounded-full object-cover border-2 border-white/20"
        />
      </div>

      <section className="mb-10">
        <h3 className="text-xl font-light tracking-tight mb-3">{labels.contact}</h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-white/90">{contact.phoneLabel}</p>
            <p className="text-white/70">{contact.phone}</p>
          </div>
          <div>
            <p className="text-white/90 break-all">{contact.email}</p>
          </div>
          <div>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 hover:text-white break-all leading-snug"
            >
              {contact.linkedinDisplay}
            </a>
            <p className="text-white/60 text-xs">({contact.linkedinLabel})</p>
          </div>
          <div>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/90 hover:text-white break-all leading-snug"
            >
              {contact.githubDisplay}
            </a>
            <p className="text-white/60 text-xs">({contact.githubLabel})</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-light tracking-tight mb-3">{labels.topSkills}</h3>
        <ul className="space-y-1.5 text-sm text-white/90">
          {topSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
