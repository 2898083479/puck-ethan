"use client";

import { merge } from "ts-deepmerge";
import type { ButtonProps } from ".";
import { DefaultProps } from "./config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends Partial<ButtonProps> {
  isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
  //拿出全部的属性
  const {
    hidden,
    label,
    url,
    primary,
    background,
    width,
    height,
    fontSize,
  } = merge(DefaultProps, props) as ButtonProps;

  if (hidden === "Y" && !isEditing) return <></>;

  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center",
        hidden === "Y" && "opacity-50",
      )}
      style={{
        "--primary": primary,
        "--background": background,
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--font-size": `${fontSize}px`,
      } as React.CSSProperties}
    >
      <Button
        asChild
        className="w-full h-full"
        style={{
          borderColor: "var(--primary)",
          backgroundColor: "var(--background)",
          width: "var(--width)",
          height: "var(--height)",
          fontSize: "var(--font-size)",
        }}
      >
        <Link href={url}>{label}</Link>
      </Button>
    </div>
  );
};
