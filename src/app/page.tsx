// src/app/page.tsx
import Link from "next/link";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DatabaseIcon } from "@/components/icons";
import Donut7Days from "@/components/charts/Donut7Days";
import CvssBars from "@/components/charts/CvssBars";
import ChartCaption from "@/components/charts/ChartCaption";
import LogosBar from "@/components/sections/LogosBar";
import FeatureRow from "@/components/sections/FeatureRow";
import FlipCard from "@/components/ui/flip-card";
import Last7DaysSection from "@/components/sections/Last7Days";
export default function Page() {
  return (
    <>
      {/* SLOGAN BAR — header'a yapışık */}
      <section className="w-full" style={{ background: "hsl(var(--orange-600))" }}>
        <div className="mx-auto w-full max-w-[1440px] px-[10px]">
          <div className="marquee">
            <div className="marquee__track py-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <span className="slogan" key={i}>Learn • Detect • Secure</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HERO — full-bleed grid, içerik blok olarak ortada, metinler solda */}
      <section className="w-full">
        <div className="hero-grid full-bleed flex items-center">
          {/* 1440px container */}
          <div className="mx-auto w-full max-w-[1440px] px-[10px]">
            {/* İçerik bloğu: sayfada ortalı, metinler solda */}
            <div className="hero-content w-full max-w-[1154px] mx-auto text-left">
              {/* Başlık */}
              <h1
                style={{
                  width: "min(902px, 100%)",
                  height: 180,
                  flexShrink: 0,
                  color: "var(--Main-default, #D4EA33)",
                  textShadow: "0 4px 9.9px #000",
                  fontFamily:
                    'var(--font-display, "MuseoModerno"), "MuseoModerno", system-ui, sans-serif',
                  fontSize: "clamp(28px, 5vw, 47.78px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "clamp(36px, 6.4vw, 64px)",
                  margin: 0,
                }}
              >
                Stay Ahead by Tracking the Open Vulnerability Index
              </h1>

              {/* 2. metin */}
              <p
                style={{
                  width: "min(1154px, 100%)",
                  color: "var(--Text-400, #FEF7CC)",
                  fontFamily:
                    'var(--font-display, "MuseoModerno"), "MuseoModerno", system-ui, sans-serif',
                  fontSize: "clamp(16px, 2.2vw, 27.65px)",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "1.25",
                  margin: "8px 0 0 0",
                }}
              >
                View overall statistics on vulnerabilities and quickly review recent threats.
                Use filtering and search tools to easily navigate the database
              </p>


              {/* CTA — ikon sağda, rengi primary-900 */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  href="/vulnerabilities"
                  className="inline-flex items-center justify-center gap-[6px] font-poppins font-semibold select-none"
                  style={{
                    padding: "6px 16px",
                    borderRadius: 10,
                    background: "var(--Main-default, #D4EA33)",
                    boxShadow: "inset 0 4px 10.6px rgba(0,0,0,0.51)",
                    color: "#000",
                  }}
                ><br />
                  <span>Browse Vulnerabilities</span>
                  <DatabaseIcon
                    size={20}
                    color={"hsl(var(--primary-900))"}
                    className="text-[hsl(var(--primary-900))]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8"
        style={{ marginTop: "clamp(58px, 10vh, 180px)" }} >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {/* 1. grafik + açıklama */}
            <div className="flex flex-col items-center gap-4">
              <div className="dotted-frame">
                <Donut7Days />
              </div>
              <ChartCaption>
                Track recent threats by reviewing the number and types of vulnerabilities
                reported this week
              </ChartCaption>
            </div>

            {/* 2. grafik + açıklama */}
            <div className="flex flex-col items-center gap-4">
              <div className="dotted-frame">
                <CvssBars />
              </div>
              <ChartCaption>
                Identify top targets by exploring which systems were most impacted by recent threats
              </ChartCaption>
            </div>
          </div>
        </div>
      </section>
      <LogosBar /><br /><br /><br />

      {/* ANALYTICS/FEATURES – grid arkaplan + metin hover */}
      <section className="relative py-20">
        {/* grid background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* 1) temel grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                `linear-gradient(to right, rgba(212,234,51,0.20) 1px, transparent 1px),
           linear-gradient(to bottom, rgba(212,234,51,0.20) 1px, transparent 1px)`,
              backgroundSize: "36px 36px, 36px 36px",
              backgroundPosition: "top center",
            }}
          />
          {/* 2) kenarlarda yumuşatma (mask) */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 95%)",
              maskImage:
                "radial-gradient(ellipse at center, black 60%, transparent 95%)",
              background:
                "radial-gradient(ellipse at center, rgba(212,234,51,0.08), transparent 65%)",
            }}
          />
        </div>

        {/* içeriğiniz */}
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {/* Solda chart / sağda metin (örnek) */}
          <div className="rounded-xl bg-white/10 h-[300px]"></div>

          <div className="flex items-center">
            <p className="
          text-[#FEF5BF] text-2xl leading-9 font-semibold
          transition-all duration-300 ease-out will-change-transform
          hover:scale-[1.02] hover:drop-shadow-[0_10px_24px_rgba(252,191,68,0.25)]
          motion-reduce:transition-none motion-reduce:hover:scale-100
        ">
              Gain a data-driven overview of reported vulnerabilities across platforms. Our
              interactive charts highlight frequency, severity, and evolving patterns…
            </p>
          </div>

          {/* Alttaki metin + karşı chart */}
          <div className="flex items-center order-2 lg:order-none">
            <p className="
          text-[#FEF5BF] text-2xl leading-9 font-semibold
          transition-all duration-300 ease-out will-change-transform
          hover:scale-[1.02] hover:drop-shadow-[0_10px_24px_rgba(252,191,68,0.25)]
          motion-reduce:transition-none motion-reduce:hover:scale-100
        ">
              Explore critical exposure metrics by platform and category. This view empowers
              security teams to pinpoint attack surfaces, prioritize high-risk areas…
            </p>
          </div>

          <div className="rounded-xl bg-white/10 h-[300px]"></div>
        </div>
      </section>
      <br /><br /><br /><br />
      <section className="py-10">
        <p className="intro-spot font-josefin" tabIndex={0}>
          A summarized snapshot of vulnerability data covering critical severity, platform
          exposure, and exploit trends. Designed to support fast, informed decision-making.
        </p>
      </section>
      <section className="py-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-fit mx-auto grid-cols-2 md:grid-cols-4 gap-10">
            <FlipCard />
            <FlipCard frontTitle="Zero Day" />
            <FlipCard
              frontTitle="Ransom-Ware"
              backTitle="Critical Things"
              backContent="High-risk families that propagate rapidly across networks. Keep backups and segment networks to reduce blast radius."
            />
            <FlipCard frontTitle="How to Use Botnet" />
          </div>
        </div>
      </section><br /><br /><br />
      <Last7DaysSection /> <br /><br /><br /><br /><br /><br />

    </>
  );
}
