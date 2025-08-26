"use client";

import ListDropdown, { Option } from "./ListDropdown";

export default function PackageDropdown(props: {
  options: Option[];
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
}) {
  return (
    <ListDropdown
      label="Package"
      width={174}
      height={47}
      {...props}
    />
  );
}
