import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 'doc-forgery',
    title: 'Document Forgery Detection System',
    summary: 'Image forensics pipeline with MLOps for detecting tampered documents.',
    tags: ['Python', 'FastAPI', 'ML', 'OpenCV', 'MLOps'],
    details:
      'End-to-end system for spotting signs of manipulation in scanned documents. Includes preprocessing, feature extraction, model scoring, batching, and CI/CD for model updates.',
  },
  {
    id: 'drug-efficacy',
    title: 'MLOps-powered Drug Efficacy Prediction System',
    summary: 'Bioinformatics workflow to estimate likely efficacy using ML.',
    tags: ['Python', 'scikit-learn', 'Bioinformatics', 'MLOps'],
    details:
      'Clean feature pipelines, model training and evaluation, and monitored deployments to predict efficacy across candidate compounds with traceable metrics.',
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const cardVariant = {
    rest: { y: 0, boxShadow: '0 1px 2px rgba(16, 24, 40, .04)', transition: { duration: 0.2 } },
    hover: { y: -4, boxShadow: '0 10px 24px rgba(16, 24, 40, .08)', transition: { duration: 0.2 } },
  };

  return (
    <section id="projects" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Projects</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            A selection of work focused on reliability and clear outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              variants={cardVariant}
              initialstate="rest"
              whileHover={shouldReduceMotion ? undefined : 'hover'}
              animate="rest"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-2 text-gray-700">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setActiveId(p.id)}
                  className="inline-flex items-center rounded-2xl bg-gray-900 text-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 active:translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                  aria-haspopup="dialog"
                  aria-controls={`project-${p.id}`}
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <button
              aria-label="Close details"
              onClick={() => setActiveId(null)}
              className="absolute inset-0 bg-black/30"
            />
            <motion.div
              id={`project-${activeId}`}
              initial={{ y: shouldReduceMotion ? 0 : 16, opacity: shouldReduceMotion ? 1 : 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: shouldReduceMotion ? 0 : 8, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
            >
              {(() => {
                const proj = PROJECTS.find((p) => p.id === activeId);
                if (!proj) return null;
                return (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{proj.title}</h3>
                    <p className="mt-3 text-gray-700">{proj.details}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proj.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setActiveId(null)}
                        className="rounded-2xl border border-gray-300 bg-white text-gray-900 px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
