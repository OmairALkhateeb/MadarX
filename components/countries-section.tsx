"use client"

import { motion } from "framer-motion"

export function CountriesSection() {
  const countries = [
    "عنيزة", "الخرج", "ينبع", "الباحة", "القنفذة",
    "الدلم", "بلجرشي", "بيشة", "بارق", "ذهبان",
    "الدرعية", "ضباء", "دومة الجندل", "دوادمي",
    "فرسان", "قطغات", "غويّية", "القويعية", "حوطات سدير",
  ]

  return (
    <section
      dir="rtl"
      className="relative bg-primary text-white overflow-hidden"
      aria-label="الأماكن التي نوصل إليها"
    >
      {/* ✅ Top diagonal — ثابت */}
      <div className="absolute inset-x-0 -top-px leading-none z-[1]" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="block w-full h-[60px] sm:h-[80px] md:h-[100px]"
        >
          <path
            d="M0,102 L1440,-4 L1440,-4 L0,-4 Z"
            fill="white"
            stroke="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ✅ Bottom diagonal — ثابت */}
      <div className="absolute inset-x-0 -bottom-px leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="block h-[100px] w-full"
        >
          <path d="M0,102 L1440,0 L1440,120 L0,102 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ✅ Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-16 py-32 text-center">
        <div className="mb-8">
          <img
            src="/5.png"
            alt="Delivery icon"
            className="mx-auto mb-4 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 object-contain"
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          الأماكن التي نوصل إليها
        </h2>

        {/* ✅ Cities with slow classic وميض animation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 space-x-reverse">
          {countries.map((country, index) => (
            <motion.span
              key={index}
              className="
                bg-white text-black
                px-4 py-1.5 text-sm
                sm:px-6 sm:py-2 sm:text-base
                md:px-8 md:py-2.5 md:text-lg
                lg:text-xl
                rounded-full font-medium select-none
              "
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 3,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(255,255,255,0.6)",
              }}
            >
              {country}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
