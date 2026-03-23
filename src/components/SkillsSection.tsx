import { motion } from 'motion/react';
import { skills } from '../data';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <SectionHeading number="01" title="Skills & Technologies" />

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
              <span className="text-[#00E5FF] font-mono text-sm">{skill.value}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                className="bg-[#00E5FF] h-full rounded-full"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
