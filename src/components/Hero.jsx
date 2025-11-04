import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06, delayChildren: 0.1, duration: 0.5, ease: 'easeOut' },
    },
  };

  const item = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient fade to improve text contrast without blocking Spline interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Vinay Pokharkar
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-700">
            I’m Vinay, a software developer who enjoys building practical, thoughtful solutions. I focus on making systems that are
            reliable, easy to use, and meaningful in real-world scenarios.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-2xl bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 active:translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl border border-gray-300 bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 active:translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
