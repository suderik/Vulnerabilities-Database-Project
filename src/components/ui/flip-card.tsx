"use client";

import React from "react";
import { clsx } from "clsx";
import { BugIcon } from "@/components/icons";

type Icon = React.ComponentType<{
  size?: number | string;
  color?: string;
  className?: string;
}>;

export interface FlipCardProps {
  frontTitle?: string;
  backTitle?: string;
  backContent?: string;
  backIcon?: Icon;
  className?: string;
}

export default function FlipCard(props: FlipCardProps) {
  const {
    frontTitle = "Title of The Card",
    backTitle = "Flip Flop Cards",
    backContent = `Flip Flop Cards Content Lorem Ipsum has been the industry's standard dummy text ever since the 1500sFlip Flop Cards Content Lorem Ipsum has been the industry's standard dummy text ever since the 1500`,
    backIcon,
    className,
  } = props;

  const BackIcon = (backIcon ?? BugIcon) as Icon;
  const [flipped, setFlipped] = React.useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((s) => !s)}
      aria-pressed={flipped}
      className={clsx("relative w-[257px] h-[343px] select-none outline-none", className)}
      style={{
        perspective: 1000, 
        background: "transparent",
      }}
    >
      
      <div
        className="absolute inset-0 rounded-[18px] border"
        style={{
          borderColor: "var(--Main-default, #D4EA33)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 700ms cubic-bezier(0.2,0.8,0.2,1)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[18px] p-10 text-left" 
          style={{
            backfaceVisibility: "hidden",
            background: "rgba(18,26,33,0.96)", 
            boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="w-[159px]"
            style={{
              color: "var(--Main-default, #D4EA33)",
              textShadow: "0 4px 4px #000",
              fontFamily:
                'var(--font-display, "MuseoModerno"), "MuseoModerno", system-ui, sans-serif',
              fontSize: "38.81px",
              fontWeight: 600,
              lineHeight: "43px",
              margin: 0,
            }}
          >
            {frontTitle}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[18px] p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--Secondary-900, #394E2F)",
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.25)",
          }}
        >
          <div
            className="w-full"
            style={{
              display: "flex",
              alignItems: "flex-start",
              alignContent: "flex-start",
              gap: "31px 10px",
              alignSelf: "stretch",
              flexWrap: "wrap",
            }}
          >
            <div className="flex items-center gap-2 flex-[1_0_0]">
              <span
                style={{
                  color: "var(--Main-default, #D4EA33)",
                  fontFamily:
                    'var(--font-display, "MuseoModerno"), "MuseoModerno", system-ui, sans-serif',
                  fontSize: "13.33px",
                  fontWeight: 600,
                }}
              >
                {backTitle}
              </span>
              <BackIcon size={20} color="var(--Main-default, #D4EA33)" />
            </div>

            <p
              className="text-justify"
              style={{
                width: 218,
                color: "var(--Main-100, #F2F8C0)",
                fontFamily:
                  'var(--font-display, "MuseoModerno"), "MuseoModerno", system-ui, sans-serif',
                fontSize: "13.33px",
                fontWeight: 600,
                margin: 0,
              }}
            >
              {backContent}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
