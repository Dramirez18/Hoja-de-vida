export default function ContactSection() {
  return (
    <section id="contact" className="py-32 text-center max-w-2xl mx-auto">
      <p className="font-mono text-[#00E5FF] mb-4">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-12 leading-relaxed">
        My inbox is always open. Whether you have a question, a project idea, or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:dramirez180929@gmail.com"
        className="inline-block px-8 py-4 bg-transparent border border-[#00E5FF] text-[#00E5FF] rounded hover:bg-[#00E5FF]/10 transition-colors font-mono text-sm"
      >
        Contact now!
      </a>
    </section>
  );
}
