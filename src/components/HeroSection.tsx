import { motion } from 'motion/react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between relative gap-12 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl flex-1"
      >
        <p className="font-mono text-[#00E5FF] mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gray-100">
          David L. Ramírez.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-gray-400">
          Engineer & App Developer.
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed">
          Engineer and application developer for entrepreneurs and businesses.
          Design, quality, efficiency, and punctuality — these are the principles
          that define my approach to every project. I consistently deliver my best
          work leveraging platforms such as Bubble.io, OpenClaw, Claude, Google
          Cloud Console, Meta, Supabase, and more.
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[#00E5FF]/10 transition-colors font-mono text-sm"
          >
            Get In Touch
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/Dramirez18" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/david-ram%C3%ADrez-contreras-093bb517b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00E5FF] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 w-full max-w-sm relative group mt-12 md:mt-0"
      >
        <div className="absolute inset-0 border-2 border-[#00E5FF] rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <div className="relative bg-[#00E5FF]/10 rounded overflow-hidden aspect-square border border-white/10 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/bNn8Mrpw/David-Ramirez-jpg.png"
            alt="David Leonardo Ramírez Contreras"
            className="object-cover w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 z-10 relative"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
