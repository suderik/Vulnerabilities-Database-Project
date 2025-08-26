// src/components/ui/button.tsx
import * as React from "react";
import { clsx } from "clsx";

type Size = "sm" | "md" | "lg";
type IconComponent = React.ElementType<{ size?: number | string; color?: string; className?: string }>;

const SIZE_CLASS: Record<Size, string> = {
  sm: "inline-flex items-center justify-center py-[3.5px] px-[11px] gap-[2px] rounded-[10px] text-[13px]",
  md: "inline-flex items-center justify-center py-[5px]   px-[13px] gap-[3px]  rounded-[10px] text-[14px]",
  lg: "inline-flex items-center justify-center py-[6px]   px-[16px] gap-[3px]  rounded-[10px] text-[15px]",
};
const ICON_SIZE: Record<Size, number> = { sm: 16, md: 20, lg: 20 };

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  size?: Size;
  leftIcon?: IconComponent;
  rightIcon?: IconComponent;
  iconClassName?: string;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className, size = "md", leftIcon: LeftIcon, rightIcon: RightIcon, iconClassName, children, disabled, href, ...props }, ref) => {
    const iconSize = ICON_SIZE[size];
    const classes = clsx(
      // 🔹 Artık Poppins
      "font-poppins font-semibold select-none transition-none",
      // renk durumları
      "bg-[#D4EA33] text-black",
      "hover:bg-[#121A21] hover:text-green-500",
      "active:bg-[#1F2B37] active:text-white",
      "disabled:bg-[#556471] disabled:text-white disabled:border disabled:border-black disabled:cursor-not-allowed disabled:pointer-events-none",
      SIZE_CLASS[size],
      className
    );

    if (href) {
      return (
        <a ref={ref as any} href={href} aria-disabled={disabled || undefined} className={classes} {...(props as any)}>
          {LeftIcon ? <LeftIcon size={iconSize} color="currentColor" className={clsx("shrink-0", iconClassName)} /> : null}
          {children}
          {RightIcon ? <RightIcon size={iconSize} color="currentColor" className={clsx("shrink-0", iconClassName)} /> : null}
        </a>
      );
    }

    return (
      <button ref={ref as any} disabled={disabled} className={classes} {...props}>
        {LeftIcon ? <LeftIcon size={iconSize} color="currentColor" className={clsx("shrink-0", iconClassName)} /> : null}
        {children}
        {RightIcon ? <RightIcon size={iconSize} color="currentColor" className={clsx("shrink-0", iconClassName)} /> : null}
      </button>
    );
  }
);
Button.displayName = "Button";
