import Link from "next/link";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 19V22" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.6" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" strokeWidth="1.6" />
      <circle cx="4" cy="4" r="2" strokeWidth="1.6" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
      <path d="M3 7l9 6 9-6" strokeWidth="1.6" />
    </svg>
  );
}

export default function Footer() {
  const columns: { items: { label: string; href: string }[] }[] = [
    {
      items: [
        { label: "Home", href: "/" },
        { label: "Chart 1", href: "/vulnerabilities" },
        { label: "Chart 2", href: "/learn" },
      ],
    },
    {
      items: [
        { label: "Vulnerabilities", href: "/vulnerabilities" },
        { label: "Table", href: "/vulnerabilities" },
        { label: "Database", href: "/vulnerabilities" },
      ],
    },
    {
      items: [
        { label: "Learn", href: "/learn" },
        { label: "Resources", href: "/learn/resources" },
        { label: "Blog", href: "/learn/blog" },
      ],
    },
    {
      items: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact", href: "/about-us#contact" },
      ],
    },
  ];

  return (
    <footer
      className="full-bleed"
      style={{
        background: "#18222B",
        boxShadow: "inset 0 4px 50px rgba(0,0,0,.25)",
      }}
    >
      {/* dış çerçeve: width:1440, h:332, padding:20 10, column, center, gap:10 */}
      <div className="mx-auto w-full max-w-[1440px] flex flex-col items-center gap-[10px] px-[10px] py-[20px]">
        {/* iç kısım: width:1152, padding:20 10, column, align-start, gap:20 */}
        <div className="w-full max-w-[1152px] flex flex-col items-start gap-[20px] px-[10px] py-[20px]">
          {/* başlık satırı: justify-between */}
          <div className="flex items-center justify-between w-full">
            {/* logo */}
            <div className="flex items-center">
              <img
                src="/threx-logo.svg"
                alt="Threx"
                className="h-[44px] w-auto object-contain"
                draggable={false}
              />
            </div>

            {/* bilgi metni */}
            <p
              className="text-center font-poppins"
              style={{
                color: "var(--Text-900, #e5dfb5ff)",
                fontSize: "17.2px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Information text about Product
            </p>

            {/* sosyal ikonlar */}
            <div className="flex items-center gap-5 text-[hsl(var(--green-500))]">
              <a href="https://github.com" aria-label="GitHub" className="hover:text-[hsl(var(--secondary-500))]">
                <GithubIcon className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[hsl(var(--secondary-500))]">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-[hsl(var(--secondary-500))]">
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* çizgi (radial gradient li svg) */}
          <div className="w-full">
            <svg width="100%" height="2" viewBox="0 0 1132 2" fill="none">
              <path
                d="M0 1H1132"
                stroke="url(#paint0)"
                strokeOpacity="0.2"
                strokeWidth="2"
              />
              <defs>
                <radialGradient id="paint0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(566 1.5) scale(566 0.5)">
                  <stop offset="0.322115" stopColor="#EBF5A1" />
                  <stop offset="1" stopColor="#D4EA33" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* link sütunları: 4 kolon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] w-full">
            {columns.map((col, i) => (
              <nav
                key={i}
                className="flex flex-col items-start gap-[24px] flex-[1_0_0]"
                aria-label={`Footer column ${i + 1}`}
              >
                {col.items.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="underline underline-offset-4 decoration-1 text-[hsl(var(--text-900))] hover:text-[hsl(var(--green-500))] font-poppins"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
