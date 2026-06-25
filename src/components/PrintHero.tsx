import { profile } from '../data';

export default function PrintHero() {
  return (
    <section className="cv-hero">
      <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-3">
        {profile.name}
      </h1>
      <p className="text-lg text-gray-700 mb-1">{profile.title}</p>
      <p className="text-sm text-gray-500">{profile.location}</p>
    </section>
  );
}
