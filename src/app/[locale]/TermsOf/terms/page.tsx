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
      <main className="min-h-screen mx-auto bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 text-white px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative">
        {/* Background Grid - Responsive sizing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:20px_20px] xs:bg-[size:25px_25px] sm:bg-[size:30px_30px] md:bg-[size:35px_35px] pointer-events-none" />

        {/* Modern Effects - Responsive sizing and positioning */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-xl xs:blur-2xl sm:blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-xl xs:blur-2xl sm:blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
       
        {/* Back to Home Button - Responsive sizing */}
        <div className="relative z-10 mb-4 xs:mb-6 sm:mb-8">
          <Link
            href="/"
            className='inline-flex items-center px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-xs xs:text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
          >
            <Home className='h-3 w-3 xs:h-4 xs:w-4 mr-1.5 xs:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
            <span className="hidden xs:inline">{t('backToHome')}</span>
            <span className="xs:hidden">Home</span>
            <ArrowRight className='h-3 w-3 xs:h-4 xs:w-4 ml-1.5 xs:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
          </Link>
        </div>

        {/* Centered Content Container - Responsive layout */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] xs:min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl bg-gray-900/60 backdrop-blur-xl border border-purple-400/30 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-xl shadow-purple-500/10 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            
            {/* Title - Responsive typography */}
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 xs:mb-6 sm:mb-8 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-indigo-200 tracking-wide drop-shadow-lg text-center leading-tight">
              {t("title")}
            </h1>

            {/* Sections - Responsive spacing and typography */}
            <section className="space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2 xs:mb-3 sm:mb-3 md:mb-4 tracking-wide leading-tight">
                    {t(`section${index + 1}.title`)}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg">
                    {t(`section${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </section>

            {/* Footer spacing for mobile */}
            <div className="h-4 xs:h-6 sm:h-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}