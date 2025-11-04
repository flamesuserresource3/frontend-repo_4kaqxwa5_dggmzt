import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: shouldReduceMotion ? 0 : -24, opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-shadow ${
        scrolled
          ? 'backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 shadow-[0_1px_0_0_rgba(255,255,255,.08)]'
          : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-gray-100" role="navigation">
        <a href="#home" className="font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md">
          Vinay Pokharkar
        </a>
        <ul className="flex items-center gap-6 text-sm text-gray-300">
          {[
            { href: '#home', label: 'Home' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 py-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
