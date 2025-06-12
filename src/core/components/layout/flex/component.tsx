import { cn } from "@/lib/utils";
import { DropZone } from "@measured/puck";
import { merge } from "ts-deepmerge";
import type { FlexProps } from ".";
import { DefaultProps } from "./config";

interface Props extends Partial<FlexProps> {
  isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
  const {
    hidden,
    maxWidth,
    align,
    gap,
    padding,
    background,
    fillHeight,
    flex,
  } = merge(DefaultProps, props) as FlexProps;

  if (hidden === "Y" && !isEditing) return <></>;

  return (
    <div
      className={cn(
        "w-full flex items-center relative",
        hidden === "Y" && "opacity-50",
        fillHeight === "Y" && "min-h-svh",
      )}
    >
      {background && (
        <img
          src={background}
          alt={background}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      <div
        className="w-full flex flex-col relative z-1"
        style={{
          padding: `${padding.y}px ${padding.x}px`,
          alignItems: align,
        }}
      >
        <div
          className="w-full"
          style={{
            maxWidth: `${maxWidth}px`,
          }}
        >
          <DropZone
            zone="flex"
            className="flex"
            style={{
              gap: `${gap}px`,
              flexDirection: flex === "row" ? "row" : "column",
              justifyContent: align,
            }}
          />
        </div>
      </div>
    </div>
  );
};
