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
  const t = useTranslations("Market")

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

  const CryptoLogo = ({ coin, size = 48 }: { coin: MarketData; size?: number }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 text-white font-black shadow-2xl border-2 border-cyan-400/50"
          style={{ width: size, height: size }}
        >
          <span className="text-xs font-mono">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div className="relative overflow-hidden shadow-2xl rounded-full h-full" style={{ width: size, height: size }}>
        <Image
          src={logoSrc}
          width={size}
          height={size}
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover rounded-2xl h-full"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="w-full container mx-auto py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-cyan-900 min-h-screen relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Animated Orbs - Responsive positioning */}
      <div className="absolute top-1/4 left-4 sm:left-1/6 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-conic from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-4 sm:right-1/6 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-conic from-sky-400 via-cyan-500 to-indigo-500 rounded-full blur-3xl opacity-25 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>

      {/* Glow Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-2 animate-pulse"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.4)] mb-6 sm:mb-8"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)' }}>
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-black mb-6 sm:mb-8 uppercase tracking-tight font-mono px-2">
            {t("title")}
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-cyan-100 max-w-3xl mx-auto font-mono leading-relaxed px-4">
            {t("description")}
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24 md:py-32">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-cyan-500 border-t-transparent animate-spin shadow-[0_0_30px_rgba(56,189,248,0.6)]"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}></div>
              <RefreshCw className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-6 sm:mt-8 text-cyan-200 text-lg sm:text-xl font-mono uppercase tracking-wider">{t("loading")}</p>
            <div className="mt-4 sm:mt-6 flex space-x-2 sm:space-x-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(6,182,212,0.8)]" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(99,102,241,0.8)]" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-16 sm:py-24 md:py-32 px-4">
            <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900/50 backdrop-blur-xl border-2 border-purple-500/50 p-8 sm:p-10 md:p-12 max-w-lg mx-auto shadow-2xl shadow-purple-500/30"
              style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 25%, 95% 100%, 5% 100%, 0% 75%)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_20px_rgba(147,51,234,0.6)]"
                style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)' }}>
                <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <p className="text-purple-300 text-base sm:text-lg font-mono uppercase tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] p-3 sm:p-4 md:p-6 bg-slate-900/60 hover:border-cyan-400/70 transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-6 gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 min-w-0 flex-1">
                      <CryptoLogo coin={coin} size={window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 48 : 56} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-sm sm:text-base md:text-lg text-cyan-100 uppercase tracking-wide pr-2 font-mono truncate">{coin.name}</h4>
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

                  <div className="mb-4 sm:mb-6">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 tracking-tight font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] break-all">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-cyan-300 text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{t("currentPrice")}</span>
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-cyan-200 font-mono text-xs sm:text-sm uppercase tracking-wider flex-shrink-0">{t("movement")}</span>
                      <span className={`font-black text-base sm:text-lg font-mono flex-shrink-0 ${coin.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 sm:h-2 relative overflow-hidden rounded-full">
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

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-80 shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
    </section>
  )
}