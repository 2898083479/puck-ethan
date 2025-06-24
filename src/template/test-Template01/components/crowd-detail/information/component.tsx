import { merge } from "ts-deepmerge";
import type { InformationProps } from ".";
import { DefaultProps } from "./config";
import { cn } from "@/lib/utils";

interface Props extends InformationProps {
    isEditing: boolean;
}

export const Component = ({ isEditing, ...props }: Props) => {
    const {
        hidden,
        typo
    } = merge({ DefaultProps, ...props }) as InformationProps;

    if (hidden === "Y" && !isEditing) return <></>;

    return (
        <div
            className={cn(
                "flex flex-col",
                hidden === "Y" && "opacity-50"
            )}
            style={{
                "--font-family": typo.font,
                "--font-size": typo.size,
                "--font-weight": typo.weight,
                "--font-align": typo.align,
                "--font-line-height": typo.lineHeight,
                "--font-spacing": typo.spacing,
            } as React.CSSProperties}
        >

        </div>
    )
}