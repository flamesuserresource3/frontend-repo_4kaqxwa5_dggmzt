import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-dvh bg-neutral-950 text-gray-100 antialiased">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <motion.section
          aria-labelledby="about-heading"
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About</h2>
          <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
            I like working on systems that are clear, steady, and useful. A good day for me is when a tool becomes simpler to use and
            more dependable. Below are two projects that reflect that approach.
          </p>
        </motion.section>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vinay Pokharkar</p>
          <nav aria-label="Secondary">
            <ul className="flex items-center gap-4">
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-1" href="#home">Home</a></li>
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-1" href="#projects">Projects</a></li>
              <li><a className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-1" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
