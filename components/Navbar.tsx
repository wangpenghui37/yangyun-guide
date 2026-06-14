'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',            label: '首页',     en: 'HOME' },
  { href: '/characters',  label: '角色图鉴', en: 'CHARACTERS' },
  { href: '/weapons',     label: '武器攻略', en: 'WEAPONS' },
  { href: '/bosses',      label: 'BOSS秘典', en: 'BOSSES' },
  { href: '/regions',     label: '地区探索', en: 'REGIONS' },
  { href: '/guide',       label: '新手指南', en: 'GUIDE' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="border-b border-ink-600"
        style={{ background: 'rgba(13,11,9,0.92)', backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 flex items-center justify-center border border-cinnabar-500 text-cinnabar-400"
              style={{ fontFamily: 'var(--font-zcool)', fontSize: '16px' }}
            >
              燕
            </div>
            <span
              className="text-parchment-100 tracking-widest text-sm hidden sm:block"
              style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.2em' }}
            >
              燕云十六声
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-1.5 text-xs tracking-widest transition-colors duration-200 group
                    ${active
                      ? 'text-cinnabar-400'
                      : 'text-parchment-300 hover:text-parchment-100'
                    }`}
                  style={{ fontFamily: 'var(--font-zcool)', letterSpacing: '0.15em' }}
                >
                  {l.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-cinnabar-500" />
                  )}
                </Link>
              )
            })}
          </nav>

          <button
            className="md:hidden text-parchment-300 p-2"
            onClick={() => setOpen(!open)}
            aria-label="菜单"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {open
                ? <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                : <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              }
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-ink-600 py-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm tracking-widest
                  ${pathname === l.href ? 'text-cinnabar-400 bg-ink-700' : 'text-parchment-300'}`}
                style={{ fontFamily: 'var(--font-zcool)' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
