"use client"

import * as React from "react"
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion"

// ========================
// Shared data & helpers
// ========================
const steps = [
  { title: "سجّل بياناتك", desc: "املأ النموذج وحدّد مدينتك." },
  { title: "فعّل حسابك", desc: "ارفع المستندات المطلوبة واعتماد سريع." },
  { title: "ابدأ التوصيل", desc: "استلم الطلبات القريبة وابدأ الكسب." },
] as const

const stats = [
  { number: 50, text: "ألف", sub: "عميل موثوق" },
  { number: 30, text: "مدينة", sub: "تغطية داخل المملكة" },
  { number: 98, text: "%", sub: "رضا الشركاء" },
] as const

// Color tokens
const primary = "#6c4ba3"
const primaryDeep = "#5a3f8a"

// ========================
// Animated Counter
// ========================
function AnimatedNumber({
  value,
  duration = 2,
  start = 0,
}: {
  value: number
  duration?: number
  start?: number
}) {
  const count = useMotionValue(start)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  const ref = React.useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { amount: 0.3 }) // 👈 يتحقق كل مرة يدخل العنصر

  React.useEffect(() => {
    if (inView) {
      count.set(start) // 👈 يرجع للـ start
      const controls = animate(count, value, { duration })
      return controls.stop
    }
  }, [inView, value, duration, count, start])

  return (
    <motion.span ref={ref} className="inline-block">
      {rounded}
    </motion.span>
  )
}

// ========================
// Small building blocks
// ========================
const StepBadge: React.FC<{ index: number; tone?: "solid" | "deep" }> = ({
  index,
  tone = "solid",
}) => (
  <span
    className={[
      "grid place-items-center rounded-full text-white font-extrabold shadow-md",
      tone === "deep" ? "bg-[#5a3f8a]" : "bg-[#6c4ba3]",
    ].join(" ")}
    aria-hidden
  >
    {index}
  </span>
)

const StatCard: React.FC<{ number: number; text?: string; sub: string }> = ({
  number,
  text,
  sub,
}) => (
  <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-md text-center">
    <div className="text-2xl font-extrabold text-[color:var(--primary)]">
      <AnimatedNumber value={number} /> {text}
    </div>
    <div className="mt-1 text-slate-600 text-sm">{sub}</div>
  </div>
)

const MobileStatCard: React.FC<{
  number: number
  text?: string
  sub: string
}> = ({ number, text, sub }) => (
  <div className="rounded-xl bg-white p-3 text-center ring-1 ring-slate-200">
    <div className="text-base font-extrabold text-[color:var(--primary)]">
      <AnimatedNumber value={number} /> {text}
    </div>
    <div className="mt-0.5 text-slate-600 text-[12px] leading-5">{sub}</div>
  </div>
)

// ========================
// Main component
// ========================
export default function HowToStartSection() {
  return (
    <section
      dir="rtl"
      aria-label="كيف تبدأ خلال 3 خطوات"
      className="relative isolate py-16 md:py-32"
      style={
        {
          "--primary": primary,
          "--primary-deep": primaryDeep,
        } as React.CSSProperties
      }
    >
      {/* Background band */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="h-full w-full bg-gradient-to-bl from-[#6c4ba3] to-[#5a3f8a]" />
      </div>

      {/* Top diagonal */}
      <div className="absolute inset-x-0 -top-px leading-none z-[1]" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-[60px] sm:h-[80px] md:h-[100px] rotate-180"
        >
          <path
            d="M0,-2 L1440,100 L1440,100 L0,100 Z"
            fill="#ffffff"
            stroke="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div
        className="relative z-10 mx-auto px-4 md:px-6 text-center"
        style={{ maxWidth: "1600px" }}
      >
        {/* ===== Mobile layout ===== */}
        <div className="md:hidden relative mx-auto max-w-md ">
          <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden text-right">
            <header className="px-5 pt-8 pb-4 text-center">
              <h4 className="text-slate-900 text-xl font-extrabold tracking-tight">
                كيف تبدأ خلال 3 خطوات
              </h4>
              <p className="mt-1 text-slate-600 text-sm">
                ابدأ سريعًا عبر هذه الخطوات المختصرة
              </p>
            </header>

            <ol className="divide-y divide-slate-100">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 px-5 py-5 items-start">
                  <span className="mt-0.5 inline-grid h-8 w-8">
                    <StepBadge index={i + 1} />
                  </span>
                  <div className="min-w-0">
                    <h5 className="text-slate-900 font-semibold text-base leading-6 truncate">
                      {s.title}
                    </h5>
                    <p className="mt-1 text-slate-600 text-[13px] leading-6">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 px-5 py-5 bg-slate-50/60">
              {stats.map((item) => (
                <MobileStatCard key={item.sub} {...item} />
              ))}
            </div>

            {/* CTA */}
            <div className="px-5 pb-6">
              <a
                href="#join"
                className="block w-full rounded-xl bg-[color:var(--primary-deep)] px-4 py-3.5 text-center text-white text-sm font-semibold shadow-sm active:scale-[.99]"
              >
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>

        {/* ===== Desktop / Tablet layout ===== */}
        <div className="hidden md:block">
          <header>
            <h4 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              كيف تبدأ خلال 3 خطوات
            </h4>
            <p className="mt-3 text-white/85 text-base md:text-lg">
              خطوات بسيطة للانضمام والبدء فورًا
            </p>
          </header>

          {/* Steps */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={s.title}
                className="relative rounded-2xl bg-white p-6 md:p-7 shadow-xl text-right ring-1 ring-slate-200"
              >
                <div className="absolute -top-4 -start-4 h-10 w-10">
                  <StepBadge index={i + 1} tone="deep" />
                </div>
                <h5 className="font-bold text-slate-900">{s.title}</h5>
                <p className="mt-2 text-slate-600 text-sm leading-7">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3 text-center">
            {stats.map((item) => (
              <StatCard key={item.sub} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute inset-x-0 -bottom-px leading-none z-[1]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-[60px] sm:h-[80px] md:h-[100px]"
        >
          <defs>
            <linearGradient
              id="nextSectionBg"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#E9DFF7" />
              <stop offset="100%" stopColor="#F3EBFB" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1440,102 L1440,102 L0,102 Z"
            fill="url(#nextSectionBg)"
            stroke="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </section>
  )
}
