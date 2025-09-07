"use client"

import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

// Header updated to always use the theme primary color.
// - Top of page: solid bg-primary
// - On scroll: blurred glassy bg-primary/80
// - Active link underline, smooth scroll w/ offset, RTL, mobile drawer

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("home")
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef<HTMLDivElement | null>(null)
  const menuId = "mobile-nav"

  const navItems = [
    { label: "الصفحة الرئيسية", targetId: "home" },
    { label: "من نحن", targetId: "about" },
    { label: "روابط التحميل", targetId: "downloads" },
    { label: "انضم إلينا", targetId: "join" },
  ]

  // Smooth scroll with sticky-header offset
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id)
    if (!section) return

    const headerH = (headerRef.current?.offsetHeight ?? 64) + 12
    const targetTop = section.getBoundingClientRect().top + window.pageYOffset - headerH
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" })

    setIsOpen(false)
  }, [])

  // Update header style & active link on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 6)

      const headerH = (headerRef.current?.offsetHeight ?? 64) + 16
      const y = window.scrollY + headerH

      let current = navItems[0]?.targetId ?? "home"
      for (const item of navItems) {
        const el = document.getElementById(item.targetId)
        if (!el) continue
        if (y >= el.offsetTop) current = item.targetId
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkBase =
    "relative px-2 py-1 text-lg font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 rounded-md"

  return (
    <header
      ref={headerRef}
      dir="rtl"
      className={`sticky top-0 z-50 w-full backdrop-saturate-150 transition-all ${
        scrolled
          ? "bg-primary/80 backdrop-blur-2xl border-b border-white/10 shadow-lg"
          : "bg-primary border-b border-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="شعار مدار X"
            className="h-10 w-10    "
          />
         
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4" aria-label="التنقل الرئيسي">
          {navItems.map((item) => {
            const isActive = activeId === item.targetId
            return (
              <button
                key={item.targetId}
                onClick={() => scrollToSection(item.targetId)}
                className={`${linkBase} ${
                  isActive ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative inline-block">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-yellow-300"
                    />
                  )}
                </span>
              </button>
            )
          })}

          <Button
            onClick={() => scrollToSection("downloads")}
            className="ms-2 rounded-full px-5 py-2 text-base shadow-sm"
            variant="secondary"
          >
            حمِّل الآن
          </Button>
        </nav>

        {/* Mobile: Menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white hover:text-yellow-300 h-10 w-10 p-0"
            onClick={() => setIsOpen((o) => !o)}
            aria-controls={menuId}
            aria-expanded={isOpen}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="flex flex-col items-stretch gap-2 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`text-end w-full ${linkBase} ${
                    activeId === item.targetId
                      ? "text-yellow-300"
                      : "text-white/95 hover:text-yellow-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection("downloads")}
                className="mt-2 rounded-xl py-6 text-lg"
                variant="secondary"
              >
                حمِّل الآن
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// --- Notes ---
// • Customize your primary color via Tailwind theme or CSS variables (shadcn):
//   :root { --primary: 31 41 55; /* rgb values for bg-primary */ }
// • If your primary is very light and you need dark text, swap nav text classes to dark.
