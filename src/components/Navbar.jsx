import { useState, useEffect } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">
          <span className="nav__mark">{initials}</span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className={open ? 'nav__links nav__links--open' : 'nav__links'}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
