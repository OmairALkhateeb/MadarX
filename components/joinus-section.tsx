"use client";

import { Button } from "@/components/ui/button";
import {
  Truck, Store, Clock, Wallet, MapPin, CheckCircle2, ArrowLeft,
} from "lucide-react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

type Dir = "rtl" | "ltr";

export function JoinUsSection({
  dir = "rtl",
  onJoinCourier,
  onJoinMerchant,
}: {
  dir?: Dir;
  onJoinCourier?: () => void;
  onJoinMerchant?: () => void;
}) {
  const primary = "#6c4ba3";
  const cardBackground = "linear-gradient(135deg, #E9DFF7 0%, #F3EBFB 100%)";
  const prefersReducedMotion = useReducedMotion();

  // Observe the grid container
  const gridRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(gridRef, {
    margin: "0px 0px -10% 0px", // start a bit before fully in view
    amount: 0.25,               // ~25% visible
  });

  // Parent container variants for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  // Card animation: fade + lift + de-blur
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 24,
      scale: prefersReducedMotion ? 1 : 0.98,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: prefersReducedMotion
        ? { duration: 0.2 }
        : { type: "spring", stiffness: 140, damping: 18, mass: 0.6 },
    },
  };

  // Optional: subtle opposite slides in RTL/LTR (uncomment and apply below if you like)
  // const leftSlide = {
  //   hidden: { opacity: 0, x: prefersReducedMotion ? 0 : (dir === "rtl" ? 24 : -24), y: prefersReducedMotion ? 0 : 16 },
  //   visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  // };
  // const rightSlide = {
  //   hidden: { opacity: 0, x: prefersReducedMotion ? 0 : (dir === "rtl" ? -24 : 24), y: prefersReducedMotion ? 0 : 16 },
  //   visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
  // };

  return (
    <section
      dir={dir}
      className="relative overflow-hidden bg-white py-20 md:py-28"
      aria-label="انضم إلينا"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-4 font-bold tracking-tight text-slate-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            انضم إلى شبكة <span style={{ color: primary }}>مدار</span> للتوصيل
          </h2>
          <p className="mt-4 text-slate-600 text-lg md:text-xl leading-8">
            اربح دخلًا إضافيًا عبر توصيل الطلبات بين الناس في أنحاء السعودية.
            اختر أوقاتك، وابدأ خلال دقائق.
          </p>
        </div>

        {/* Two paths */}
        <motion.div
          ref={gridRef}
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}   // re-triggers on each enter
          viewport={{ amount: 0.25 }}               // not using once; we control with animate
        >
          {/* Courier card */}
          <motion.div
            variants={cardVariants}  // or leftSlide
            className="relative rounded-3xl shadow-sm overflow-hidden will-change-transform will-change-filter"
            style={{ background: cardBackground }}
          >
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(108,75,163,0.12)", color: primary }}
                >
                  <Truck className="h-6 w-6" />
                </div>
                <span className="text-sm text-slate-500">للسائقين</span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                انضم كسائق توصيل
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>اختر الأوقات التي تناسبك — حرية كاملة في الجدول.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wallet className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>عوائد ممتازة + مكافآت على الأداء والالتزام.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>طلبات قريبة من موقعك داخل مدنك المفضلة.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["هوية سارية", "رخصة/تأمين", "سيارة/دراجة", "عمر 18+"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-xs font-medium text-slate-700"
                    style={{ background: "rgba(108,75,163,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={onJoinCourier}
                  className="h-12 rounded-xl px-5 text-base font-semibold shadow-sm hover:shadow transition"
                  style={{ background: primary, color: "white" }}
                >
                  ابدأ كسائق
                  <ArrowLeft className="mr-2 h-4 w-4 rtl:rotate-180" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Merchant/partner card */}
          <motion.div
            variants={cardVariants}  // or rightSlide
            className="relative rounded-3xl shadow-sm overflow-hidden will-change-transform will-change-filter"
            style={{ background: cardBackground }}
          >
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(108,75,163,0.12)", color: primary }}
                >
                  <Store className="h-6 w-6" />
                </div>
                <span className="text-sm text-slate-500">للتجّار والشركاء</span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                انضم كشريك/تاجر
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>توصيل سريع وموثوق لعملائك داخل السعودية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>استلام فوري وتتبع لحظي للطلبات.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wallet className="h-5 w-5 mt-0.5" style={{ color: primary }} />
                  <span>رسوم مرنة تناسب مختلف أحجام الطلبات.</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["سجل تجاري/متجر", "عنوان الاستلام", "وسيلة تواصل"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-xs font-medium text-slate-700"
                    style={{ background: "rgba(108,75,163,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={onJoinMerchant}
                  variant="outline"
                  className="h-12 rounded-xl px-5 text-base font-semibold border"
                  style={{ borderColor: primary, color: primary }}
                >
                  ابدأ كشريك
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
