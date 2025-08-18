"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "../../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

const PrivacyPage = () => {
  const t = useTranslations("Privacy")

  return (
    <>
      <Header />
      <div className="min-h-screen container mx-auto bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
        <div className='flex justify-start m-4 sm:m-6 md:m-8 lg:m-10'>
               <Link
                  href="/"
                  className='inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-xs sm:text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-3 w-3 sm:h-4 sm:w-4 ml-1.5 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                </Link>
              </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:25px_25px] md:bg-[size:30px_30px] pointer-events-none"></div>
        
        {/* Modern Effects */}
        <div className="absolute top-10 sm:top-16 md:top-20 right-4 sm:right-12 md:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500/15 to-indigo-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-4 sm:left-12 md:left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating Particles */}
        <div className="hidden sm:block absolute top-32 sm:top-40 left-32 sm:left-40 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-48 sm:top-60 right-48 sm:right-60 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="hidden sm:block absolute bottom-48 sm:bottom-60 left-1/3 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
                  {t("title")}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {t("description")}
                </p>
                <div className="mt-4 sm:mt-6 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/40 rounded-full text-purple-300 text-xs sm:text-sm font-semibold shadow-lg shadow-purple-500/20">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1
                return (
                  <div 
                    key={section}
                    className="group relative bg-gray-900/60 backdrop-blur-xl border border-purple-400/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-gray-900/70 hover:border-purple-400/40 transition-all duration-500 overflow-hidden shadow-xl shadow-purple-500/10"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg shadow-purple-500/30">
                      {section}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all duration-300 tracking-wide">
                        {t(`section${section}.title`)}
                      </h2>
                      
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>
                      
                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-gray-800/40 backdrop-blur-sm border border-purple-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                          <ul className="space-y-2 sm:space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Spacing for mobile */}
            <div className="h-8 sm:h-12 md:h-16"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPage