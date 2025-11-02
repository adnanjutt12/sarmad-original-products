'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are your products additive-free?',
      answer: 'Yes, all our products are free from artificial additives or preservatives. We use only natural ingredients and traditional preparation methods.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Usually 3–7 business days within Pakistan. We will provide tracking information once your order is dispatched.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day satisfaction guarantee. If you are not completely satisfied with your purchase, contact us for a full refund. Simply reach out to us via email or WhatsApp with your order number.',
    },
    {
      question: 'How should I store honey?',
      answer: 'Store honey in a cool, dry place at room temperature. Avoid direct sunlight. It may crystallize naturally over time, which is normal and does not affect quality. You can gently warm it to return it to liquid form.',
    },
    {
      question: 'How should I store desi ghee?',
      answer: 'Desi ghee can be stored at room temperature in a cool, dry place. In warmer climates, you may refrigerate it. It will remain solid when cool and liquid when warm.',
    },
    {
      question: 'How should I store ittar?',
      answer: 'Store ittar in a cool, dark place away from direct sunlight and heat sources. Keep the bottle tightly sealed to preserve the fragrance. It does not require refrigeration.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit/debit cards (Visa/Mastercard), JazzCash, Easypaisa, and bank transfers. All payments are processed securely.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship within Pakistan only. We are working on expanding our shipping options in the future.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-off-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-off-white/80 transition-colors"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-semibold text-dark-text pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-accent-gold transition-transform flex-shrink-0 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-dark-text/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

