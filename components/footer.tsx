"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Dir = "rtl" | "ltr";

export function Footer({ dir = "rtl" as Dir }) {
  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { name: "الرئيسية", targetId: "home" },
    { name: "عن التطبيق", targetId: "about" },
    { name: "تحميل التطبيق", targetId: "downloads" },
    { name: "انضم إلينا", targetId: "join" },
  ];

  // Direction-aware utilities
  const isRTL = dir === "rtl";
  const textAlign = isRTL ? "text-right" : "text-left";
  const brandAlign = isRTL ? "md:items-start" : "md:items-start"; // brand stays at start
  const navAlign = "items-center"; // centered on mobile
  const socialAlign = isRTL ? "md:items-end" : "md:items-end"; // align end on desktop
  const bottomJustify = "md:justify-between";
  const policyRowOrder = useMemo(() => (isRTL ? "" : ""), [isRTL]); // reserved if you later swap order

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6" dir={dir}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
          {/* Brand */}
          <div className={`flex flex-col items-center ${brandAlign}`}>
            <div className="flex items-center gap-3 text-white text-2xl font-bold">
              <Image
                src="/logo.png"
                alt="مدار Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span>مدار</span>
            </div>
            <p
              className={`mt-3 text-sm text-gray-400 max-w-xs text-center md:text-start ${textAlign}`}
            >
              تطبيق التوصيل الأسرع في السعودية. اطلب، أرسل، وتابع كل شيء بسهولة.
            </p>
          </div>

          {/* Navigation */}
          <div className={`flex flex-col ${navAlign}`}>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              روابط سريعة
            </h4>
            <ul className="grid grid-cols-1 xs:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              {navLinks.map((item) => (
                <li key={item.targetId}>
                  <button
                    onClick={() => scrollToSection(item.targetId)}
                    className="hover:text-violet-400 transition bg-transparent border-0 cursor-pointer py-1.5"
                    aria-label={`اذهب إلى ${item.name}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className={`flex flex-col items-center ${socialAlign}`}>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">
              تابعنا
            </h4>
            <div className="flex gap-4">
              {/* Replace # with real links/icons */}
              <a
                href="#"
                aria-label="Twitter"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.48 8.48 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.3 3.87A12.04 12.04 0 0 1 3.15 4.7a4.23 4.23 0 0 0 1.31 5.66c-.66-.02-1.28-.2-1.83-.5v.05a4.24 4.24 0 0 0 3.4 4.16c-.31.08-.64.12-.98.12-.24 0-.48-.01-.71-.05a4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.51 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18-.01-.36-.02-.54A8.63 8.63 0 0 0 24 5.6a8.44 8.44 0 0 1-2.54.7Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 .002 5.998A3 3 0 0 0 12 9Zm5.5-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13 22v-8h3l1-3h-4V9a1 1 0 0 1 1-1h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v8h3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className={`mt-8 flex flex-col ${bottomJustify} items-center gap-4 md:flex-row text-sm text-gray-500`}
          >
          <div className={`${textAlign}`}>
          © ٢٠٢٤ مدار. جميع الحقوق محفوظة.
          </div>

          <div className={`flex flex-wrap gap-4 md:gap-6 ${policyRowOrder}`}>
            {/* Link to /about since your privacy policy is there */}
            <Link href="/about" className="hover:text-violet-400 transition">
              سياسة الخصوصية
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
