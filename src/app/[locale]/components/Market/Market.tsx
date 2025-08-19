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
    } catch {
      setError(t("errorFetch"))
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

    // Define logos that are completely white and need colored backgrounds
    const whiteLogos: { [key: string]: string } = {
      // Remove DOT and AVAX - let them display naturally
      'LINK': 'bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700', // Chainlink (if white)
      'UNI': 'bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600', // Uniswap (if white)
    }

    // Define symbols that have white backgrounds but aren't completely white
    const hasWhiteBackground = ['USDT', 'USDC', 'DAI'].includes(coin.symbol.toUpperCase())
    
    // Check if this coin needs a colored background
    const needsColoredBg = whiteLogos[coin.symbol.toUpperCase()]

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-white font-black shadow-2xl border-2 border-cyan-400/50 rounded-full"
          style={{ width: size, height: size }}
        >
          <span className="text-xs font-mono">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div
        className="relative overflow-hidden shadow-2xl rounded-full"
        style={{ width: size, height: size }}
      >
        {/* Colored background for completely white logos */}
        {needsColoredBg && (
          <div 
            className={`absolute inset-0 rounded-full ${needsColoredBg}`}
            style={{ zIndex: 1 }}
          />
        )}
        
        {/* Dark background for logos with white backgrounds */}
        {hasWhiteBackground && !needsColoredBg && (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-full"
            style={{ zIndex: 1 }}
          />
        )}

        <Image
          src={logoSrc}
          width={size}
          height={size}
          alt={`${coin.name || coin.symbol} logo`}
          className={`object-cover h-full relative rounded-full ${
            hasWhiteBackground && !needsColoredBg
              ? 'mix-blend-multiply z-10 brightness-110 contrast-125' 
              : needsColoredBg
              ? 'z-10 p-2' // Add padding for white logos on colored backgrounds
              : ''
          }`}
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="py-14 sm:py-20 border-b-2  mx-auto border-gray-200 bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-screen relative overflow-hidden">
      {/* Cyberpunk Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />

      {/* Neon Orbs */}
      <div className="absolute top-1/4 left-1/6 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-conic from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-gradient-conic from-green-400 via-blue-500 to-cyan-500 rounded-full blur-3xl opacity-25 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />

      <div className="container mx-auto px-3 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border-2 border-cyan-400/40 text-[10px] sm:text-sm font-mono uppercase tracking-widest text-cyan-300 mb-5 sm:mb-6"
            style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)" }}
          >
            <Activity className="w-3 h-3 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <span>{t("badge")}</span>
          </div>

          <h3 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-black mb-4 sm:mb-6 uppercase tracking-tight font-mono">
            {t("title")}
          </h3>

          <p className="text-sm sm:text-lg text-cyan-100 max-w-2xl sm:max-w-3xl mx-auto font-mono leading-relaxed">
            {t("description")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 sm:py-32">
            <div className="relative">
              <div
                className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 border-4 border-cyan-500 border-t-transparent animate-spin"
                style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }}
              />
              <RefreshCw className="w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8 text-cyan-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-5 text-cyan-200 text-sm sm:text-lg font-mono uppercase tracking-wider">{t("loading")}</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 sm:py-32">
            <p className="text-red-300 text-sm sm:text-lg font-mono uppercase tracking-wide">{error}</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative min-w-[280px] w-full bg-white/5 hover:border-cyan-400/70 transition-all duration-500 hover:scale-[1.03] sm:hover:scale-105 overflow-hidden p-4 sm:p-6 shadow-2xl hover:shadow-cyan-500/30"
                style={{
                  clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
                      <CryptoLogo coin={coin} size={48} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-black text-sm sm:text-lg text-cyan-100 uppercase tracking-wide font-mono truncate">{coin.name}</h4>
                        <p className="text-cyan-400/80 text-xs sm:text-sm font-mono uppercase">{coin.symbol}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-xs sm:text-sm font-mono whitespace-nowrap ml-2 ${coin.change >= 0 ? "text-green-300" : "text-red-300"}`}>
                      {coin.change >= 0 ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                      {formatChange(coin.change)}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <p className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2 tracking-tight font-mono">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-cyan-300 text-xs sm:text-sm font-mono uppercase flex items-center gap-1 sm:gap-2">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                      {t("currentPrice")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
    </section>
  )
}