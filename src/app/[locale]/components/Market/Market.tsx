"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getMarketData, type MarketData } from "@/app/api/market/actions"
import { TrendingUp, TrendingDown, Activity, RefreshCw, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const Market: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("Market")

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await getMarketData()
      if (result.success) {
        setMarketData(result.data as any)
        setError(null)
      } else {
        setError(result.error || t("errorGeneric"))
      }
    } catch (err) {
      setError(t("errorFetch"))
      console.error("Market data fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const fractionDigits = price >= 1000 ? 2 : price >= 1 ? 4 : 6
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : ""
    return `${sign}${change.toFixed(2)}%`
  }

  const handleImageError = (symbol: string) => {
    setImageErrors((prev) => new Set(prev).add(symbol))
  }

  const getResponsiveLogoSize = () => {
    if (!mounted) return 48
    if (typeof window === 'undefined') return 48
    
    if (window.innerWidth < 480) return 36
    if (window.innerWidth < 640) return 40
    if (window.innerWidth < 768) return 48
    if (window.innerWidth < 1024) return 52
    return 56
  }

  const CryptoLogo = ({ coin, size }: { coin: MarketData; size?: number }) => {
    const logoSize = size || getResponsiveLogoSize()
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 text-white font-black shadow-2xl border-2 border-cyan-400/50 rounded-xl"
          style={{ width: logoSize, height: logoSize }}
        >
          <span className="text-xs font-mono">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div className="relative overflow-hidden shadow-2xl rounded-xl" style={{ width: logoSize, height: logoSize }}>
        <Image
          src={logoSrc}
          width={logoSize}
          height={logoSize}
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover rounded-xl w-full h-full"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className=" mx-auto w-full py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-900 min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px] pointer-events-none" />

      {/* Animated Orbs - Responsive positioning and sizing */}
      <div className="absolute top-1/4 left-2 sm:left-8 md:left-16 lg:left-1/6 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-conic from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-2 sm:right-8 md:right-16 lg:right-1/6 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-conic from-sky-400 via-cyan-500 to-indigo-500 rounded-full blur-2xl sm:blur-3xl opacity-15 sm:opacity-25 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

      {/* Glow Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-1 sm:h-2 animate-pulse"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] sm:shadow-[0_0_30px_rgba(56,189,248,0.4)] mb-4 sm:mb-6 md:mb-8"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)' }}>
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-black mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight font-mono px-2">
            {t("title")}
          </h3>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-cyan-100 max-w-3xl mx-auto font-mono leading-relaxed px-4">
            {t("description")}
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-3 sm:border-4 border-cyan-500 border-t-transparent animate-spin shadow-[0_0_20px_rgba(56,189,248,0.6)] sm:shadow-[0_0_30px_rgba(56,189,248,0.6)] rounded-lg"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}></div>
              <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-4 sm:mt-6 md:mt-8 text-cyan-200 text-sm sm:text-lg md:text-xl font-mono uppercase tracking-wider">{t("loading")}</p>
            <div className="mt-3 sm:mt-4 md:mt-6 flex space-x-1.5 sm:space-x-2 md:space-x-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(6,182,212,0.8)]" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-indigo-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(99,102,241,0.8)]" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4">
            <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-xl border-2 border-purple-500/50 p-6 sm:p-8 md:p-10 lg:p-12 max-w-sm sm:max-w-md md:max-w-lg mx-auto shadow-2xl shadow-purple-500/30 rounded-lg"
              style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 25%, 95% 100%, 5% 100%, 0% 75%)' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 shadow-[0_0_20px_rgba(147,51,234,0.6)]"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <p className="text-purple-300 text-sm sm:text-base md:text-lg font-mono uppercase tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[300px] xl:max-w-[280px] p-3 sm:p-4 md:p-5 lg:p-6 bg-slate-900/60 border border-transparent hover:border-cyan-400/70 transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl hover:shadow-cyan-500/30 rounded-lg"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 sm:top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6 gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1">
                      <CryptoLogo coin={coin} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-xs sm:text-sm md:text-base lg:text-lg text-cyan-100 uppercase tracking-wide pr-1 font-mono truncate">{coin.name}</h4>
                        <p className="text-cyan-400/80 text-xs sm:text-sm font-mono uppercase tracking-widest">{coin.symbol}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider flex-shrink-0">
                      {coin.change >= 0
                        ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />}
                      <span className={`text-xs sm:text-sm ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        <span className="hidden xs:inline">{formatChange(coin.change)}</span>
                        <span className="xs:hidden">{Math.abs(coin.change).toFixed(1)}%</span>
                      </span>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4 md:mb-6">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1 sm:mb-2 tracking-tight font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] break-all">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-cyan-300 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-1 sm:gap-2">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{t("currentPrice")}</span>
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-cyan-200 font-mono text-xs sm:text-sm uppercase tracking-wider flex-shrink-0">{t("movement")}</span>
                      <span className={`font-black text-sm sm:text-base md:text-lg font-mono flex-shrink-0 ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 sm:h-1.5 md:h-2 relative overflow-hidden rounded-full">
                      <div
                        className={`h-full transition-all duration-1000 rounded-full ${
                          coin.change >= 0
                            ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_10px_rgba(0,255,0,0.6)]'
                            : 'bg-gradient-to-r from-red-400 to-pink-500 shadow-[0_0_10px_rgba(255,0,0,0.6)]'
                        }`}
                        style={{ width: `${Math.min(Math.abs(coin.change) * 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80 shadow-[0_0_15px_rgba(56,189,248,0.5)] sm:shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
    </section>
  )
}