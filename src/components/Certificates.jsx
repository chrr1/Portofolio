import React, { useState } from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import { CertificateModal } from './CertificateModal';

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Numbered Section Header */}
        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">05</span>
          <span>/</span>
          <span>Certificates</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-1">
              Credentials & Achievements
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight">
              CERTIFICATES
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-4 md:mt-0 max-w-md">
            Click on any certificate to view detailed credentials, issuer information, and verification links.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer p-6 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                    <Award className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase block mb-1">
                    {cert.issuer} • {cert.date}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>ID: {cert.credentialId}</span>
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold group-hover:underline">View Credentials ↗</span>
              </div>
            </div>
          ))}
        </div>

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
