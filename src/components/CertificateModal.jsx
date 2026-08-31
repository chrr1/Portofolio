import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar, Hash, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CertificateModal = ({ cert, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/80 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase">
            <Award className="w-4 h-4 text-zinc-500" />
            <span>Certificate Detail</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Certificate Image Box */}
          <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 flex-col items-center justify-center bg-zinc-900 text-zinc-400 p-6 text-center">
              <Award className="w-12 h-12 text-zinc-600 mb-2" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-1">Certificate Preview</span>
              <span className="text-xl font-bold text-zinc-100">{cert.title}</span>
              <span className="text-xs font-mono text-zinc-500 mt-2">{cert.image}</span>
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50">
            {cert.title}
          </h3>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono">
            <div className="p-3 rounded bg-zinc-100/50 dark:bg-zinc-800/40">
              <dt className="text-zinc-400 dark:text-zinc-500 uppercase mb-1 flex items-center space-x-1">
                <Building2 className="w-3 h-3" />
                <span>Issuer</span>
              </dt>
              <dd className="font-bold text-zinc-900 dark:text-zinc-100 truncate">{cert.issuer}</dd>
            </div>

            <div className="p-3 rounded bg-zinc-100/50 dark:bg-zinc-800/40">
              <dt className="text-zinc-400 dark:text-zinc-500 uppercase mb-1 flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Date</span>
              </dt>
              <dd className="font-bold text-zinc-900 dark:text-zinc-100">{cert.date}</dd>
            </div>

            <div className="p-3 rounded bg-zinc-100/50 dark:bg-zinc-800/40">
              <dt className="text-zinc-400 dark:text-zinc-500 uppercase mb-1 flex items-center space-x-1">
                <Hash className="w-3 h-3" />
                <span>Credential ID</span>
              </dt>
              <dd className="font-bold text-zinc-900 dark:text-zinc-100 truncate">{cert.credentialId}</dd>
            </div>
          </dl>

          {cert.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t(cert.description)}
            </p>
          )}
        </div>

        {/* Modal Footer Link */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end bg-zinc-100/50 dark:bg-zinc-950/50">
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono uppercase font-semibold bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded hover:opacity-90 transition-opacity"
          >
            <span>Verify Certificate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
