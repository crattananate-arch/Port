const NAV_ITEMS = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="bg-white/90 backdrop-blur-md border border-black/5 shadow-sm rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm font-medium text-ink-secondary hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
