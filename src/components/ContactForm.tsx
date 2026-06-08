"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Vielen Dank!</h3>
        <p className="mt-2 text-text-muted">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">E-Mail *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Telefon</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text mb-1.5">Dienstleistung</label>
          <select id="service" name="service" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow bg-white">
            <option value="privatumzug">Privatumzug</option>
            <option value="geschaeftsumzug">Geschäftsumzug</option>
            <option value="transport">Transport</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Nachricht *</label>
        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-y" placeholder="Beschreiben Sie Ihren Umzug (Von/Nach, Wohnungsgrösse, Wunschtermin...)" />
      </div>
      <button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary-dark font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer">
        Anfrage senden
      </button>
    </form>
  );
}
