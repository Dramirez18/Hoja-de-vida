import * as en from './data.en';
import * as es from './data.es';

function detectLang(): 'en' | 'es' {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  return params.get('lang') === 'es' ? 'es' : 'en';
}

const source = detectLang() === 'es' ? es : en;

export const lang = detectLang();
export const profile = source.profile;
export const contact = source.contact;
export const topSkills = source.topSkills;
export const skills = source.skills;
export const experiences = source.experiences;
export const education = source.education;
export const certifications = source.certifications;
export const extraProjects = source.extraProjects;

export const labels = {
  en: {
    contact: 'Contact',
    topSkills: 'Top Skills',
    summary: 'Summary',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications & Highlights',
  },
  es: {
    contact: 'Contactar',
    topSkills: 'Aptitudes principales',
    summary: 'Resumen',
    experience: 'Experiencia',
    education: 'Educación',
    certifications: 'Certificaciones y logros',
  },
}[detectLang()];
