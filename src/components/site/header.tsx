import Link from "next/link";
import { clsx } from "clsx";
import LearnMenu from "./LearnMenu"; 

export default function Header() {
  return (
    <header
      className={clsx("w-full flex flex-col items-center gap-[10px] px-[10px] sticky top-0 z-40")}
      style={{ background: "hsl(var(--darker-900) / 0.84)", backdropFilter: "saturate(180%) blur(6px)" }}
    >
      <div className="w-full max-w-[1440px]">
        <div className="flex items-center justify-between min-h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Threx home">
            <div className="flex items-center" style={{ width: 248, height: 88, padding: "16px 56px 16px 20px" }}>
              <img src="/threx-logo.svg" alt="Threx" className="block h-full w-auto object-contain" draggable={false} />
            </div>
          </Link>

          {/* Nav */}
          <nav aria-label="Main">
            <ul className="flex items-center gap-[10px] overflow-visible">
              <li>
                <Link
                  href="/vulnerabilities"
                  className={clsx(
                    "flex items-center justify-center px-[20px] py-[7px] gap-[10px]",
                    "font-poppins font-semibold",
                    "text-[clamp(12px,1.2vw,14px)]",
                    "text-[hsl(var(--green-500))] hover:text-[hsl(var(--secondary-500))] active:text-[hsl(var(--secondary-500))]"
                  )}
                >
                  Vulnerabilities
                </Link>
              </li>

              {/* Learn dropdown */}
              <li>
                <LearnMenu />
              </li>

              <li>
                <Link
                  href="/about-us"
                  className={clsx(
                    "flex items-center justify-center px-[20px] py-[7px] gap-[10px]",
                    "font-poppins font-semibold",
                    "text-[clamp(12px,1.2vw,14px)]",
                    "text-[hsl(var(--green-500))] hover:text-[hsl(var(--secondary-500))] active:text-[hsl(var(--secondary-500))]"
                  )}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
