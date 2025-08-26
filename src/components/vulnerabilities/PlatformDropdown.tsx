"use client";

import ListDropdown, { Option } from "./ListDropdown";

export default function PlatformDropdown(props: {
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
}) {
  return (
    <ListDropdown
      label="Platform"
      width={189}
      height={47}
      {...props}
    />
  );
}
