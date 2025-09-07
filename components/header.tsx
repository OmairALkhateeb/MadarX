"use client"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false) // Close menu after clicking
    }
  }, [])

  const navItems = [
    { label: "الصفحة الرئيسية", targetId: "home" },
    { label: "من نحن", targetId: "about" },
    { label: "روابط التحميل", targetId: "downloads" },
    { label: "انضم إلينا", targetId: "join" },
  ]

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 bg-primary sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="شعار مدار X"
          className="h-14 w-auto mx-auto"
        />
      </div>

      {/* Navbar Links (Desktop) */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(item.targetId)}
            className="relative text-white text-lg font-medium transition-all duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost" // removes background & border
          className="text-white hover:text-purple-700 text-2xl px-4 py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.targetId)}
              className="text-white text-lg font-medium transition-colors duration-300 hover:text-yellow-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
