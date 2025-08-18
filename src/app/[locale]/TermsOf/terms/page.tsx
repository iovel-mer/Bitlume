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
      <main className="min-h-screen container mx-auto bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Modern Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
       
        {/* Back to Home Button - Top Left */}
        <div className="relative z-10 mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/20"
          >
            <Home className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400" />
            <span className="hidden sm:inline">{t('backToHome')}</span>
            {/* <span className="sm:hidden">Home</span> */}
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400" />
          </Link>
        </div>

        {/* Centered Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full bg-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-2xl sm:rounded-3xl shadow-xl shadow-purple-500/10 p-4 sm:p-6 md:p-8 lg:p-12">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-200 tracking-wide drop-shadow-lg text-center">
              {t("title")}
            </h1>

            {/* Sections */}
            <section className="space-y-6 sm:space-y-8 md:space-y-10 text-xs sm:text-sm md:text-base leading-relaxed">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="p-4 sm:p-5 md:p-6 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-xl sm:rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2 sm:mb-3 md:mb-4 tracking-wide">
                    {t(`section${index + 1}.title`)}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`section${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}