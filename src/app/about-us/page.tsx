import Image from "next/image"; // Görsel eklediğinde aç
import LogosBar from "@/components/sections/LogosBar";
import PageChrome from "@/components/chrome/PageChrome";

const team = [
  { name: "Workers 1", role: "U/UX Designer", img: "/team/member-1.jpg", linkedin: "https://www.linkedin.com/in/username1" },
  { name: "Workers 2", role: "Computer Engineer", img: "/team/member-1.jpg", linkedin: "https://www.linkedin.com/in/username2" },
  { name: "Workers 3", role: "Frontend Developer", img: "/team/member-1.jpg", linkedin: "https://www.linkedin.com/in/username3" },
  { name: "Workers 4", role: "Menthor", img: "/team/member-1.jpg", linkedin: "https://www.linkedin.com/in/username4" },
];

export default function AboutPage() {
  return (
    <main className="relative px-6 md:px-10 lg:px-16 xl:px-24 py-10">
      <PageChrome /> 
     {/* 1) HERO / Giriş Cümlesi */}
        <section className="py-18">
          <div className="mx-auto max-w-[1180px] text-center">
            <h1
              className="
                text-[#D4EA33] font-[600] font-museo
                text-[34px] sm:text-[40px] md:text-[47.78px]
                leading-tight tracking-tight
                drop-shadow-[0_4px_9.9px_rgba(0,0,0,0.95)]
              "
            >
              We turn real-world vulnerabilities into clear, actionable learning.
            </h1>
          </div>
        </section>

      {/* 2) İkinci Metin */}
      <section className="py-0">
        <div className="mx-auto max-w-[1129px] min-h-[180px]">
          <div className="h-full w-full flex items-center justify-center text-center">
            <p
              className="
                text-[#FEF7CC] font-[550] font-museo
                text-[12px] sm:text-[16px] md:text-[24.65px]
                leading-snug
              "
            >
              This platform was created to make information on vulnerabilities more accessible
              and to raise awareness among users. Through our regularly updated content, we aim
              to contribute to cybersecurity knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* 3) Görsel Alanı (1065×581) */}
      <section className="py-8">
        <div className="flex justify-center">
          <figure
            className="
              relative flex w-full max-w-[1065px] h-[581px]
              items-center justify-center flex-shrink-0
              overflow-hidden rounded-[24px]
              border border-[#121A21] bg-[#0E1E22]
            "
          >
            {/* <Image src="/about/hero.jpg" alt="About Threx" fill className="object-cover" priority /> */}

            {/* Placeholder */}
            <div className="pointer-events-none text-center px-6">
              <p className="text-[#FEF5BF]/80 font-semibold">
                Add your image at <code className="text-[#D4EA33]">/public/about/hero.jpg</code>
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-[24px]" />
          </figure>
        </div>
      </section>

      {/* 4) Görselin Alt Başlığı */}
      <section className="py-4">
        <div className="mx-auto max-w-[586px] text-center">
          <h2
            className="
              font-museo font-[600]
              text-[#FEF7CC]
              text-[22px] sm:text-[32px] md:text-[39.81px]
              leading-none
            "
          >
            Workers &amp; Lorem Ipsum
          </h2>
        </div>
      </section>

      {/* 5) Ekip */}
      <section className="py-10">
        <div className="mx-auto font-museo max-w-[1180px]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-10 justify-items-center">
            {team.map((p) => (
              <li key={p.linkedin} className="text-center">
                <div className="group relative w-[220px] h-[220px]">
                  <img
                    src={p.img || "/placeholders/avatar.png"}
                    alt={`${p.name} profile photo`}
                    className="h-full w-full rounded-full object-cover ring-2 ring-[#FCBF44] shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                             transition duration-300 ease-out
                             group-hover:blur-sm group-hover:scale-[0.985]"
                  />
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} – LinkedIn`}
                    className="absolute inset-0 rounded-full flex items-center justify-center
                               bg-black/0 opacity-0
                               transition duration-300 ease-out
                               group-hover:opacity-100 group-hover:bg-black/35
                               focus-visible:opacity-100 focus-visible:bg-black/35 outline-none"
                  >
                    <span className="sr-only">Open LinkedIn</span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full
                                     bg-[#D4EA33] text-[#0E1E22] shadow-[0_0_0_3px_rgba(14,30,34,0.45)]
                                     transition-transform group-hover:scale-105">
                      {/* External link icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="[&_path]:stroke-current">
                        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 3h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>

                <h3 className="mt-4 text-[#D4EA33] font-semibold leading-tight">{p.name}</h3>
                <p className="mt-2 text-[#FEF5BF] text-sm font-medium">{p.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6) İş birlikçileri */}
      <section className="mt-16">
        <h3 className="text-center text-[#FCBF44] font-josephin font-[550] text-2xl mb-4">
          Partners &amp; Collaborators
        </h3>
        <LogosBar />
      </section>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </main>
  );
}
