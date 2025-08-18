"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Bitcoin, BarChart3, Shield, Rocket, Play, ChevronRight, TrendingUp, Users, DollarSign, Crown, Star, Zap, Layers } from "lucide-react"

export const Hero: React.FC = () => {
  const t = useTranslations("hero")
  const locale = useLocale();
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
          setError(null)
        } else {
          setError(result.error || "Failed to load data")
        }
      } catch (err) {
        setError("Failed to load market data")
        console.error("Hero data fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
        }
      } catch (err) {
        console.warn("Failed to update hero data:", err)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className=" mx-auto w-full min-h-screen bg-slate-950 relative text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-950 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(-45deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
        
        {/* Floating particles - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden sm:block absolute top-40 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-70"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="hidden sm:block absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12  items-center lg:pt-40">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">{t("nextGen")}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse drop-shadow-2xl">{t("trading")}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">{t("platform")}</span>
                </h1>
                
                {/* Spec badges - Responsive layout */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-lg font-mono">
                  <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-slate-900/50 backdrop-blur-sm border border-cyan-400/40 rounded-full">
                    <Zap size={16} className="sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-300 text-xs sm:text-sm lg:text-base">{t("specs.execution")}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-slate-900/50 backdrop-blur-sm border border-purple-400/40 rounded-full">
                    <Shield size={16} className="sm:w-5 sm:h-5 text-purple-400 animate-pulse" />
                    <span className="text-purple-300 text-xs sm:text-sm lg:text-base">{t("specs.uptime")}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-slate-900/50 backdrop-blur-sm border border-blue-400/40 rounded-full">
                    <Star size={16} className="sm:w-5 sm:h-5 text-blue-400 animate-pulse" />
                    <span className="text-blue-300 text-xs sm:text-sm lg:text-base">{t("specs.grade")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light px-4 sm:px-0">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0">
              <Link href={`/${locale}/register`} className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold w-full sm:w-auto
                  bg-slate-800/70 backdrop-blur-sm text-white border border-cyan-400/50 shadow-2xl shadow-cyan-500/30
                  hover:bg-slate-700/70 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 sm:hover:scale-110
                  transition-all duration-500 ease-out cursor-pointer">
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <Layers size={18} className="sm:w-5 sm:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">{t("startTrading")}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Market Terminal */}
          <div className="lg:col-span-5 w-full mt-8 lg:mt-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
              <Card className="relative bg-slate-900/80 backdrop-blur-2xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-purple-400/50 hover:shadow-purple-500/30 transition-all duration-500">
                <CardHeader className="p-4 sm:p-6 border-b border-cyan-400/20 bg-gradient-to-r from-slate-900/60 to-purple-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                        <BarChart3 size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">{t("marketFeed")}</h3>
                        <p className="text-xs sm:text-sm text-cyan-300 font-mono uppercase tracking-wider">{t("Advanced")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-400 text-xs sm:text-sm font-black uppercase tracking-widest">{t("live")}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 sm:py-20">
                      <div className="relative mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-cyan-200/20 border-t-cyan-400 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-purple-400 rounded-full animate-spin animation-delay-75"></div>
                        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin animation-delay-150"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="text-white font-black text-lg sm:text-xl">{t("loading.title")}</h4>
                        <p className="text-cyan-300 text-xs sm:text-sm font-mono">{t("loading.sub")}</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-12 sm:py-20">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 border border-red-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h4 className="text-red-400 font-black mb-2 text-sm sm:text-base">{t("error.title")}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-mono">{t("error.sub")}</p>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={coin.symbol} className="group">
                          <div className="relative overflow-hidden bg-slate-900/40 hover:bg-slate-900/60 border border-cyan-400/20 hover:border-purple-400/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-3 sm:gap-4">
                                <div className="relative">
                                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-cyan-400/30 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                                    <img
                                      src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                                      alt={`${coin.symbol} logo`}
                                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (fallback) fallback.style.display = 'block';
                                      }}
                                    />
                                    <Bitcoin size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-400 hidden" />
                                  </div>
                                </div>
                                <div>
                                  <div className="text-white font-black text-lg sm:text-xl lg:text-2xl tracking-wide">{coin.symbol}</div>
                                  <div className="text-cyan-300 text-xs sm:text-sm font-mono uppercase tracking-wider">{t("USD")}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-black text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 font-mono">{formatPrice(coin.price)}</div>
                                <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold border backdrop-blur-sm ${
                                  coin.change >= 0
                                    ? "text-green-300 bg-green-500/20 border-green-400/30 shadow-lg shadow-green-500/20"
                                    : "text-red-300 bg-red-500/20 border-red-400/30 shadow-lg shadow-red-500/20"
                                }`}>
                                  <TrendingUp size={12} className={`sm:w-4 sm:h-4 ${coin.change >= 0 ? "animate-pulse" : "rotate-180 animate-pulse"}`} />
                                  {coin.change >= 0 ? "+" : ""}
                                  {coin.change.toFixed(2)}%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-4 sm:p-6 border-t border-cyan-400/20 bg-gradient-to-r from-slate-900/80 to-purple-900/20">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-xs sm:text-sm font-mono gap-2 sm:gap-0">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-ping"></div>
                      <span className="text-cyan-300">{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 size={12} className="sm:w-4 sm:h-4 text-purple-400 animate-pulse" />
                      <span className="text-purple-300">{t("volume")}: {marketData[0]?.volume || "$2.4T"}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}