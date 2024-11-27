'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const navItems = ['Research', 'Publications', 'Education', 'Skills', 'Contact']

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 neon-text">
          Xurui Liu
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-md">
          {navItems.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
