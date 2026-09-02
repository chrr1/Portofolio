import React, { useState } from 'react';
import { Award, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { certificatesData } from '../data/certificates';
import { CertificateModal } from './CertificateModal';

export const Certificates = () => {
  const { lang, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll ? certificatesData : certificatesData.slice(0, 6);

  return (
    <section id="certificates" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest mb-4"
        >
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">05</span>
          <span>/</span>
          <span>Certificates</span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800"
        >
          <div>
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-1">
              Credentials & Achievements
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              CERTIFICATES
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-700 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            Click on any certificate to view detailed credentials, issuer information, and verification links.
          </p>
        </motion.div>

        {/* Certificates Grid (3 cols per row, max 6 initial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedCertificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase block mb-1 font-medium">
                    {cert.issuer} • {cert.date}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span>ID: {cert.credentialId}</span>
                <span className="text-zinc-950 dark:text-zinc-100 font-semibold group-hover:underline">View Credentials ↗</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Toggle Button (if total certificates > 6) */}
        {certificatesData.length > 6 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-xs font-mono uppercase tracking-wider rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100/60 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold transition-all duration-300 shadow-sm hover:shadow flex items-center space-x-2 group"
            >
              <span>
                {showAll
                  ? t({ id: "Tampilkan Lebih Sedikit", en: "Show Less" })
                  : t({ id: `Lihat Semua Sertifikat (${certificatesData.length})`, en: `View All Certificates (${certificatesData.length})` })}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
            </button>
          </motion.div>
        )}

      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};
