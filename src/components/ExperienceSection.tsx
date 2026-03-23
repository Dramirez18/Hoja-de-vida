import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32">
      <SectionHeading number="02" title="Where I've Worked" />

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00E5FF]/60 via-[#00E5FF]/20 to-transparent"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-[#00E5FF] ring-4 ring-[#0B0B0B] ring-offset-0"></div>
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="group bg-[#161616] border border-white/5 rounded-lg p-6 hover:border-[#00E5FF]/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-[#00E5FF]/10 text-[#00E5FF]">
                      <Briefcase size={18} />
                    </div>
                    <span className="font-mono text-xs text-[#00E5FF] tracking-wide uppercase">
                      {exp.date}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg font-bold text-gray-100 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[#00E5FF] font-mono text-sm mb-4">
                    @ {exp.company}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-[#00E5FF] mt-0.5 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
