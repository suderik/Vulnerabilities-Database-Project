// src/components/blog/SubscribeCard.tsx
"use client";

import { useState } from "react";

export default function SubscribeCard() {
    const [email, setEmail] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: submit logic
    };

    return (
        <section className="mx-auto my-12 w-full max-w-[1140px]">
            <div className="rounded-[40px] border-[3px] border-[#121A21]">
                <div className="rounded-[33px] bg-[#2B3D4E] px-6 py-10 sm:px-10">
                    <h2 className="text-center font-[600] font-museo text-[47.78px] leading-none text-[#FCBF44]
                        drop-shadow-[0_3px_0_rgba(0,0,0,0.55)]
                        md:drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
                        Subscribe to Our Blog for New Updates
                    </h2>

                    <form onSubmit={onSubmit} className="mt-6 flex justify-center">
                        {/* INPUT WRAPPER — hover & focus-within'da #B4AE88 */}
                        <div
                            className="
                group relative flex h-[50px] w-full max-w-[610px] items-center
                rounded-[8px] border border-[#88BA70] bg-[#143740] px-4
                transition-colors
                hover:border-[#B4AE88] focus-within:border-[#B4AE88]
              "
                        >
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
                                className="
                  inline-flex h-6 w-6 items-center justify-center rounded
                  border border-[#D4EA33] text-[#D4EA33] transition
                  hover:bg-[#D4EA33] hover:text-[#0E1E22]
                "
                            >
                                {/* check icon */}
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
        </section>
    );
}
