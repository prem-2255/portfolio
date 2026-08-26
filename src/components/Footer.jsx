import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name} — built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}
