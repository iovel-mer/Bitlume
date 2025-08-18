"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "../../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

export default function CookiePage() {
  const t = useTranslations("Cookie")

  return (
    <>
      <Header />
      <main className="min-h-screen  pt-10 mx-auto bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(139,69,244,0.05)_2px,transparent_2px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] lg:bg-[size:60px_60px]"></div>
        
        {/* Modern Background Orbs */}
        <div className="absolute top-1/4 right-4 sm:right-8 md:right-16 lg:right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-conic from-purple-500/15 via-indigo-500/15 to-cyan-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-4 sm:left-8 md:left-16 lg:left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

     
        <div className='p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20'>
                <Link
                  href="/"
                  className='inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                </Link>
              </div>
        
        <div className="relative z-10 px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-200 mt-4 sm:mt-6 md:mt-8 animate-pulse tracking-wide drop-shadow-lg">
                {t("title")}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Cookie Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
              
              {/* Left Column */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Section 3 - Network & Security */}
                <div className="group relative bg-gray-900/60 backdrop-blur-xl border border-purple-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-purple-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-purple-500/10">
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full translate-y-6 sm:translate-y-8 md:translate-y-10 -translate-x-6 sm:-translate-x-8 md:-translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center gap-2 sm:gap-3 tracking-wide">
                     
                      {t("section3.title")}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{t("section3.text")}</p>
                  </div>
                </div>

                {/* Section 5 - User Consent */}
                <div className="group relative bg-gray-900/60 backdrop-blur-xl border border-emerald-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-emerald-500/10">
                  <div className="absolute top-1/2 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full translate-x-5 sm:translate-x-6 md:translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 flex items-center gap-2 sm:gap-3 tracking-wide">
                    
                      {t("section5.title")}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{t("section5.text")}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Section 2 - Cookie Types */}
                <div className="group relative bg-gray-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:border-cyan-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-cyan-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center gap-2 sm:gap-3 tracking-wide">
                     
                      {t("section2.title")}
                    </h2>
                    <div className="space-y-3 sm:space-y-4">
                      {t.raw("section2.items").map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl sm:rounded-2xl hover:bg-gray-700/40 hover:border-purple-400/30 transition-all duration-300">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mt-1 sm:mt-1.5 md:mt-2 flex-shrink-0 animate-pulse"></div>
                          <div className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-8 sm:h-12 md:h-16"></div>
          </div>
        </div>
      </main>
    </>
  )
}