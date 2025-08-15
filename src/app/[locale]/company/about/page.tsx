"use client";

import Link from "next/link";
import { Header } from "../../components/Header/Header";
import { useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="min-h-screen container mx-auto relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 pt-0 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Modern Effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
       
        {/* HERO SECTION */}
           <div className='flex justify-start m-10'>
                <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                </Link>
              </div>
        <section className="py-10 md:py-10 text-center px-6 md:px-12 max-w-3xl mx-auto relative z-10">

          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 mb-6 tracking-wide drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 pb-32 relative z-10 space-y-16">
          <div className="text-center p-8 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl shadow-xl shadow-purple-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 tracking-wide">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("missionText")}</p>
          </div>

          <div className="text-center p-8 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl shadow-xl shadow-purple-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 tracking-wide">
              {t("whoTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("whoText")}</p>
          </div>

          <div className="text-center p-8 bg-gray-900/40 backdrop-blur-xl border border-purple-400/20 rounded-2xl shadow-xl shadow-purple-500/10">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 tracking-wide">
              {t("whyTitle")}
            </h2>
            <p className="text-gray-300 leading-relaxed">{t("whyText")}</p>
          </div>

          <div className="pt-8 border-t border-purple-400/30">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-12 text-center tracking-wide">
              {t("guidesTitle")}
            </h2>
            <div className="space-y-8">
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-xl border border-purple-400/20 rounded-xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-lg font-bold text-purple-200 mb-3 tracking-wide">
                  {t("value1Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value1Text")}</p>
              </div>
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-xl border border-purple-400/20 rounded-xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-lg font-bold text-purple-200 mb-3 tracking-wide">
                  {t("value2Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value2Text")}</p>
              </div>
              <div className="text-center p-6 bg-gray-900/30 backdrop-blur-xl border border-purple-400/20 rounded-xl hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-lg font-bold text-purple-200 mb-3 tracking-wide">
                  {t("value3Title")}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

