"use client";


import { useState } from "react";

export default function SubscribeCard() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative mx-auto my-16 w-full max-w-[1140px]">
      <div className="relative isolate">
        {/* Statik (dönmeyen) gradient border */}
        <span aria-hidden className="absolute inset-0 rounded-[40px] animated-gradient-border pointer-events-none" />

        <div className="relative rounded-[36.5px] bg-[#2B3D4E] px-6 py-10 sm:px-10">
          <h2 className="text-center font-[600] font-museo text-[47.78px] leading-none text-[#FCBF44] drop-shadow-[0_3px_0_rgba(0,0,0,0.55)]">
            Subscribe to Our Blog for New Updates
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex justify-center"
          >
            <div className="flex h-[50px] w-full max-w-[610px] items-center rounded-[10px] border border-[#88BA70] bg-[#143740] px-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe with e-mail address"
                className="mr-2 w-full bg-transparent text-[16px] font-semibold text-[#FEF5BF] placeholder-[#FEF5BF]/80 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-6 w-6 items-center justify-center rounded border border-[#D4EA33] text-[#D4EA33] transition hover:bg-[#D4EA33] hover:text-[#0E1E22]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .animated-gradient-border{
          padding: 7px;                     
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;

          background:
            conic-gradient(
              from 0deg,
              #121A21 0deg,
              #1a2a33 60deg,
              #121A21 90deg,
              #88BA70 120deg,
              #121A21 170deg,
              #2b3d4e 210deg,
              #121A21 240deg,
              #FCBF44 280deg,
              #121A21 330deg,
              #1a2a33 360deg
            );

          border-radius: 40px;
          filter: drop-shadow(0 2px 0 rgba(0,0,0,.35));
          opacity: .9;
          /* animation: none – hiçbir dönüş yok */
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-border { /* zaten animasyon yok */ }
        }
      `}</style>
    </section>
  );
}
