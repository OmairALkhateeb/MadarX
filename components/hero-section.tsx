"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection({
  onPrimaryCta,
  onSecondaryCta,
}: {
  onPrimaryCta?: () => void
  onSecondaryCta?: () => void
}) {
  const photos = ["/7.png", "/h2.png", "/h3.png", "/h4.png"]

  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    const id = setInterval(() => {
      setIndex((prev) => {
        setPrevIndex(prev)
        return (prev + 1) % photos.length
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section dir="rtl" className="relative overflow-hidden bg-primary text-white">
      {/* background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 100% -10%, rgba(255,255,255,0.25), transparent), radial-gradient(800px 400px at 0% 110%, rgba(255,255,255,0.18), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-24 lg:py-28">
        <div dir="ltr" className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          {/* IMAGE LEFT */}
          <div className="relative mx-auto w-full max-w-[640px]">
            {/* isolate creates a new stacking context so z-index works predictably */}
            <div className="relative isolate h-[18rem] sm:h-[22rem] md:h-[26rem] lg:h-[32rem] rounded-2xl">

{/* BRIGHT WHITE SPOTLIGHT (smaller + tighter) */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 z-0 rounded-2xl blur-[50px] opacity-85"
  style={{
    background:
      "radial-gradient(40% 50% at 50% 55%, rgba(255,255,255,1), rgba(255,255,255,0))",
  }}
/>

{/* EXTRA SOFT WASH (minimal, very close to image) */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-4 z-0 rounded-[999px] blur-[60px] opacity-50"
  style={{ background: "white" }}
/>


              {/* current image (above glow) */}
              <Image
                key={photos[index]}
                src={photos[index]}
                alt="صورة توصيل"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                className="relative z-10 rounded-2xl object-contain transition-opacity duration-700 ease-in-out"
                style={{ opacity: 1, filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.25))" }}
              />

              {/* previous image for crossfade */}
              {prevIndex !== null && (
                <Image
                  key={`prev-${photos[prevIndex]}`}
                  src={photos[prevIndex]}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                  className="relative z-10 rounded-2xl object-contain transition-opacity duration-700 ease-in-out"
                  style={{ opacity: 0 }}
                />
              )}
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="relative w-full max-w-7xl flex md:block justify-end py-8">
            <div className="w-full text-white text-center md:text-right pt-6 sm:pt-8 md:pt-10 flex flex-col items-center md:items-end">
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg">
                سريع • آمن • أينما كنت
              </span>

              <h1 className="font-extrabold leading-[1.15] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                خدمة توصيل موثوقة تلبي احتياجاتك
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 max-w-2xl text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
                أرسل كل ما تريد، إلى أي مكان وفي أي وقت — بضغطة زر.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-gray-200">
                <span>⭐ خدمة عملاء 24/7</span>
                <span>⚡ تتبع فوري للطلبات</span>
              </div>

              {(onPrimaryCta || onSecondaryCta) && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {onPrimaryCta && (
                    <button
                      onClick={onPrimaryCta}
                      className="rounded-xl bg-white text-primary font-semibold px-5 py-3 text-sm sm:text-base hover:opacity-90 transition"
                    >
                      ابدأ الآن
                    </button>
                  )}
                  {onSecondaryCta && (
                    <button
                      onClick={onSecondaryCta}
                      className="rounded-xl border border-white/60 text-white font-semibold px-5 py-3 text-sm sm:text-base hover:bg-white/10 transition"
                    >
                      كيف تعمل؟
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* bottom diagonal */}
      <div className="absolute inset-x-0 bottom-0 leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block h-[60px] sm:h-[80px] md:h-[100px] w-full"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,100 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
