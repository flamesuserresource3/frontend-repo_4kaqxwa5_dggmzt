import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const shouldReduceMotion = useReducedMotion();

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    // No backend wired in this template: emulate async submit
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  };

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Contact</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Send a note below or email directly at{' '}
            <a href="mailto:vinay@example.com" className="underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500">
              vinay@example.com
            </a>
            .
          </p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid gap-4 sm:grid-cols-2 rounded-2xl border border-gray-200 p-6 shadow-sm bg-white"
          aria-describedby="contact-hint"
        >
          <p id="contact-hint" className="sr-only">All fields are required.</p>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 rounded-2xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="How can I help?"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center rounded-2xl bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 active:translate-y-px transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent' : 'Send message'}
            </button>
            <p className="text-sm text-gray-600">I usually reply within 1–2 days.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
