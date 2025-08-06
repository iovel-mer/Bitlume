'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";

import { ArrowRight, Home } from "lucide-react";
import { Header } from "../../components/Header/Header";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-900  via-slate-900 to-gray-950 text-white px-6 py-20 relative flex items-center justify-center">
      <div className='flex justify-start absolute top-10 left-5 '>
                <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                </Link>
              </div>
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Modern Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="relative z-10 mt-20 max-w-5xl w-full bg-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-3xl shadow-xl shadow-purple-500/10 p-8 sm:p-12">
         
         
          {/* Title */}
          <h1 className="text-5xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-200 tracking-wide drop-shadow-lg">
            {t("title")}
          </h1>

          {/* Sections */}
          <section className="space-y-10 text-sm sm:text-base leading-relaxed ">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="p-6 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h2 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4 tracking-wide">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {t(`section${index + 1}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}